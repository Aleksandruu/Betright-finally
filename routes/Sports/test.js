const fetch = require('node-fetch');
const express = require ('express');
const router = express.Router();

//////FOOTBAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let meciuri = [];
// fetch('https://v3.football.api-sports.io/fixtures?date=2022-11-25&timezone=Europe/Bucharest', { method: 'GET', headers: {
//   'x-rapidapi-host': 'v3.football.api-sports.io',
//   'x-rapidapi-key': '1d08dbe1bb68a1eafc90e176acad0404',
// }} )
// .then((res) => {
//   //console.log(res)
//   return res.json()
// })
// .then((json) => {
//     console.log(json.response)  
//     meciuri = json.response.map(meci =>{
//       const id = meci.fixture.id
//       const name =  meci.teams.home.name + " vs " + meci.teams.away.name
//       const data = meci.fixture.date
//       const scor = meci.goals
//       const categorie = "Fotbal"
//       const logoTeamHome = meci.teams.home.logo
//       const logoTeamAway = meci.teams.away.logo
//       const ponturi = []
//       let cote = []
//       //console.log(meci.id)  
//     return {id, name, data, scor, categorie, ponturi,cote}
//     }
//   )
// })

///ODDS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let odds = [];
// fetch("https://v3.football.api-sports.io/odds?fixture=855734", { 
//   method: 'GET', 
//   headers: {
//   'x-rapidapi-host': 'v3.football.api-sports.io',
//   'x-rapidapi-key': '1d08dbe1bb68a1eafc90e176acad0404',
//   },
// } )
// .then((res) => {
//   //console.log(res)
//   return res.json()
// })
// .then((json) => {
//     //console.log(json.response)
    
//     odds = json.response.map(odds => {
//       const bookmaker = odds.bookmakers[4]
//       const bets = bookmaker.bets
//       console.log(bets)
//       bets.forEach(Cote => {
//         const nume = Cote.name
//         const valori = Cote.values
//         console.log(nume)
//         console.log(valori)
//         valori.forEach(cote => {
//           const value = cote.value
//           const odd = cote.odd
//           console.log(value)
//           console.log(odd)
//         })
//         return odds
//       });
//     })


//   })


router.get ('/' , (req, res) =>{
  res.send(odds);
})


//Get meciuri

router.get ('/' , (req, res) =>{
  res.send(meciuri);
})

 module.exports = router;