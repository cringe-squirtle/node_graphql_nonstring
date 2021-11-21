import graphql from "graphql";
import { getData } from "../data/getData.js";
import { InfoField, InfoType } from "./info.js";

export const UserType = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    info: InfoField,
  },
});

export const userField = {
  type: UserType,
  args: {
    id: { type: graphql.GraphQLInt },
  },
  resolve: (_, { id }) => {
    return {
      ...(getData()?.user ?? []).find((user) => user.id === id),
    };
  },
};
