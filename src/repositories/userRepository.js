import { users } from "../data/users.js";

export default class UserRepository {
    constructor() {
        this.users = users
    }

    add(user) {
        users.push(user)
    }

    getAll() {
        return this.users
    }

    getUserById(id) {
        return this.users.filter(user => user.id === id)
    }
}