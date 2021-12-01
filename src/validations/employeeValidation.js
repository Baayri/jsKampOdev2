import DataError from "../models/dataError.js";
import UserValidation from "./userValidation.js";

export default class EmployeeValidation extends UserValidation {
    constructor() {
        super()
        this.requiredFields.push("salary")
        this.errors = []
    }

    checkValidityForErrors(employee) {
        let hasErrors = false
        for (const field of this.requiredFields) {
            if (!employee[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${field} is required`
                    , employee))
            }
        }

        if (Number.isNaN(Number.parseInt(employee.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem on ${employee.age} is NaN(not a number)`
                , employee))
        }

        return hasErrors
    }
}