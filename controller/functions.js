import { ChestAndTris, Legs, BackAndBis, Shoulders, SquatClean } from "../models/exerciseData.js"
import axios from "axios"



//Bespoke Fitness Home
function bespokeFitness (request, response){
    response.render("bespokeFitness.ejs")
}

//---------------------------------------------------------------------------

//Homepage
function homepage (request, response){
    axios.get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            'X-RapidAPI-Key': 'e43a210f72mshdcbdf39f1cc472ap109a06jsn537f731f907d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
    .then(apiData => apiData.data)
    .then (apiData => {
        response.render("homepage.ejs", {apiData:apiData})
    })
}

//---------------------------------------------------------------------------

//Chest & Triceps
async function chestAndTris (request, response){
    if (request.user !== undefined){
        let user = request.user
        let exercise = await user.populate("workoutChest")
        // let maxBench = await ChestAndTris.find().sort({"dcpSet4": -1}).limit(1)
        response.render("chestAndTris.ejs", {exercise:exercise.workoutChest})
    } else {
        console.log("You need to log in to view your workout")
        response.redirect("/login")
    }
}

function addChestAndTrisWorkout (request, response){
    axios.get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            'X-RapidAPI-Key': 'e43a210f72mshdcbdf39f1cc472ap109a06jsn537f731f907d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
    .then(apiData => apiData.data)
    .then (apiData => {
        response.render("addChestAndTrisWorkout.ejs", {apiData:apiData})
    })
}

async function updateChestAndTris(request, response){
    let data = request.body
    await ChestAndTris.create({
        exercise: "Chest and Tris",
        date: data.date,
        dcpSet1: data.dcpSet1,
        dcpSet2: data.dcpSet2,
        dcpSet3: data.dcpSet3,
        dcpSet4: data.dcpSet4,
        idfSet1: data.idfSet1,
        idfSet2: data.idfSet2,
        idfSet3: data.idfSet3,
        idpSet1: data.idpSet1,
        idpSet2: data.idpSet2,
        idpSet3: data.idpSet3,
        idpSet4: data.idpSet4,
        cgpSet1: data.cgpSet1,
        cgpSet2: data.cgpSet2,
        cgpSet3: data.cgpSet3,
        pcfSet1: data.pcfSet1,
        pcfSet2: data.pcfSet2,
        pcfSet3: data.pcfSet3,
        dpSet1: data.dpSet1,
        dpSet2: data.dpSet2,
        dpSet3: data.dpSet3,
        teSet1: data.teSet1,
        teSet2: data.teSet2,
        teSet3: data.teSet3,
        teSet4: data.teSet4,
        sakSet1: data.sakSet1,
        sakSet2: data.sakSet2,
        sakSet3: data.sakSet3,
        sakSet4: data.sakSet4,
        tpSet1: data.tpSet1,
        tpSet2: data.tpSet2,
        tpSet3: data.tpSet3,
        dSet1: data.dSet1,
        ioSet1: data.ioSet1
    })
    .then (async (workout) => {
        if (request.user !== undefined){
            const user = request.user
            user.workoutChest.push(workout._id)
            await user.save().then(doc => console.log("Workout saved."))
        } else {
            console.log("You need to log in to add a new workout.")
        }
    })
    .then (()=>response.redirect("/chestAndTris"))
}

async function detailsChestAndTrisWorkout (request, response){
    let dbId = request.params.id
    let workout = await ChestAndTris.findById(dbId)
    response.render("detailsChestAndTrisWorkout.ejs", {exercise:workout})
}

async function updateChestAndTrisWorkout (request, response){
    let dbId = request.params.id
    let workout = await ChestAndTris.findById(dbId)
    axios.get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            'X-RapidAPI-Key': 'e43a210f72mshdcbdf39f1cc472ap109a06jsn537f731f907d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
    .then(apiData => apiData.data)
    .then (apiData => {
        response.render("updateChestAndTrisWorkout.ejs", {exercise:workout, apiData:apiData})
    })
}

async function updateChestAndTrisLog (request, response){
    let dbId = request.params.id
    let data = request.body
    await ChestAndTris.findByIdAndUpdate(dbId, {
        exercise: "Chest and Tris",
        date: data.date,
        dcpSet1: data.dcpSet1,
        dcpSet2: data.dcpSet2,
        dcpSet3: data.dcpSet3,
        dcpSet4: data.dcpSet4,
        idfSet1: data.idfSet1,
        idfSet2: data.idfSet2,
        idfSet3: data.idfSet3,
        idpSet1: data.idpSet1,
        idpSet2: data.idpSet2,
        idpSet3: data.idpSet3,
        idpSet4: data.idpSet4,
        cgpSet1: data.cgpSet1,
        cgpSet2: data.cgpSet2,
        cgpSet3: data.cgpSet3,
        pcfSet1: data.pcfSet1,
        pcfSet2: data.pcfSet2,
        pcfSet3: data.pcfSet3,
        dpSet1: data.dpSet1,
        dpSet2: data.dpSet2,
        dpSet3: data.dpSet3,
        teSet1: data.teSet1,
        teSet2: data.teSet2,
        teSet3: data.teSet3,
        teSet4: data.teSet4,
        sakSet1: data.sakSet1,
        sakSet2: data.sakSet2,
        sakSet3: data.sakSet3,
        sakSet4: data.sakSet4,
        tpSet1: data.tpSet1,
        tpSet2: data.tpSet2,
        tpSet3: data.tpSet3,
        dSet1: data.dSet1,
        ioSet1: data.ioSet1
    })
    response.redirect("/chestAndTris")
}

async function deleteChestAndTrisWorkout (request, response){
    let dbId = request.params.id
    let user = request.user
    let workoutIdx = await user.workoutChest.indexOf(dbId)
    user.workoutChest.splice(workoutIdx, 1)
    await user.save()
    response.redirect("/chestAndTris")
}

//---------------------------------------------------------------------------

//Legs
async function legs (request, response){
    if (request.user !== undefined){
        let user = request.user
        let exercise = await user.populate("workoutLegs")
        // let maxBackSquat = await Legs.find().sort({"bsSet4": -1}).limit(1)
        response.render("legs.ejs", {exercise:exercise.workoutLegs})
    } else {
        console.log("You need to log in to view your workout")
        response.redirect("/login")
    }
}

function addLegsWorkout (request, response){
    response.render("addLegsWorkout.ejs")
}

async function updateLegs(request, response){
    let data = request.body
    await Legs.create({
        exercise: "Legs",
        date: data.date,
        bsSet1: data.bsSet1,
        bsSet2: data.bsSet2,
        bsSet3: data.bsSet3,
        bsSet4: data.bsSet4,
        alSet1: data.alSet1,
        alSet2: data.alSet2,
        alSet3: data.alSet3,
        surlSet1: data.surlSet1,
        surlSet2: data.surlSet2,
        surlSet3: data.surlSet3,
        psSet1: data.psSet1,
        psSet2: data.psSet2,
        psSet3: data.psSet3,
        bulsSet1: data.bulsSet1,
        bulsSet2: data.bulsSet2,
        bulsSet3: data.bulsSet3,
        sldSet1: data.sldSet1,
        sldSet2: data.sldSet2,
        sldSet3: data.sldSet3,
        slcrSet1: data.slcrSet1,
        slcrSet2: data.slcrSet2,
        scrSet1: data.scrSet1,
        scrSet2: data.scrSet2,
        ioSet1: data.ioSet1,
        ioSet2: data.ioSet2
    })
    .then (async (workout) => {
        if (request.user !== undefined){
            const user = request.user
            user.workoutLegs.push(workout._id)
            await user.save().then(doc => console.log("Workout saved."))
        } else {
            console.log("You need to log in to add a new workout.")
        }
    })
    .then (()=>response.redirect("/legs"))
}

async function detailsLegsWorkout (request, response){
    let dbId = request.params.id
    let workout = await Legs.findById(dbId)
    response.render("detailsLegsWorkout.ejs", {exercise:workout})
}

async function updateLegsWorkout (request, response){
    let dbId = request.params.id
    let workout = await Legs.findById(dbId)
    response.render("updateLegsWorkout.ejs", {exercise:workout})
}

async function updateLegsLog (request, response){
    let dbId = request.params.id
    let data = request.body
    await Legs.findByIdAndUpdate(dbId, {
        exercise: "Legs",
        date: data.date,
        bsSet1: data.bsSet1,
        bsSet2: data.bsSet2,
        bsSet3: data.bsSet3,
        bsSet4: data.bsSet4,
        alSet1: data.alSet1,
        alSet2: data.alSet2,
        alSet3: data.alSet3,
        surlSet1: data.surlSet1,
        surlSet2: data.surlSet2,
        surlSet3: data.surlSet3,
        psSet1: data.psSet1,
        psSet2: data.psSet2,
        psSet3: data.psSet3,
        bulsSet1: data.bulsSet1,
        bulsSet2: data.bulsSet2,
        bulsSet3: data.bulsSet3,
        sldSet1: data.sldSet1,
        sldSet2: data.sldSet2,
        sldSet3: data.sldSet3,
        slcrSet1: data.slcrSet1,
        slcrSet2: data.slcrSet2,
        scrSet1: data.scrSet1,
        scrSet2: data.scrSet2,
        ioSet1: data.ioSet1,
        ioSet2: data.ioSet2
    })
    response.redirect("/legs")
}

async function deleteLegsWorkout (request, response){
    let dbId = request.params.id
    let user = request.user
    let workoutIdx = await user.workoutLegs.indexOf(dbId)
    user.workoutLegs.splice(workoutIdx, 1)
    await user.save()
    response.redirect("/legs")
}

//---------------------------------------------------------------------------

//Back & Biceps
async function backAndBis (request, response){
    if (request.user !== undefined){
        let user = request.user
        let exercise = await user.populate("workoutBack")
        // let maxDeadlift = await BackAndBis.find().sort({"dSet4": -1}).limit(1)
        response.render("backAndBis.ejs", {exercise:exercise.workoutBack})
    } else {
        console.log("You need to log in to view your workout")
        response.redirect("/login")
    }
}

function addBackAndBisWorkout (request, response){
    response.render("addBackAndBisWorkout.ejs")
}

async function updateBackAndBis(request, response){
    let data = request.body
    await BackAndBis.create({
        exercise: "Back and Bis",
        date: data.date,
        dSet1: data.dSet1,
        dSet2: data.dSet2,
        dSet3: data.dSet3,
        dSet4: data.dSet4,
        dpSet1: data.dpSet1,
        dpSet2: data.dpSet2,
        dpSet3: data.dpSet3,
        dpSet4: data.dpSet4,
        puSet1: data.puSet1,
        puSet2: data.puSet2,
        puSet3: data.puSet3,
        ezbrSet1: data.ezbrSet1,
        ezbrSet2: data.ezbrSet2,
        ezbrSet3: data.ezbrSet3,
        oarSet1: data.oarSet1,
        oarSet2: data.oarSet2,
        oarSet3: data.oarSet3,
        rfSet1: data.rfSet1,
        rfSet2: data.rfSet2,
        rfSet3: data.rfSet3,
        cgcuSet1: data.cgcuSet1,
        cgcuSet2: data.cgcuSet2,
        cgcuSet3: data.cgcuSet3,
        sbcSet1: data.sbcSet1,
        sbcSet2: data.sbcSet2,
        sbcSet3: data.sbcSet3,
        sbcSet4: data.sbcSet4,
        hcSet1: data.hcSet1,
        hcSet2: data.hcSet2,
        hcSet3: data.hcSet3,
        nezbcSet1: data.nezbcSet1,
        nezbcSet2: data.nezbcSet2,
        nezbcSet3: data.nezbcSet3,
        acSet1: data.acSet1,
        acSet2: data.acSet2
    })
    .then (async (workout) => {
        if (request.user !== undefined){
            const user = request.user
            user.workoutBack.push(workout._id)
            await user.save().then(doc => console.log("Workout saved."))
        } else {
            console.log("You need to log in to add a new workout.")
        }
    })
    .then (()=>response.redirect("/backAndBis"))
}

async function detailsBackAndBisWorkout (request, response){
    let dbId = request.params.id
    let workout = await BackAndBis.findById(dbId)
    response.render("detailsBackAndBisWorkout.ejs", {exercise:workout})
}

async function updateBackAndBisWorkout (request, response){
    let dbId = request.params.id
    let workout = await BackAndBis.findById(dbId)
    response.render("updateBackAndBisWorkout.ejs", {exercise:workout})
}

async function updateBackAndBisLog (request, response){
    let dbId = request.params.id
    let data = request.body
    await BackAndBis.findByIdAndUpdate(dbId, {
        exercise: "Back and Bis",
        date: data.date,
        dSet1: data.dSet1,
        dSet2: data.dSet2,
        dSet3: data.dSet3,
        dSet4: data.dSet4,
        dpSet1: data.dpSet1,
        dpSet2: data.dpSet2,
        dpSet3: data.dpSet3,
        dpSet4: data.dpSet4,
        puSet1: data.puSet1,
        puSet2: data.puSet2,
        puSet3: data.puSet3,
        ezbrSet1: data.ezbrSet1,
        ezbrSet2: data.ezbrSet2,
        ezbrSet3: data.ezbrSet3,
        oarSet1: data.oarSet1,
        oarSet2: data.oarSet2,
        oarSet3: data.oarSet3,
        rfSet1: data.rfSet1,
        rfSet2: data.rfSet2,
        rfSet3: data.rfSet3,
        cgcuSet1: data.cgcuSet1,
        cgcuSet2: data.cgcuSet2,
        cgcuSet3: data.cgcuSet3,
        sbcSet1: data.sbcSet1,
        sbcSet2: data.sbcSet2,
        sbcSet3: data.sbcSet3,
        sbcSet4: data.sbcSet4,
        hcSet1: data.hcSet1,
        hcSet2: data.hcSet2,
        hcSet3: data.hcSet3,
        nezbcSet1: data.nezbcSet1,
        nezbcSet2: data.nezbcSet2,
        nezbcSet3: data.nezbcSet3,
        acSet1: data.acSet1,
        acSet2: data.acSet2
    })
    response.redirect("/backAndBis")
}

async function deleteBackAndBisWorkout (request, response){
    let dbId = request.params.id
    let user = request.user
    let workoutIdx = await user.workoutBack.indexOf(dbId)
    user.workoutBack.splice(workoutIdx, 1)
    await user.save()
    response.redirect("/backAndBis")
}

//---------------------------------------------------------------------------

//Shoulders
async function shoulders (request, response){
    if (request.user !== undefined){
        let user = request.user
        let exercise = await user.populate("workoutShoulders")
        // let maxShoulderPress = await Shoulders.find().sort({"spSet4": -1}).limit(1)
        response.render("shoulders.ejs", {exercise:exercise.workoutShoulders})
    } else {
        console.log("You need to log in to view your workout")
        response.redirect("/login")
    }
}

function addShouldersWorkout (request, response){
    response.render("addShouldersWorkout.ejs")
}

async function updateShoulders(request, response){
    let data = request.body
    await Shoulders.create({
        exercise: "Shoulders",
        date: data.date,
        spSet1: data.spSet1,
        spSet2: data.spSet2,
        spSet3: data.spSet3,
        spSet4: data.spSet4,
        lrSet1: data.lrSet1,
        lrSet2: data.lrSet2,
        lrSet3: data.lrSet3,
        urSet1: data.urSet1,
        urSet2: data.urSet2,
        urSet3: data.urSet3,
        urSet4: data.urSet4,
        ezbupSet1: data.ezbupSet1,
        ezbupSet2: data.ezbupSet2,
        ezbupSet3: data.ezbupSet3,
        frSet1: data.frSet1,
        frSet2: data.frSet2,
        frSet3: data.frSet3,
        rdrSet1: data.rdrSet1,
        rdrSet2: data.rdrSet2,
        rdrSet3: data.rdrSet3,
        dsSet1: data.dsSet1,
        dsSet2: data.dsSet2,
        dsSet3: data.dsSet3,
        dsSet4: data.dsSet4,
        dstSet1: data.dstSet1,
        dstSet2: data.dstSet2,
        dstSet3: data.dstSet3,
        sswSet1: data.sswSet1,
        trSet1: data.trSet1
    })
    .then (async (workout) => {
        if (request.user !== undefined){
            const user = request.user
            user.workoutShoulders.push(workout._id)
            await user.save().then(doc => console.log("Workout saved."))
        } else {
            console.log("You need to log in to add a new workout.")
        }
    })
    .then (()=>response.redirect("/shoulders"))
}

async function detailsShouldersWorkout (request, response){
    let dbId = request.params.id
    let workout = await Shoulders.findById(dbId)
    response.render("detailsShouldersWorkout.ejs", {exercise:workout})
}

async function updateShouldersWorkout (request, response){
    let dbId = request.params.id
    let workout = await Shoulders.findById(dbId)
    response.render("updateShouldersWorkout.ejs", {exercise:workout})
}

async function updateShouldersLog (request, response){
    let dbId = request.params.id
    let data = request.body
    await Shoulders.findByIdAndUpdate(dbId, {
        exercise: "Shoulders",
        date: data.date,
        spSet1: data.spSet1,
        spSet2: data.spSet2,
        spSet3: data.spSet3,
        spSet4: data.spSet4,
        lrSet1: data.lrSet1,
        lrSet2: data.lrSet2,
        lrSet3: data.lrSet3,
        urSet1: data.urSet1,
        urSet2: data.urSet2,
        urSet3: data.urSet3,
        urSet4: data.urSet4,
        ezbupSet1: data.ezbupSet1,
        ezbupSet2: data.ezbupSet2,
        ezbupSet3: data.ezbupSet3,
        frSet1: data.frSet1,
        frSet2: data.frSet2,
        frSet3: data.frSet3,
        rdrSet1: data.rdrSet1,
        rdrSet2: data.rdrSet2,
        rdrSet3: data.rdrSet3,
        dsSet1: data.dsSet1,
        dsSet2: data.dsSet2,
        dsSet3: data.dsSet3,
        dsSet4: data.dsSet4,
        dstSet1: data.dstSet1,
        dstSet2: data.dstSet2,
        dstSet3: data.dstSet3,
        sswSet1: data.sswSet1,
        trSet1: data.trSet1
    })
    response.redirect("/shoulders")
}

async function deleteShouldersWorkout (request, response){
    let dbId = request.params.id
    let user = request.user
    let workoutIdx = await user.workoutShoulders.indexOf(dbId)
    user.workoutShoulders.splice(workoutIdx, 1)
    await user.save()
    response.redirect("/shoulders")
}

//---------------------------------------------------------------------------

//Olympic Weightlifting 
async function squatClean (request, response){
    if (request.user !== undefined){
        let user = request.user
        let exercise = await user.populate("workoutClean")
        // let maxSquatClean = await SquatClean.find().sort({"scSet3": -1}).limit(1)
        response.render("squatClean.ejs", {exercise:exercise.workoutClean})
    } else {
        console.log("You need to log in to view your workout")
        response.redirect("/login")
    }
}

function addSquatCleanWorkout (request, response){
    axios.get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            'X-RapidAPI-Key': 'e43a210f72mshdcbdf39f1cc472ap109a06jsn537f731f907d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
    .then(apiData => apiData.data)
    .then (apiData => {
        response.render("addSquatCleanWorkout.ejs", {apiData:apiData})
    })
}

async function updateSquatClean(request, response){
    let data = request.body
    await SquatClean.create({
        exercise: "Squat Clean",
        date: data.date,
        hpSet1: data.hpSet1,
        hpSet2: data.hpSet2,
        hpSet3: data.hpSet3,
        pcSet1: data.pcSet1,
        pcSet2: data.pcSet2,
        pcSet3: data.pcSet3,
        scSet1: data.scSet1,
        scSet2: data.scSet2,
        scSet3: data.scSet3,
    })
    .then (async (workout) => {
        if (request.user !== undefined){
            const user = request.user
            user.workoutClean.push(workout._id)
            await user.save().then(doc => console.log("Workout saved."))
        } else {
            console.log("You need to log in to add a new workout.")
        }
    })
    .then (()=>response.redirect("/squatClean"))
}

async function detailsSquatCleanWorkout (request, response){
    let dbId = request.params.id
    let workout = await SquatClean.findById(dbId)
    response.render("detailsSquatCleanWorkout.ejs", {exercise:workout})
}

async function updateSquatCleanWorkout (request, response){
    let dbId = request.params.id
    let workout = await SquatClean.findById(dbId)
    response.render("updateSquatCleanWorkout.ejs", {exercise:workout})
}

async function updateSquatCleanLog (request, response){
    let dbId = request.params.id
    let data = request.body
    await SquatClean.findByIdAndUpdate(dbId, {
        exercise: "Squat Clean",
        date: data.date,
        hpSet1: data.hpSet1,
        hpSet2: data.hpSet2,
        hpSet3: data.hpSet3,
        pcSet1: data.pcSet1,
        pcSet2: data.pcSet2,
        pcSet3: data.pcSet3,
        scSet1: data.scSet1,
        scSet2: data.scSet2,
        scSet3: data.scSet3,
    })
    response.redirect("/squatClean")
}

async function deleteSquatCleanWorkout (request, response){
    let dbId = request.params.id
    let user = request.user
    let workoutIdx = await user.workoutClean.indexOf(dbId)
    user.workoutClean.splice(workoutIdx, 1)
    await user.save()
    response.redirect("/squatClean")
}
//---------------------------------------------------------------------------

//API
function api (request, response){
    axios.get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
            'X-RapidAPI-Key': 'e43a210f72mshdcbdf39f1cc472ap109a06jsn537f731f907d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })
    .then(apiData => apiData.data)
    .then (apiData => response.send(apiData))
}


//auth
function isAuth (request, response, next){
    if (request.isAuthenticated()){
        next()
    } else {
        response.status(401).json({message: "You are not authorized to view this resource."})
    }
}



export {
    homepage, 
    chestAndTris, addChestAndTrisWorkout, updateChestAndTris, detailsChestAndTrisWorkout, updateChestAndTrisWorkout, updateChestAndTrisLog, deleteChestAndTrisWorkout, 
    legs, addLegsWorkout, updateLegs, detailsLegsWorkout, updateLegsWorkout, updateLegsLog, deleteLegsWorkout,
    backAndBis, addBackAndBisWorkout, updateBackAndBis, detailsBackAndBisWorkout, updateBackAndBisWorkout, updateBackAndBisLog, deleteBackAndBisWorkout,
    shoulders, addShouldersWorkout, updateShoulders, detailsShouldersWorkout, updateShouldersWorkout, updateShouldersLog, deleteShouldersWorkout,
    squatClean, addSquatCleanWorkout, updateSquatClean, detailsSquatCleanWorkout, updateSquatCleanWorkout, updateSquatCleanLog, deleteSquatCleanWorkout,
    api, bespokeFitness, isAuth
}