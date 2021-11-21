import graphql from "graphql";
import { getData } from "../data/dataUtils.js";

export const InfoType = new graphql.GraphQLObjectType({
  name: "Info",
  fields: {
    age: { type: graphql.GraphQLInt },
    gender: { type: graphql.GraphQLString },
  },
});

export const InfoField = {
  type: InfoType,
  resolve: (parent, _) => {
    return { ...(getData()?.info ?? []).find((info) => info.id === parent.id) };
  },
};
