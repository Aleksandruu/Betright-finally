import React, { useState, useEffect } from "react";
import { FiltruPont } from "../components/FiltruPont";
import { Navbar } from "../components/Navbar";
import { HeaderPonturi } from "../components/HeaderPonturi";
import { Footer } from "./sections/Footer";
import { Pont } from "../components/Pont";
import { getPonturiPage } from '../api/axios'
import { useQuery } from 'react-query'
import PageButton from "../components/PageButton";




export const Ponturi = ({ meci, timp, ponturi }) => {

  const [page, setPage] = useState(1)
  const [ponturii, setPonturii] = useState([2])

  useEffect(() => {

    getPonturiPage(page).then(json => setPonturii(json))

}, [page])

  const content = ponturii.map(pont => 
  <Pont 
    key={pont.name}
    name={"Gabriel Vlad"} 
    accuracy="88" 
    ponturi={"257"}
    meci="FC Barcelona vs Real Madrid"
    date="Azi 21:00"
    comment={"Am impresia ca Barca o sa joace mai bine acum."}
    pronostic="GG si 2.5"
    postDate={"20.02.2020"}
    cota="4.5" 
  />
  )

  const nextPage = () => setPage(prev => prev + 1)

  const prevPage = () => setPage(prev => prev - 1)

  return (
    <>
      <Navbar></Navbar>
      <HeaderPonturi title="Ponturi active" subtitle="ponturi active"></HeaderPonturi>
      <div className="ponturi">
        <div className="meci-status">
          <div className="team">
            <img src="https://media.api-sports.io/football/teams/33.png"></img>
          <h1>{/*home-team */} Barcelona</h1>
          </div>
          <div>
          <div className="VS">
          <p>VS</p>
          </div>
          <p className="time-date-match">23-10-2022 | 18:50</p>
          </div>
          <div className="team">
          <img src="https://media.api-sports.io/football/teams/33.png"></img>
          <h1>{/*away-team */} Real Madrid</h1>
          </div>
        </div>
        <div className="ponturi-p">
          <div className="ponturi-filter">
            <div className="filter-status">
              <FiltruPont></FiltruPont>
            </div>
            {/* {ponturi.map((pont) => (
            <Pont
            name={pont.name}
            accuracy={pont.accuracy}
            ponturi={pont.ponturi}
            meci={pont.meci}
            date={pont.date}
            comment={pont.comment}
            pronostic={pont.pronostic}
            postDate={pont.postDate}
            cota={pont.cota}
            ></Pont>
          ))} */}
            <div className="ponturi-active">
            <Pont 
              name={"Gabriel Vlad"} 
              accuracy="88" 
              ponturi={"257"}
              meci="FC Barcelona vs Real Madrid"
              date="Azi 21:00"
              comment={"Am impresia ca Barca o sa joace mai bine acum."}
              pronostic="GG si 2.5"
              postDate={"20.02.2020"}
                cota="4.5" />
                <nav>
               <button onClick={prevPage} disabled={page === 1}>Prev Page</button>
                <button onClick={nextPage} disabled={!ponturii?.length}>Next Page</button>
                </nav>
                {content}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
