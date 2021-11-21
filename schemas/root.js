import {graphqlHTTP} from 'express-graphql'
import graphql from 'graphql'

import { userField } from './user.js';
  
export const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: userField
    }
  });

  export const UserSchema = new graphql.GraphQLSchema({query:queryType});

  export const rootGraphqlHTTP = graphqlHTTP({schema:UserSchema, graphiql:true})