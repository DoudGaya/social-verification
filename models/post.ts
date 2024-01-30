import mongoose, { Schema, models } from "mongoose";


const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
})


const Post = models.Post || mongoose.model("Post", postSchema)
export default Post