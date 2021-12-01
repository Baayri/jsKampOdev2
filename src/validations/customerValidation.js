import DataError from "../models/dataError.js";
import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation {
    constructor() {
        super()
        this.errors = []
    }

    checkValidityForErrors(customer) {
        let hasErrors = false
        for (const field of this.requiredFields) {
            if (!customer[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${field} is required`
                    , customer))
            }
        }

        if (Number.isNaN(Number.parseInt(+customer.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem on ${customer.age} is NaN(not a number)`
                , customer))
        }

        return hasErrors
    }
}