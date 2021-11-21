import graphql, {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from "graphql";
import { getData, setData } from "../data/dataUtils.js";
import { InfoField } from "./info.js";

export const UserType = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
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

export const UserInputType = new GraphQLInputObjectType({
  name: "UserInputType",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

export const UserUpdateMutation = {
  type: UserType,
  args: {
    input: { type: new GraphQLNonNull(UserInputType) },
  },
  resolve: (_parent, args) => {
    const { id, name } = args?.input;
    const updatedUsers = (getData()?.user ?? []).map((user) =>
      user.id === id ? { ...user, name: name } : { ...user }
    );
    setData({ ...getData(), user: updatedUsers });
    return (getData()?.user??[]).find(user=>user.id===id);
  },
};
