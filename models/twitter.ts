import mongoose, { Schema, models } from "mongoose";



const twitterSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    followers: {
        type: Number,
        required: true
    },
    following: {
        type: Number, 
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    yearJoined: {
        type: Date,
        required: false
    },
    job: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    }
    

}, {timestamps: true})

const Twitter = models.Twitter || mongoose.model('Twitter', twitterSchema)

export default Twitter