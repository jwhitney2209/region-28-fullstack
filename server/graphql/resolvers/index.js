import userResolvers from "./users.js";
import memberResolvers from "./members.js";

export const Query = {
  ...userResolvers.Query,
  ...memberResolvers.Query,
};

export const Mutation = {
  ...userResolvers.Mutation,
  ...memberResolvers.Mutation,
};
