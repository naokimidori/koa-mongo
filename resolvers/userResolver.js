import { nanoid } from "nanoid";

export default {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'vinoz',
      age: 18
    })
  }
}