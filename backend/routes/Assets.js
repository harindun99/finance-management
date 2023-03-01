const router = require("express").Router();
let Asset = require("../models/Asset");

//Add Assets to the database.

router.route("/add").post((req,res)=> {

    const codeno = req.body.codeno;
    const name = req.body.name;
    const type = req.body.type;
    const value = req.body.value;

    const newAsset = new Asset({

        codeno,
        name,
        type,
        value

    })

    newAsset.save().then(() => {
        res.json("Asset Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Fetched All Data from Database.

router.route("/").get((req,res) => {

    Asset.find().then((assets) =>{
        res.json(assets)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update  Specific Asset Data(User Data) in Database.

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {codeno,name,type,value} = req.body;

    const updateAsset = {
        codeno,
        name,
        type,
        value
    }

    await Asset.findByIdAndUpdate(userId, updateAsset)
    .then(() =>{
        res.send({status: "User updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//Delete Specific (User Data) Asset Data from database.

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Asset.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//Fetched Specific user Data from Database by providing it's Id.

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Asset.findById(userId)
    .then((asset) => {
        res.status(200).send({status: "User fetched",asset})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

//This code segment use to extract specific jason object from String array

router.route("/totalassets").get((req,res) => {

    Asset.find().then((assets) =>{

        let total_assets = 0;

        for (let i = 0; i < assets.length; i++) {
            total_assets += parseInt(assets[i].value);
        }

        res.json(total_assets);
        
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;