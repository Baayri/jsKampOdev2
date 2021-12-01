export default class UserService {
    constructor(userRepository, loggerService) {
        this.userRepository = userRepository
        this.errors = []
        this.loggerService = loggerService
    }

    add(user) {
        this.userRepository.add(user)
    }

    getAll() {
        return this.userRepository.getAll()
    }

    getUserById(id) {
        return this.userRepository.getUserById(id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1
            }
            else if (customer1.firstName === customer2.firstName) {
                return 0
            }
            else {
                return 1
            }
        })
    }

}