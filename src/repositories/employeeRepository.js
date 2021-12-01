import { users } from "../data/users.js";

export default class EmployeeRepository {
    constructor() {
        this.employees = users.filter(user => user.type === "employee")
    }

    add(employee) {
        this.employees.push(employee)
    }

    getAll() {
        return this.employees
    }

    getEmployeeById(id) {
        return this.employees.filter(employee => employee.id === id)
    }
}