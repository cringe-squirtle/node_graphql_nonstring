import { graphqlHTTP } from "express-graphql";
import graphql from "graphql";

import { userField, UserUpdateMutation } from "./user.js";

export const queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    user: userField,
  },
});

export const mutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    update_user: UserUpdateMutation,
  },
});

export const UserSchema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export const rootGraphqlHTTP = graphqlHTTP({
  schema: UserSchema,
  graphiql: true,
});
