const fetch = require('node-fetch');
const express = require ('express');
const { response } = require('express');
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
let odds = [];
fetch("https://v3.football.api-sports.io/odds?fixture=855734", { 
  method: 'GET', 
  headers: {
  'x-rapidapi-host': 'v3.football.api-sports.io',
  'x-rapidapi-key': '1d08dbe1bb68a1eafc90e176acad0404',
  },
})
.then((res) => {
  //console.log(res)
  return res.json()
})
.then((json) => { console.log(json.response)
    //  Odds = json.response.map(odds => {
    //   const bookmaker = odds.bookmakers[4]
    //   const bets = bookmaker.bets
    //   //console.log(bets)
    //   bets.forEach(Cote => {
    //     const nume = Cote.name
    //     const valori = Cote.values
    //     console.log(nume)
    //     //console.log(valori)
    //     valori.forEach(cote => {
    //       const value = cote.value
    //       const odd = cote.odd
    //       console.log(value)
    //       console.log(odd)
    //       return {value, odd} 
    //     })
    //     return { nume }

    //   });
    // })

  })  
.catch(err => console.log(err))



    //  odds = json.response.map(odds =>{





      
      // const bookmakers = odds.bookmakers[4]
      // const bets = bookmakers.bets
      // const name = bets.name
      // //console.log(bookmakers)
      // const fullTimeResults = bets[0]
      //FULL TIME RESULTS 1X2
      // const fullTimeResultsHome = fullTimeResults.values[0].value + " " + fullTimeResults.values[0].odd
      // const fullTimeResultsDraw = fullTimeResults.values[1].value + " " + fullTimeResults.values[1].odd
      // const fullTimeResultsAway = fullTimeResults.values[2].value + " " + fullTimeResults.values[2].odd
      // console.log('Castigator')
      // console.log(fullTimeResultsHome)
      // console.log(fullTimeResultsDraw)
      // console.log(fullTimeResultsAway)

      //SECOND HALF
      // const secondHalf = bets[2] 
      // const secondHalfHome = secondHalf.values[0].value + " " + secondHalf.values[0].odd 
      // const secondHalfDraw = secondHalf.values[1].value + " " + secondHalf.values[1].odd
      // const secondHalfAway = secondHalf.values[2].value + " " + secondHalf.values[2].odd
      // console.log('Castigator repriza a doua')
      // console.log(secondHalfHome)
      // console.log(secondHalfDraw)
      // console.log(secondHalfAway)



      //GOALS OVER/UNDER
      // const goalsOver = bets[4];
      // const goalsOver1_5 = goalsOver.values[2].value + " " + goalsOver.values[2].odd
      // const goalsUnder1_5 = goalsOver.values[3].value + " " + goalsOver.values[3].odd
      // const goalsOver2_5 = goalsOver.values[6].value + " " + goalsOver.values[6].odd
      // const goalsUnder2_5 = goalsOver.values[7].value + " " + goalsOver.values[7].odd
      // const goalsOver3_5 = goalsOver.values[0].value + " " + goalsOver.values[0].odd
      // const goalsUnder3_5 = goalsOver.values[1].value + " " + goalsOver.values[1].odd
      // const goalsOver4_5 = goalsOver.values[4].value + " " + goalsOver.values[4].odd
      // const goalsUnder4_5 = goalsOver.values[5].value + " " + goalsOver.values[5].odd
      // const goalsOver5_5 = goalsOver.values[10].value + " " + goalsOver.values[10].odd
      // const goalsUnder5_5 = goalsOver.values[11].value + " " + goalsOver.values[11].odd
      // const goalsOver6_5 = goalsOver.values[12].value + " " + goalsOver.values[12].odd
      // const goalsUnder6_5 = goalsOver.values[13].value + " " + goalsOver.values[13].odd
      // console.log('Total goluri Peste/Sub')
      // console.log('Goals Over')
      // console.log(goalsOver1_5)
      // console.log(goalsUnder1_5)
      // console.log(goalsOver2_5)
      // console.log(goalsUnder2_5)
      // console.log(goalsOver3_5)
      // console.log(goalsUnder3_5)
      // console.log(goalsOver4_5)
      // console.log(goalsUnder4_5)
      // console.log(goalsOver5_5)
      // console.log(goalsUnder5_5)
      // console.log(goalsOver6_5)
      // console.log(goalsUnder6_5)

      //GOALS OVER/UNDER FIRST HALF
      // const goalsOUFirstHalf = bets[5]
      // const goalsOUFirstHalfOver_3_5 = goalsOUFirstHalf.values[0].value + " " + goalsOUFirstHalf.values[0].odd
      // const goalsOUFirstHalfUnder_3_5 = goalsOUFirstHalf.values[1].value + " " + goalsOUFirstHalf.values[1].odd
      // const goalsOUFirstHalfOver_1_5 = goalsOUFirstHalf.values[2].value + " " + goalsOUFirstHalf.values[2].odd
      // const goalsOUFirstHalfUnder_1_5 = goalsOUFirstHalf.values[3].value + " " + goalsOUFirstHalf.values[3].odd
      // const goalsOUFirstHalfOver_2_5 = goalsOUFirstHalf.values[4].value + " " + goalsOUFirstHalf.values[4].odd
      // const goalsOUFirstHalfUnder_2_5 = goalsOUFirstHalf.values[5].value + " " + goalsOUFirstHalf.values[5].odd
      // const goalsOUFirstHalfOver_0_5 = goalsOUFirstHalf.values[6].value + " " + goalsOUFirstHalf.values[6].odd
      // const goalsOUFirstHalfUnder_0_5 = goalsOUFirstHalf.values[7].value + " " + goalsOUFirstHalf.values[7].odd
      // const goalsOUFirstHalfOver_1_25 = goalsOUFirstHalf.values[8].value + " " + goalsOUFirstHalf.values[8].odd
      // const goalsOUFirstHalfUnder_1_25 = goalsOUFirstHalf.values[9].value + " " + goalsOUFirstHalf.values[9].odd
      // const goalsOUFirstHalfOver_1_75 = goalsOUFirstHalf.values[10].value + " " + goalsOUFirstHalf.values[10].odd
      // const goalsOUFirstHalfUnder_1_75 = goalsOUFirstHalf.values[11].value + " " + goalsOUFirstHalf.values[11].odd
      // const goalsOUFirstHalfOver_0_75 = goalsOUFirstHalf.values[12].value + " " + goalsOUFirstHalf.values[12].odd
      // const goalsOUFirstHalfUnder_0_75 = goalsOUFirstHalf.values[13].value + " " + goalsOUFirstHalf.values[13].odd
      // const goalsOUFirstHalfOver_2_0 = goalsOUFirstHalf.values[14].value + " " + goalsOUFirstHalf.values[14].odd
      // const goalsOUFirstHalfUnder_2_0 = goalsOUFirstHalf.values[15].value + " " + goalsOUFirstHalf.values[15].odd
      // const goalsOUFirstHalfOver_1_0 = goalsOUFirstHalf.values[16].value + " " + goalsOUFirstHalf.values[16].odd
      // const goalsOUFirstHalfUnder_1_0 = goalsOUFirstHalf.values[17].value + " " + goalsOUFirstHalf.values[17].odd

      // console.log('Total goluri peste/sub prima repriza')
      // console.log(goalsOUFirstHalfOver_3_5)
      // console.log(goalsOUFirstHalfUnder_3_5)
      // console.log(goalsOUFirstHalfOver_1_5)
      // console.log(goalsOUFirstHalfUnder_1_5)
      // console.log(goalsOUFirstHalfOver_2_5)
      // console.log(goalsOUFirstHalfUnder_2_5)
      // console.log(goalsOUFirstHalfOver_0_5)
      // console.log(goalsOUFirstHalfUnder_0_5)
      // console.log(goalsOUFirstHalfOver_1_25)
      // console.log(goalsOUFirstHalfUnder_1_25)
      // console.log(goalsOUFirstHalfOver_1_75)
      // console.log(goalsOUFirstHalfUnder_1_75)
      // console.log(goalsOUFirstHalfOver_0_75)
      // console.log(goalsOUFirstHalfUnder_0_75)
      // console.log(goalsOUFirstHalfOver_2_0)
      // console.log(goalsOUFirstHalfUnder_2_0)
      // console.log(goalsOUFirstHalfOver_1_0)
      // console.log(goalsOUFirstHalfUnder_1_0)      


      //GOALS UVER/UNDER SECOND HALF
      // const goalsOUSecondHalf = bets[6]
      // console.log(goalsOUSecondHalf)
      // const goalsOUSecondHalfOver_3_5 = goalsOUSecondHalf.values[0].value + " " + goalsOUSecondHalf.values[0].odd
      // const goalsOUSecondHalfUnder_3_5 = goalsOUSecondHalf.values[1].value + " " + goalsOUSecondHalf.values[1].odd
      // const goalsOUSecondHalfOver_1_5 = goalsOUSecondHalf.values[2].value + " " + goalsOUSecondHalf.values[2].odd
      // const goalsOUSecondHalfUnder_1_5 = goalsOUSecondHalf.values[3].value + " " + goalsOUSecondHalf.values[3].odd
      // const goalsOUSecondHalfOver_2_5 = goalsOUSecondHalf.values[4].value + " " + goalsOUSecondHalf.values[4].odd
      // const goalsOUSecondHalfUnder_2_5 = goalsOUSecondHalf.values[5].value + " " + goalsOUSecondHalf.values[5].odd
      // const goalsOUSecondHalfOver_0_5 = goalsOUSecondHalf.values[6].value + " " + goalsOUSecondHalf.values[6].odd
      // const goalsOUSecondHalfUnder_0_5 = goalsOUSecondHalf.values[7].value + " " + goalsOUSecondHalf.values[7].odd

      // console.log('Total goluri peste/sub a doua repriza')
      // console.log(goalsOUSecondHalfOver_3_5)
      // console.log(goalsOUSecondHalfUnder_3_5)
      // console.log(goalsOUSecondHalfOver_1_5)
      // console.log(goalsOUSecondHalfUnder_1_5)
      // console.log(goalsOUSecondHalfOver_2_5)
      // console.log(goalsOUSecondHalfUnder_2_5)
      // console.log(goalsOUSecondHalfOver_0_5)
      // console.log(goalsOUSecondHalfUnder_0_5)

      //CLEAN SHEET HOME
      // const cleanSheetHome = bets[8]
      // const cleanSheetHomeYES = cleanSheetHome.values[0].value + " " + cleanSheetHome.values[0].odd
      // const cleanSheetHomeNO = cleanSheetHome.values[1].value + " " + cleanSheetHome.values[1].odd
      // console.log('Gazdele nu primesc gol')
      // console.log(cleanSheetHomeYES)
      // console.log(cleanSheetHomeNO)

      //CLEAN SHEET AWAY
      // const cleanSheetAway = bets[9]
      // const cleanSheetAwayYES = cleanSheetAway.values[0].value + " " + cleanSheetAway.values[0].odd
      // const cleanSheetAwayNO = cleanSheetAway.values[1].value + " " + cleanSheetAway.values[1].odd
      // console.log('Oaspetii nu primesc gol')
      // console.log(cleanSheetAwayYES)
      // console.log(cleanSheetAwayNO)


      //BOTH TEAMS TO SCORE
      // const bothTeamsToScore = bets[10]
      // const bothTeamsToScoreYes = bothTeamsToScore.values[0].value + " " + bothTeamsToScore.values[0].odd
      // const bothTeamsToScoreNo = bothTeamsToScore.values[1].value + " " + bothTeamsToScore.values[1].odd
      // console.log(bothTeamsToScore.name)
      // console.log(bothTeamsToScoreYes)
      // console.log(bothTeamsToScoreNo)
      
      //CORRECT SCORE
      // const correctScore = bets[12]
      // const correctScore1_0 = correctScore.values[0].value + " " + correctScore.values[0].odd
      // const correctScore2_0 = correctScore.values[1].value + " " + correctScore.values[1].odd
      // const correctScore2_1 = correctScore.values[2].value + " " + correctScore.values[2].odd
      // const correctScore3_0 = correctScore.values[3].value + " " + correctScore.values[3].odd
      // const correctScore3_1 = correctScore.values[4].value + " " + correctScore.values[4].odd
      // const correctScore3_2 = correctScore.values[5].value + " " + correctScore.values[5].odd
      // const correctScore4_0 = correctScore.values[6].value + " " + correctScore.values[6].odd
      // const correctScore4_1 = correctScore.values[7].value + " " + correctScore.values[7].odd
      // const correctScore4_2 = correctScore.values[8].value + " " + correctScore.values[8].odd
      // const correctScore5_0 = correctScore.values[9].value + " " + correctScore.values[9].odd
      // const correctScore5_1 = correctScore.values[10].value + " " + correctScore.values[10].odd
      // const correctScore6_0 = correctScore.values[11].value + " " + correctScore.values[11].odd
      // const correctScore0_0 = correctScore.values[12].value + " " + correctScore.values[12].odd
      // const correctScore1_1 = correctScore.values[13].value + " " + correctScore.values[13].odd
      // const correctScore2_2 = correctScore.values[14].value + " " + correctScore.values[14].odd
      // const correctScore3_3 = correctScore.values[15].value + " " + correctScore.values[15].odd
      // const correctScore0_1 = correctScore.values[16].value + " " + correctScore.values[16].odd
      // const correctScore0_2 = correctScore.values[17].value + " " + correctScore.values[17].odd
      // const correctScore0_3 = correctScore.values[18].value + " " + correctScore.values[18].odd
      // const correctScore0_4 = correctScore.values[19].value + " " + correctScore.values[19].odd
      // const correctScore0_5 = correctScore.values[20].value + " " + correctScore.values[20].odd
      // const correctScore0_6 = correctScore.values[21].value + " " + correctScore.values[21].odd
      // const correctScore1_2 = correctScore.values[22].value + " " + correctScore.values[22].odd
      // const correctScore1_3 = correctScore.values[23].value + " " + correctScore.values[23].odd
      // const correctScore1_4 = correctScore.values[24].value + " " + correctScore.values[24].odd
      // const correctScore1_5 = correctScore.values[25].value + " " + correctScore.values[25].odd
      // const correctScore2_3 = correctScore.values[26].value + " " + correctScore.values[26].odd
      // const correctScore2_4 = correctScore.values[27].value + " " + correctScore.values[27].odd

      // console.log('Scor corect')
      // console.log(correctScore1_0)
      // console.log(correctScore2_0)
      // console.log(correctScore2_1)
      // console.log(correctScore3_0)
      // console.log(correctScore3_1)
      // console.log(correctScore3_2)
      // console.log(correctScore4_0)
      // console.log(correctScore4_1)
      // console.log(correctScore4_2)
      // console.log(correctScore5_0)
      // console.log(correctScore5_1)
      // console.log(correctScore6_0)
      // console.log(correctScore0_0)
      // console.log(correctScore1_1)
      // console.log(correctScore2_2)
      // console.log(correctScore3_3)
      // console.log(correctScore0_1)
      // console.log(correctScore0_2)
      // console.log(correctScore0_3)
      // console.log(correctScore0_4)
      // console.log(correctScore0_5)
      // console.log(correctScore0_6)
      // console.log(correctScore1_2)
      // console.log(correctScore1_3)
      // console.log(correctScore1_4)
      // console.log(correctScore1_5)
      // console.log(correctScore2_3)
      // console.log(correctScore2_4)

      //HANDICAP RESULT
      // const handicapResult = bets[11]
      // const handicapResultHomeMinus1 = handicapResult.values[0].value + " " + handicapResult.values[0].odd
      // const handicapResultAwayMinus1 = handicapResult.values[1].value + " " + handicapResult.values[1].odd
      // const handicapResultDrawMinus1 = handicapResult.values[2].value + " " + handicapResult.values[2].odd
      // const handicapResultHomePlus1 = handicapResult.values[3].value + " " + handicapResult.values[3].odd
      // const handicapResultAwayPlus1 = handicapResult.values[4].value + " " + handicapResult.values[4].odd
      // const handicapResultDrawPlus1 = handicapResult.values[5].value + " " + handicapResult.values[5].odd
      // const handicapResultHomePlus2 = handicapResult.values[6].value + " " + handicapResult.values[6].odd
      // const handicapResultDrawPlus2 = handicapResult.values[7].value + " " + handicapResult.values[7].odd
      // const handicapResultAwayPlus2 = handicapResult.values[8].value + " " + handicapResult.values[8].odd
      // const handicapResultHomeMinus2 = handicapResult.values[9].value + " " + handicapResult.values[9].odd
      // const handicapResultDrawMinus2 = handicapResult.values[10].value + " " + handicapResult.values[10].odd
      // const handicapResultAwayMinus2 = handicapResult.values[11].value + " " + handicapResult.values[11].odd
      // const handicapResultHomePlus3 = handicapResult.values[12].value + " " + handicapResult.values[12].odd
      // const handicapResultDrawPlus3 = handicapResult.values[13].value + " " + handicapResult.values[13].odd
      // const handicapResultAwayPlus3 = handicapResult.values[14].value + " " + handicapResult.values[14].odd

      // console.log('Rezultat handicap')
      // console.log(handicapResultHomeMinus1)
      // console.log(handicapResultAwayMinus1)
      // console.log(handicapResultDrawMinus1)
      // console.log(handicapResultHomePlus1)
      // console.log(handicapResultAwayPlus1)
      // console.log(handicapResultDrawPlus1)
      // console.log(handicapResultHomePlus2)
      // console.log(handicapResultDrawPlus2)
      // console.log(handicapResultAwayPlus2)
      // console.log(handicapResultHomeMinus2)
      // console.log(handicapResultDrawMinus2)
      // console.log(handicapResultAwayMinus2)
      // console.log(handicapResultHomePlus3)
      // console.log(handicapResultDrawPlus3)
      // console.log(handicapResultAwayPlus3)

      //HIGHEST SCORE HALF

      // const highestScoringHalf = bets[13]
      // const highestScoringHalf1St = highestScoringHalf.values[0].value + " " + highestScoringHalf.values[0].odd
      // const highestScoringHalf2St = highestScoringHalf.values[1].value + " " + highestScoringHalf.values[1].odd
      // console.log('Repriza cu cele mai multe goluri')
      // console.log(highestScoringHalf1St)
      // console.log(highestScoringHalf2St)


      //CORRECT SCORE 1ST HALF
      // const correctScore1StHalf = bets[14]
      // const correctScore1StHalf_1_0 = correctScore1StHalf.values[0].value + " " + correctScore1StHalf.values[0].odd
      // const correctScore1StHalf_2_0 = correctScore1StHalf.values[1].value + " " + correctScore1StHalf.values[1].odd
      // const correctScore1StHalf_2_1 = correctScore1StHalf.values[2].value + " " + correctScore1StHalf.values[2].odd
      // const correctScore1StHalf_3_0 = correctScore1StHalf.values[3].value + " " + correctScore1StHalf.values[3].odd
      // const correctScore1StHalf_3_1 = correctScore1StHalf.values[4].value + " " + correctScore1StHalf.values[4].odd
      // const correctScore1StHalf_3_2 = correctScore1StHalf.values[5].value + " " + correctScore1StHalf.values[5].odd
      // const correctScore1StHalf_0_0 = correctScore1StHalf.values[6].value + " " + correctScore1StHalf.values[6].odd
      // const correctScore1StHalf_1_1 = correctScore1StHalf.values[7].value + " " + correctScore1StHalf.values[7].odd
      // const correctScore1StHalf_2_2 = correctScore1StHalf.values[8].value + " " + correctScore1StHalf.values[8].odd
      // const correctScore1StHalf_0_1 = correctScore1StHalf.values[9].value + " " + correctScore1StHalf.values[9].odd
      // const correctScore1StHalf_0_2 = correctScore1StHalf.values[10].value + " " + correctScore1StHalf.values[10].odd
      // const correctScore1StHalf_0_3 = correctScore1StHalf.values[11].value + " " + correctScore1StHalf.values[11].odd
      // const correctScore1StHalf_0_4 = correctScore1StHalf.values[12].value + " " + correctScore1StHalf.values[12].odd
      // const correctScore1StHalf_0_5 = correctScore1StHalf.values[13].value + " " + correctScore1StHalf.values[13].odd
      // const correctScore1StHalf_1_2 = correctScore1StHalf.values[14].value + " " + correctScore1StHalf.values[14].odd
      // const correctScore1StHalf_1_3 = correctScore1StHalf.values[15].value + " " + correctScore1StHalf.values[15].odd
      // const correctScore1StHalf_1_4 = correctScore1StHalf.values[16].value + " " + correctScore1StHalf.values[16].odd
      // const correctScore1StHalf_2_3 = correctScore1StHalf.values[17].value + " " + correctScore1StHalf.values[17].odd

      // console.log('Repriza cu cele mai multe goluri')
      // console.log(correctScore1StHalf_1_0)
      // console.log(correctScore1StHalf_2_0)
      // console.log(correctScore1StHalf_2_1)
      // console.log(correctScore1StHalf_3_0)
      // console.log(correctScore1StHalf_3_1)
      // console.log(correctScore1StHalf_3_2)
      // console.log(correctScore1StHalf_0_0)
      // console.log(correctScore1StHalf_1_1)
      // console.log(correctScore1StHalf_2_2)
      // console.log(correctScore1StHalf_0_1)
      // console.log(correctScore1StHalf_0_2)
      // console.log(correctScore1StHalf_0_3)
      // console.log(correctScore1StHalf_0_4)
      // console.log(correctScore1StHalf_0_5)
      // console.log(correctScore1StHalf_1_2)
      // console.log(correctScore1StHalf_1_3)
      // console.log(correctScore1StHalf_1_4)
      // console.log(correctScore1StHalf_2_3)
      // console.log(correctScore1StHalf)

      //DOUBLE CHANCE

      // const doubleChance = bets[15]
      // const doubleChanceHome_Draw = doubleChance.values[0].value + " " + doubleChance.values[0].odd
      // const doubleChanceHome_Away = doubleChance.values[1].value + " " + doubleChance.values[1].odd
      // const doubleChanceDraw_Away = doubleChance.values[2].value + " " + doubleChance.values[2].odd


      // console.log(doubleChance)
      // console.log(doubleChanceHome_Draw)
      // console.log(doubleChanceHome_Away)
      // console.log(doubleChanceDraw_Away)
      
      //FIRST HALF WINNER
      // const firstHalfWinner = bets[16]
      // console.log(firstHalfWinner)
      // const firstHalfWinnerdHome = firstHalfWinner.values[0].value + " " + firstHalfWinner.values[0].odd 
      // const firstHalfWinnerDraw = firstHalfWinner.values[1].value + " " + firstHalfWinner.values[1].odd
      // const firstHalfWinnerAway = firstHalfWinner.values[2].value + " " + firstHalfWinner.values[2].odd

      // console.log('Castigator prima repriza')
      // console.log(firstHalfWinnerdHome)
      // console.log(firstHalfWinnerDraw)
      // console.log(firstHalfWinnerAway)

      //TEAM TO SCORE FIRST
      // const teamToScoreFirst = bets[17]
      // const teamToScoreFirstHome = teamToScoreFirst.values[0].value + " " + teamToScoreFirst.values[0].odd
      // const teamToScoreFirstDraw = teamToScoreFirst.values[1].value + " " + teamToScoreFirst.values[1].odd
      // const teamToScoreFirstAway = teamToScoreFirst.values[2].value + " " + teamToScoreFirst.values[2].odd
      // console.log('Echipa care marcheaza prima')
      // console.log(teamToScoreFirstHome)
      // console.log(teamToScoreFirstDraw)
      // console.log(teamToScoreFirstAway)

      //TEAM TO SCORE LAST
      // const teamToScoreLast = bets[18]
      // const teamToScoreLastHome = 'Gazde' + " " + teamToScoreLast.values[0].odd
      // const teamToScoreLastDraw = 'Egal' + " " + teamToScoreLast.values[1].odd
      // const teamToScoreLastAway = 'Oaspeti' + " " + teamToScoreLast.values[2].odd
      // console.log('Echipa care marcheaza ultima')
      // console.log(teamToScoreLastHome)
      // console.log(teamToScoreLastDraw)
      // console.log(teamToScoreLastAway)

      //WIN BOTH HALVES
      // const winBothHalves = bets[19]
      // const winBothHalvesHome = 'Gazde' + " " + winBothHalves.values[0].odd
      // const winBothHalvesAway = 'Oaspeti' + " " + winBothHalves.values[1].odd
      // console.log('Catigatoarea ambelor reprize')
      // console.log(winBothHalvesHome)
      // console.log(winBothHalvesAway)

      //TOTAL - HOME

      // const totalHome = bets[20]
      // const totalHomeUnder3_5 = 'Sub 3.5' + " " + totalHome.values[0].odd 
      // const totalHomeOver1_5 = 'Peste 1.5' + " " + totalHome.values[1].odd
      // const totalHomeUnder1_5 = 'Sub 1.5' + " " + totalHome.values[2].odd
      // const totalHomeOver2_5 = 'Peste 2.5' + " " + totalHome.values[3].odd
      // const totalHomeUnder2_5 = 'Sub 2.5' + " " + totalHome.values[4].odd

      // console.log('Total goluri gazde')
      // console.log(totalHomeUnder3_5)
      // console.log(totalHomeOver1_5)
      // console.log(totalHomeUnder1_5)
      // console.log(totalHomeOver2_5)
      // console.log(totalHomeUnder2_5)

            //TOTAL - AWAY

            // const totalAway = bets[21]
            // const totalAwayUnder3_5 = 'Sub 3.5' + " " + totalAway.values[0].odd 
            // const totalAwayOver3_5 = 'Peste 3.5' + " " + totalAway.values[1].odd 
            // const totalAwayOver1_5 = 'Peste 1.5' + " " + totalAway.values[2].odd
            // const totalAwayUnder1_5 = 'Sub 1.5' + " " + totalAway.values[3].odd
            // const totalAwayOver4_5 = 'Peste 4.5' + " " + totalAway.values[4].odd 
            // const totalAwayUnder4_5 = 'Sub 4.5' + " " + totalAway.values[5].odd 
            // const totalAwayOver2_5 = 'Peste 2.5' + " " + totalAway.values[6].odd
            // const totalAwayUnder2_5 = 'Sub 2.5' + " " + totalAway.values[7].odd
            // const totalAwayOver5_5 = 'Peste 5.5' + " " + totalAway.values[8].odd
            // const totalAwayUnder5_5 = 'Sub 5.5' + " " + totalAway.values[9].odd

      
            // console.log(totalAway)

            // console.log('Total goluri oaspeti')
            // console.log(totalAwayUnder3_5)
            // console.log(totalAwayOver3_5)
            // console.log(totalAwayOver1_5)
            // console.log(totalAwayUnder1_5)
            // console.log(totalAwayOver4_5)
            // console.log(totalAwayUnder4_5)
            // console.log(totalAwayOver2_5)
            // console.log(totalAwayUnder2_5)
            // console.log(totalAwayOver5_5)
            // console.log(totalAwayUnder5_5)

            //DOUBLE CHANCE - FIRST HALF
            // const doubleChance1St = bets[24]
            // const doubleChance1StHome_Draw = doubleChance1St.values[0].value + " " + doubleChance1St.values[0].odd
            // const doubleChance1StHome_Away = doubleChance1St.values[1].value + " " + doubleChance1St.values[1].odd
            // const doubleChance1StDraw_Away = doubleChance1St.values[2].value + " " + doubleChance1St.values[2].odd

            // console.log('Sansa dubla prima repriza')
            // console.log(doubleChance1StHome_Draw)
            // console.log(doubleChance1StHome_Away)
            // console.log(doubleChance1StDraw_Away)


            // BOTH TEAMS SCORE - FIRST HALF

            // const bothTeamsScore1St = bets[25]
            // const bothTeamsScore1StYES = bothTeamsScore1St.values[0].value + " " + bothTeamsScore1St.values[0].odd
            // const bothTeamsScore1StNO = bothTeamsScore1St.values[1].value + " " + bothTeamsScore1St.values[1].odd
            // console.log('Ambele echipe inscriu in prima repriza')
            // console.log(bothTeamsScore1StYES)
            // console.log(bothTeamsScore1StNO)

            //BOTH TEAMS TO SCORE - SECOND HALF

            // const bothTeamsScore2St = bets[26]
            // const bothTeamsScore2StYES = bothTeamsScore2St.values[0].value + " " + bothTeamsScore2St.values[0].odd
            // const bothTeamsScore2StNO = bothTeamsScore2St.values[1].value + " " + bothTeamsScore2St.values[1].odd
            // console.log('Ambele echipe inscriu in a doua repriza')
            // console.log(bothTeamsScore2StYES)
            // console.log(bothTeamsScore2StNO)

            // //WIN TO NIL

            // const winToNil = bets[27]
            // const winToNilHome = winToNil.values[0].value + " " + winToNil.values[0].odd
            // const winToNilAway = winToNil.values[1].value + " " + winToNil.values[1].odd

            // console.log('Castigatoare la zero')
            // console.log(winToNilHome)
            // console.log(winToNilAway)

            //ODD/EVEN

            // const oddEven = bets[28]
            // const oddEvenOdd = oddEven.values[0].value + " " + oddEven.values[0].odd
            // const oddEvenEven = oddEven.values[1].value + " " + oddEven.values[1].odd

            // console.log('Rezultat final par/impar')
            // console.log(oddEvenOdd)
            // console.log(oddEvenEven)

            //EXACT GOALS NUMBER 

            // const exactGoalsNumber = bets[32]
            // const exactGoalsNumber_2 = exactGoalsNumber.values[0].value + " " + exactGoalsNumber.values[0].odd
            // const exactGoalsNumber_3 = exactGoalsNumber.values[1].value + " " + exactGoalsNumber.values[1].odd
            // const exactGoalsNumber_4 = exactGoalsNumber.values[2].value + " " + exactGoalsNumber.values[2].odd
            // const exactGoalsNumber_1 = exactGoalsNumber.values[3].value + " " + exactGoalsNumber.values[3].odd
            // const exactGoalsNumber_0 = exactGoalsNumber.values[4].value + " " + exactGoalsNumber.values[4].odd
            // const exactGoalsNumber_5 = exactGoalsNumber.values[5].value + " " + exactGoalsNumber.values[5].odd
            // const exactGoalsNumber_6 = exactGoalsNumber.values[6].value + " " + exactGoalsNumber.values[6].odd
            // const exactGoalsNumber_More7 = exactGoalsNumber.values[7].value + " " + exactGoalsNumber.values[7].odd

            // console.log('Numar exact de goluri')
            // console.log(exactGoalsNumber_2)
            // console.log(exactGoalsNumber_3)
            // console.log(exactGoalsNumber_4)
            // console.log(exactGoalsNumber_1)
            // console.log(exactGoalsNumber_0)
            // console.log(exactGoalsNumber_5)
            // console.log(exactGoalsNumber_6)
            // console.log(exactGoalsNumber_More7)


            //TO WIN EITHER HALF

            // const toWinEitherHalf = bets[33]
            // const toWinEitherHalfHome = toWinEitherHalf.values[0].value + " " + toWinEitherHalf.values[0].odd
            // const toWinEitherHalfAway = toWinEitherHalf.values[1].value + " " + toWinEitherHalf.values[1].odd

            // console.log('Castigatoarea oricarei reprize')
            // console.log(toWinEitherHalfHome)
            // console.log(toWinEitherHalfAway)

            //HOME TEAM EXACT GOALS NUMBER 

            // const homeTeamExactGoalsNumber = bets[34]
            // const homeTeamExactGoalsNumber_2 = homeTeamExactGoalsNumber.values[0].value + " " + homeTeamExactGoalsNumber.values[0].odd
            // const homeTeamExactGoalsNumber_1 = homeTeamExactGoalsNumber.values[1].value + " " + homeTeamExactGoalsNumber.values[1].odd
            // const homeTeamExactGoalsNumber_0 = homeTeamExactGoalsNumber.values[2].value + " " + homeTeamExactGoalsNumber.values[2].odd
            // const homeTeamExactGoalsNumber_3MORE = homeTeamExactGoalsNumber.values[3].value + " " + homeTeamExactGoalsNumber.values[3].odd

            // console.log('Numar exact de goluri echipa gazda')
            // console.log(homeTeamExactGoalsNumber_2)
            // console.log(homeTeamExactGoalsNumber_1)
            // console.log(homeTeamExactGoalsNumber_0)
            // console.log(homeTeamExactGoalsNumber_3MORE)

            
            //AWAY TEAM EXACT GOALS NUMBER 

            // const awayTeamExactGoalsNumber = bets[35]
            // const awayTeamExactGoalsNumber_2 = awayTeamExactGoalsNumber.values[0].value + " " + awayTeamExactGoalsNumber.values[0].odd
            // const awayTeamExactGoalsNumber_1 = awayTeamExactGoalsNumber.values[1].value + " " + awayTeamExactGoalsNumber.values[1].odd
            // const awayTeamExactGoalsNumber_0 = awayTeamExactGoalsNumber.values[2].value + " " + awayTeamExactGoalsNumber.values[2].odd
            // const awayTeamExactGoalsNumber_3MORE = awayTeamExactGoalsNumber.values[3].value + " " + awayTeamExactGoalsNumber.values[3].odd

            // console.log('Numar exact de goluri echipa oaspete')
            // console.log(awayTeamExactGoalsNumber_2)
            // console.log(awayTeamExactGoalsNumber_1)
            // console.log(awayTeamExactGoalsNumber_0)
            // console.log(awayTeamExactGoalsNumber_3MORE)

            

      //ASIAN HANDICAP LINES MATCH
      // const asianHandicap = bets[3]
      // const asianHandicapHome0 = []
      // const asianHandicapAway0 = []
      // const asianHandicapHomeMinus0_25 = []
      // const asianHandicapAwayMinus0_25 = []
      // const asianHandicapAwayPlus0_25 = []
      // const asianHandicapHomePlus0_25 = []
      // const asianHandicapAwayMinus0_5 = []
      // const asianHandicapHomeMinus0_5 = []
      // console.log(asianHandicap)
      // console.log(bets)
//Get odds

router.get ('/' , (req, res) =>{
  res.send(odds);
})


//Get meciuri

router.get ('/' , (req, res) =>{
  res.send(meciuri);
})

module.exports = router;