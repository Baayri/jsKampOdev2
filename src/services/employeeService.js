export default class EmployeeServices {
    constructor(employeeValidation, employeeRepository) {
        this.employeeValidation = employeeValidation
        this.employeeRepository = employeeRepository
        this.errors = employeeValidation.errors
    }

    add(employee) {
        if (!this.employeeValidation.checkValidityForErrors(employee)) {
            this.employeeRepository.add(employee)
        }
        else {
            console.log(this.errors)
        }

    }

    getAll() {
        return this.employeeRepository.getAll()
    }

    getEmployeeById(id) {
        return this.employeeRepository.getEmployeeById(id)
    }



}