const fetch = require('node-fetch');
const express = require ('express');
const router = express.Router();

// ////BASKETBALL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let meciuri = [];
// fetch('https://v1.basketball.api-sports.io/games?id=1911&timezone=Europe/Bucharest', { method: 'GET', headers: {
//   'x-rapidapi-host': 'v3.football.api-sports.io',
//   'x-rapidapi-key': '1d08dbe1bb68a1eafc90e176acad0404',
// }} )
// .then((res) => {
//   console.log(res)
//   return res.json()
// })
// .then((json) => {
//     // console.log(json.response)
//     meciuri = json.response.map(meci =>{
//       const id = meci.id
//       const teams = meci.teams
//       const name = meci.teams.home.name + " VS " + meci.teams.away.name
//       const data = meci.date
//       const logoTeamHome = meci.teams.home.logo
//       const logoTeamAway = meci.teams.away.logo
//       const homeTeamScore = meci.scores.home //Ia datele cu tot cu quartere
//       const awayTeamScore = meci.scores.away //Ia datele cu tot cu quartere
//       const ponturi = []
//       const cote = []
//       console.log(json.response)
//       return {id, teams, name, data, logoTeamHome, logoTeamAway, homeTeamScore,awayTeamScore, ponturi, cote}
//     }
//     )  
//     } 
// )

// let odds = [];

// fetch('https://v1.basketball.api-sports.io/odds?league=12&season=2022-2023&bookmaker=4', { method: 'GET', headers:{
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//       'x-rapidapi-key': '1d08dbe1bb68a1eafc90e176acad0404',
// }} )
// .then((res) => {
//   //console.log(res)
//   return res.json()
// })
// .then((json) => {
//   //console.log(json.response)
//   odds = json.response.map(odds => {
//     const bookmaker = odds.bookmakers[0]
//     const bets = bookmaker.bets
//     console.log(bets)
//   })
// })

// //Get odds

// router.get ('/' , (req, res) =>{
//   res.send(odds);
// })


// //Get meciuri

// router.get ('/' , (req, res) =>{
//   res.send(meciuri);
// })

module.exports = router;