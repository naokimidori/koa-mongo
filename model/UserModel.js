import { nanoid } from "nanoid"
import db from '../db';

class UserModel {
  constructor({name, age}) {
    this.id = nanoid()
    this.name = name
    this.age = age
  }

  create() {
    const userData = db.getData()['user']
    userData.push({
      id: this.id,
      name: this.name,
      age: this.age
    })
    db.setData('user', userData)
    return this
  }

  static getUserList() {
    return db.getData()['user']
  }
}

export default UserModel
