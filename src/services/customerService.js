export default class CustomerService {
    constructor(customerValidation, customerRepository) {
        this.customerValidation = customerValidation
        this.customerRepository = customerRepository
        this.errors = customerValidation.errors
    }

    add(customer) {
        if (!this.customerValidation.checkValidityForErrors(customer)) {
            this.customerRepository.add(customer)
        }
        else {
            console.log(this.errors)
        }
    }

    getAll() {
        return this.customerRepository.getAll()
    }

    getCustomerById(id) {
        return this.customerRepository.getCustomerById(id)
    }


}