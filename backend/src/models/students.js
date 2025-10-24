const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: true,
        validate(value) {
            if (!(validator.isEmail(value))) {
                throw new Error("Invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        maxlength: 10,
        minlength: 10,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    address: {
        type: String,
        required: true
    }
});


const student = new mongoose.model('student', studentSchema);

module.exports = student;