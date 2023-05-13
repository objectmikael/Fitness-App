import mongoose from "mongoose"

export default function connectToDatabase(){
    console.log(process.env.MONGODB_URL)
    mongoose.connect(process.env.MONGODB_URL)

    const db = mongoose.connection
    db.on("connected", function(){
        console.log("Connected to MongoDB Successfully!")
    })
}