import { UserModel } from "../../models/user";

export const typeDef = `

    extend type Mutation {
        createUser(input : UserInput) : User
    }

    input UserInput {
        userName : String!
        password : String!
        email : String!
        firstName : String
        lastName : String
        isActive : Boolean
        level : String
        avatar : String
    }

`;

export const resolvers = {
  Mutation: {
    createUser: async function(root, { input }) {
      return await UserModel.create(input);
    }
  }
};
