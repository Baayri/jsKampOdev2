import { users } from "../data/users.js";

export default class CustomerRepository {
    constructor() {
        this.customers = users.filter(user => user.type === "customer")
    }

    add(customer) {
        this.customers.push(customer)
    }

    getAll() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.filter(customer => customer.id === id)
    }
}