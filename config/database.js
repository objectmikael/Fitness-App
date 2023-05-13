import mongoose from "mongoose"

export default function connectToDatabase(){

    mongoose.connect('mongodb://127.0.0.1:27017/fitnessApp')

    const db = mongoose.connection
    db.on("connected", function(){
        console.log("Connected to MongoDB Successfully!")
    })
}