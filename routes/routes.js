import express from "express"
import {    
    bespokeFitness, homepage, 
    chestAndTris, addChestAndTrisWorkout, updateChestAndTris, detailsChestAndTrisWorkout, updateChestAndTrisWorkout, updateChestAndTrisLog, deleteChestAndTrisWorkout, 
    legs, addLegsWorkout, updateLegs, detailsLegsWorkout, updateLegsWorkout, updateLegsLog, deleteLegsWorkout,
    backAndBis, addBackAndBisWorkout, updateBackAndBis, detailsBackAndBisWorkout, updateBackAndBisWorkout, updateBackAndBisLog, deleteBackAndBisWorkout,
    shoulders, addShouldersWorkout, updateShoulders, detailsShouldersWorkout, updateShouldersWorkout, updateShouldersLog, deleteShouldersWorkout,
    squatClean, addSquatCleanWorkout, updateSquatClean, detailsSquatCleanWorkout, updateSquatCleanWorkout, updateSquatCleanLog, deleteSquatCleanWorkout,
    api, isAuth 
} from "../controller/functions.js"

const router = express.Router()

//---------------------------------------------------------------------------
//Homepage
router.get("/", (request, response) => response.redirect("/bespokeFitness"))
router.get("/bespokeFitness", bespokeFitness)
router.get("/home", isAuth, homepage)

//---------------------------------------------------------------------------
//Chest & Triceps

router.get("/chestAndTris", isAuth, chestAndTris)

router.get("/addChestAndTrisWorkout", isAuth, addChestAndTrisWorkout)

router.post("/updateChestAndTris", updateChestAndTris)

router.get("/details/chestAndTris/:id", detailsChestAndTrisWorkout)

router.get("/updateChestAndTrisWorkout/:id", updateChestAndTrisWorkout)

router.post("/updateChestAndTrisLog/:id", updateChestAndTrisLog)

router.delete("/deleteChestAndTrisWorkout/:id", deleteChestAndTrisWorkout)

//---------------------------------------------------------------------------

//Legs

router.get("/legs", legs)

router.get("/addLegsWorkout", addLegsWorkout)

router.post("/updateLegs", updateLegs)

router.get("/details/legs/:id", detailsLegsWorkout)

router.get("/updateLegsWorkout/:id", updateLegsWorkout)

router.post("/updateLegsLog/:id", updateLegsLog)

router.delete("/deleteLegsWorkout/:id", deleteLegsWorkout)

//---------------------------------------------------------------------------

//Back & Biceps

router.get("/backAndBis", backAndBis)

router.get("/addBackAndBisWorkout", addBackAndBisWorkout)

router.post("/updateBackAndBis", updateBackAndBis)

router.get("/details/backAndBis/:id", detailsBackAndBisWorkout)

router.get("/updateBackAndBisWorkout/:id", updateBackAndBisWorkout)

router.post("/updateBackAndBisLog/:id", updateBackAndBisLog)

router.delete("/deleteBackAndBisWorkout/:id", deleteBackAndBisWorkout)

//---------------------------------------------------------------------------

//Shoulders

router.get("/shoulders", shoulders)

router.get("/addShouldersWorkout", addShouldersWorkout)

router.post("/updateShoulders", updateShoulders)

router.get("/details/shoulders/:id", detailsShouldersWorkout)

router.get("/updateShouldersWorkout/:id", updateShouldersWorkout)

router.post("/updateShouldersLog/:id", updateShouldersLog)

router.delete("/deleteShouldersWorkout/:id", deleteShouldersWorkout)

//---------------------------------------------------------------------------

//Olympic Weightlifting 

router.get("/squatClean", squatClean)

router.get("/addSquatCleanWorkout", addSquatCleanWorkout)

router.post("/updateSquatClean", updateSquatClean)

router.get("/details/squatClean/:id", detailsSquatCleanWorkout)

router.get("/updateSquatCleanWorkout/:id", updateSquatCleanWorkout)

router.post("/updateSquatCleanLog/:id", updateSquatCleanLog)

router.delete("/deleteSquatCleanWorkout/:id", deleteSquatCleanWorkout)
//---------------------------------------------------------------------------

//Testing

router.get("/api", api)


export {router}