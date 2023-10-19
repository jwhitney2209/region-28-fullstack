import "dotenv/config.js";
import bcrypt from "bcrypt";
import { signToken, AuthenticationError } from "../../utils/auth.js";
import { GraphQLError } from "graphql";
import { validateLoginInput, validateRegisterInput } from "../../utils/validators.js";
import { User } from "../../models/index.js";

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("members");
        return userData;
      }

      throw new AuthenticationError("Not logged in.");
    },
  },

  Mutation: {
    login: async (parent, { username, password }, context) => {
      if (context.user) {
        throw new Error('You are already logged in!');
      }
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new GraphQLError(errors);
      }

      const user = await User.findOne({ username });

      if (!user) {
        throw new GraphQLError("Invalid credentials.");
      }

      const correctPw = await bcrypt.compare(password, user.password);

      if (!correctPw) {
        throw new GraphQLError("Invalid credentials.");
      }

      const token = signToken(user);
      return { token, user };
    },
    register: async (parent, { username, password, confirmPassword }) => {
      const { valid, errors } = validateRegisterInput(
        username,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new GraphQLError("Errors", { errors });
      }

      const checkUser = await User.findOne({ username });

      if (checkUser) {
        throw new GraphQLError("This username is taken.");
      }

      const user = await User({
        username,
        password,
      });

      const res = await user.save();

      const token = signToken(res);

      return {
        token: token,
        user: {
          ...res._doc,
          _id: res._id
        }
      };
    },
  },
};


export default resolvers;