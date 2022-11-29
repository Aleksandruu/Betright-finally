const fetch = require('node-fetch');
const express = require ('express');
const { pipeline } = require('nodemailer/lib/xoauth2');
const router = express.Router();

//Get meciuri

router.get ('/' , (req, res) =>{
  res.send(meciuri);
})


// Get meciuri by ID

router.get ('/:id' , (req, res) =>{
  const meci = meciuri.find(m => m.id === parseInt(req.params.id));
  if(!meci) return res.status(404).send("This match doesn't found...");
  
  res.send(meci);
})

//Post meci

router.post ('/' , (req, res) =>{
  const meci = {
    id: meciuri.length+1,
    name: req.body.name,
    data: req.body.data,
    scor: undefined,
    ponturi: [],
    cote: [],
    categorie: req.body.categorie,
    cotaMedie: []
  }

  meciuri.push(meci);
  res.send(meci);
})

//Modificare meci

router.put('/:id', (req, res) =>{
  const meci = meciuri.find(m => m.id === parseInt(req.params.id));
  if(!meci) return res.status(404).send("This match is not found...")

  if(req.body.idTips){
    meci.ponturi = [...meci.ponturi, req.body.idTips]
  }
  meci.scor = req.body.scor
  
  res.send(meci);
})

//Delete meci

router.delete('/:id' , (req, res) =>{
  const meci = meciuri.find(p => p.id === parseInt(req.params.id));
  if(!meci) return res.status(404).send("This match doesn't exist!");
  
  const index = meciuri.indexOf(meci);
  meciuri.splice(index, 1)
  res.send(meci);
});

module.exports = router;