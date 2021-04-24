import { nanoid } from "nanoid";
import UserModel from '../model/UserModel'

export default {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'vinoz',
      age: 18
    }),
    userList: () => UserModel.getUserList()
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = new UserModel({
        name: args.name,
        age: args.age
      }).create()
      return user
    }
  }
}