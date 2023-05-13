import mongoose from "mongoose";


const ChestAndTrisModel = mongoose.Schema({
    exercise: String,
    date: Date,
    dcpSet1: Number,
    dcpSet2: Number,
    dcpSet3: Number,
    dcpSet4: Number,
    idfSet1: Number,
    idfSet2: Number,
    idfSet3: Number,
    idpSet1: Number,
    idpSet2: Number,
    idpSet3: Number,
    idpSet4: Number,
    cgpSet1: Number,
    cgpSet2: Number,
    cgpSet3: Number,
    pcfSet1: Number,
    pcfSet2: Number,
    pcfSet3: Number,
    dpSet1: Number,
    dpSet2: Number,
    dpSet3: Number,
    teSet1: Number,
    teSet2: Number,
    teSet3: Number,
    teSet4: Number,
    sakSet1: Number,
    sakSet2: Number,
    sakSet3: Number,
    sakSet4: Number,
    tpSet1: Number,
    tpSet2: Number,
    tpSet3: Number,
    dSet1: Number,
    ioSet1: Number
},
{
    timestamps: true
}
)

const LegsModel = mongoose.Schema({
    exercise: String,
    date: Date,
    bsSet1: Number,
    bsSet2: Number,
    bsSet3: Number,
    bsSet4: Number,
    alSet1: Number,
    alSet2: Number,
    alSet3: Number,
    surlSet1: Number,
    surlSet2: Number,
    surlSet3: Number,
    psSet1: Number,
    psSet2: Number,
    psSet3: Number,
    bulsSet1: Number,
    bulsSet2: Number,
    bulsSet3: Number,
    sldSet1: Number,
    sldSet2: Number,
    sldSet3: Number,
    slcrSet1: Number,
    slcrSet2: Number,
    scrSet1: Number,
    scrSet2: Number,
    ioSet1: Number,
    ioSet2: Number
},
{
    timestamps: true
}
)

const BackAndBisModel = mongoose.Schema({
    exercise: String,
    date: Date,
    dSet1: Number,
    dSet2: Number,
    dSet3: Number,
    dSet4: Number,
    dpSet1: Number,
    dpSet2: Number,
    dpSet3: Number,
    dpSet4: Number,
    puSet1: Number,
    puSet2: Number,
    puSet3: Number,
    ezbrSet1: Number,
    ezbrSet2: Number,
    ezbrSet3: Number,
    oarSet1: Number,
    oarSet2: Number,
    oarSet3: Number,
    rfSet1: Number,
    rfSet2: Number,
    rfSet3: Number,
    cgcuSet1: Number,
    cgcuSet2: Number,
    cgcuSet3: Number,
    sbcSet1: Number,
    sbcSet2: Number,
    sbcSet3: Number,
    sbcSet4: Number,
    hcSet1: Number,
    hcSet2: Number,
    hcSet3: Number,
    nezbcSet1: Number,
    nezbcSet2: Number,
    nezbcSet3: Number,
    nezbcSet4: Number,
    acSet1: Number,
    acSet2: Number
},
{
    timestamps: true
}
)

const ShouldersModel = mongoose.Schema({
    exercise: String,
    date: Date,
    spSet1: Number,
    spSet2: Number,
    spSet3: Number,
    spSet4: Number,
    lrSet1: Number,
    lrSet2: Number,
    lrSet3: Number,
    urSet1: Number,
    urSet2: Number,
    urSet3: Number,
    urSet4: Number,
    ezbupSet1: Number,
    ezbupSet2: Number,
    ezbupSet3: Number,
    frSet1: Number,
    frSet2: Number,
    frSet3: Number,
    rdrSet1: Number,
    rdrSet2: Number,
    rdrSet3: Number,
    dsSet1: Number,
    dsSet2: Number,
    dsSet3: Number,
    dsSet4: Number,
    dstSet1: Number,
    dstSet2: Number,
    dstSet3: Number,
    sswSet1: Number,
    trSet1: Number
},
{
    timestamps: true
}
)

const SquatCleanModel = mongoose.Schema({
    exercise: String,
    date: Date,
    hpSet1: Number,
    hpSet2: Number,
    hpSet3: Number,
    pcSet1: Number,
    pcSet2: Number,
    pcSet3: Number,
    scSet1: Number,
    scSet2: Number,
    scSet3: Number,
},
{
    timestamps: true
}
)

const ChestAndTris = mongoose.model("ChestAndTris", ChestAndTrisModel)
const Legs = mongoose.model("Legs", LegsModel)
const BackAndBis = mongoose.model("BackAndBis", BackAndBisModel)
const Shoulders = mongoose.model("Shoulders", ShouldersModel)
const SquatClean = mongoose.model("SquatClean", SquatCleanModel)

export {ChestAndTris, Legs, BackAndBis, Shoulders, SquatClean}