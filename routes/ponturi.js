const express = require('express');
const router = express.Router();


const ponturi = [{
  id:1,
  cote: [2, 3, 5],
  raspuns: false,
  meci: "alegerea meciului",
  sport: "alegerea sportului",
  comentariu: "comentariul pt pont",
  investitie: 45,
}];

//REMINDER// aici trb sa modificam pentru ca trb sa stabilim diferenta dintre meciurile win si lose si cand e meci lose sa se scada din profit

function produs (a, x) {
  let s = 1;
  for(let i=0; i < x; i++) {
    s = s*a[i];
  }
  return s;
};

//Get ponturi

router.get('/', (req, res) =>{
  res.send(ponturi);
});

//Get ponturi by ID

router.get('/:id' , (req, res) =>{
  const pont = ponturi.find(p => p.id === parseInt(req.params.id));
  if(!pont) return res.status(404).send("This tips doesn't found...");
  
  res.send(pont);
});

//Post ponturi /REMINDER/ de refacut profitul

router.post('/', (req, res) =>{
  const pont = {
    id: ponturi.length+1,
    cote: req.body.cote,
    raspuns: false,
    meci: req.body.meci,
    sport: req.body.sport,
    comentariu: req.body.comentariu,
    investitie: req.body.investitie,
    profit: produs(req.body.cote, req.body.cote.length) * req.body.investitie
  }
  ponturi.push(pont);
  res.send(pont);
});

//Modificare pont

router.put('/:id', (req, res) =>{
  const pont = ponturi.find(p => p.id === parseInt(req.params.id));

  pont.raspuns = req.body.raspuns;

  res.send(pont);
});

//Delete pont

router.delete('/:id' , (req, res) =>{
  const pont = ponturi.find(p => p.id === parseInt(req.params.id));
  if(!pont) return res.status(404).send("This tips doesn't exist!");
  
  const index = ponturi.indexOf(pont);
  ponturi.splice(index, 1)
  res.send(pont);
});

module.exports = router;