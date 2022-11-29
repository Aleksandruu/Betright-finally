const express = require('express');
const Joi = require('joi');
const router = express.Router();

const tipsteri = [{
  id:1,
  firstName:"Mischie",
  lastName:"Razvan",
  email: "test@test.com",
  password: "Admin",
  Tipsuri: [],
  NrTipsCorecte: 21,
  DataJoin: "19-09-2022",
  ROI: 20,
  YIELD:0,
  profit: 0
}];


//Get tipsteri

router.get('/', (req, res) =>{
  res.send(tipsteri);
})

//Get tipsteri by ID

router.get('/:id', (req, res) =>{
  const tipster = tipsteri.find(t => t.id === parseInt(req.params.id));
  if(!tipster) return res.status(404).send("This tipster doesn't found...");
  
  res.send(tipster);
});

//Post tipsteri

router.post('/', (req, res) =>{
  const tipster = {
    id:tipsteri.length+1,
    firstName:req.body.firstName,
    LastName:req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    Tipsuri: [],
    NrTipsCorecte: 0,
    DataJoin: req.body.DataJoin,
    ROI: 0,
    YIELD:0,
    profit: 0
  }
  
  tipsteri.push(tipster);
  res.send(tipster);
});

//Modificare tipster

router.put('/:id', (req, res) =>{
  const tipster = tipsteri.find(t => t.id === parseInt(req.params.id));
  if(!tipster) return res.status(404).send("This tipster doesn't found...");
  if(req.body.idTips){
    const TP = [...tipster.Tipsuri, req.body.idTips]
    tipster.tipsuri = TP
  }
  tipster.profit += req.body.raspuns ? req.body.profit : 0
  tipster.NtTipsCorecte += req.body.raspuns ? 1 : 0

  res.send(tipster);
})

//Delete tipster

router.delete('/:id', (req, res) =>{
  const tipster = tipsteri.find(t => t.id === parseInt(req.params.id));
  if(!tipster) return res.status(404).send("This tipster doesn't found...")

  const index = tipsteri.indexOf(tipster);
  tipsteri.splice(index, 1);

  res.send(tipster);
})

//Functie pentru validarea tipster-ului

const tipsterSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().min(3).max(255).email().required(),
  password: Joi.string().min(3).max(255).required()
});
    // const validation - tipsterSchema.validate(req.body);
    // res.send(validation);



module.exports = router;
