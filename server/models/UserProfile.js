const { Schema, model } = require('mongoose')
const emailValidator = require('../utils/emailValidator')

const userProfileSchema = Schema({
    surname: {
        type: String,
        required: [true, 'Name is require!'],
        min: 2,
        max: 30
    },
    url: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is require!'],
        trim: true
    },
    country: {
        type: String,
        required: [true, 'Country is require!'],
        trim: true
    },
    buyer: {
        type: Boolean,
        default: false
    },
    seller: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

const UserProfile = model('userProfile', userProfileSchema)

module.exports = UserProfile;