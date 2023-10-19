import "dotenv/config.js";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";


export const AuthenticationError = new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  })

export const authMiddleware = function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split("Bearer ")[1];
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: "1h",
      });
      req.user = data;
    } catch (err) {
      console.log(err);
      console.log("Invalid token");
    }

    return req;
  }

export const signToken = function ({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  }

