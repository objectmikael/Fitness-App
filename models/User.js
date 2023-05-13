import mongoose from "mongoose"


const UserModel = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    workoutChest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChestAndTris' }],
    workoutLegs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Legs'}],
    workoutBack: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BackAndBis'}],
    outShoulders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoulders'}],
    workoutCleaworkn: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SquatClean' }]            
  }, {
    timestamps: true
});


const User = mongoose.model("User", UserModel)

export{User} 