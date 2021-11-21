import graphql from "graphql";
import { getData } from "../data/getData.js";

export const InfoType = new graphql.GraphQLObjectType({
  name: "Info",
  fields: {
    age: { type: graphql.GraphQLInt },
    gender: { type: graphql.GraphQLString },
  },
});

export const InfoField = {
  type: InfoType,
  args: {
    id: { type: graphql.GraphQLString },
  },
  resolve: (_, { id }) => {
    return { ...(getData()?.info ?? []).find((info) => info.id === id) };
  },
};
