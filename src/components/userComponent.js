import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import User from "../models/user.js"
import CustomerRepository from "../repositories/customerRepository.js"
import EmployeeRepository from "../repositories/employeeRepository.js"
import UserRepository from "../repositories/userRepository.js"
import CustomerService from "../services/customerService.js"
import EmployeeServices from "../services/employeeService.js"
import UserService from "../services/userService.js"
import CustomerValidation from "../validations/customerValidation.js"
import EmployeeValidation from "../validations/employeeValidation.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(new UserRepository(), logger1)

let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))






let customer = { id: 1, firstName: "Engin" }

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", 21, "213213123")
let employeeToAdd = new Employee(1, "Seda", "Yılmaz", "Ankara", "a21", 8000)
customerToAdd.type = "customer"

console.log("-----------------------User-----------------------")

console.log(userService.getAll())
console.log(userService.getUserById(5))

//userService.load()
// userService.add(customerToAdd)
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)
// console.log(userService.getCustomersSorted())


console.log("---------------------Customer---------------------")

let customerService = new CustomerService(new CustomerValidation(), new CustomerRepository())
customerService.add(users[0])
console.log(customerService.getAll())
console.log(customerService.getCustomerById(6))

console.log("---------------------Employee---------------------")

let employeeService = new EmployeeServices(new EmployeeValidation(), new EmployeeRepository())

employeeService.add(employeeToAdd)
console.log(employeeService.getAll())
console.log(employeeService.getEmployeeById(3))




