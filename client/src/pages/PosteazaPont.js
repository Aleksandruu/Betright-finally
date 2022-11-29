import React, {useEffect, useState} from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from './sections/Footer';
import Select from "react-select";
import axios from 'axios';

const AlegeTara = [
  { value: "Abe", label: "Abe", customAbbreviation: "A" },
  { value: "John", label: "John", customAbbreviation: "J" },
  { value: "Dustin", label: "Dustin", customAbbreviation: "D" }
];

const AlegeSportul = [
  { value: "Fotbal", label: "Fotbal", customAbbreviation: "A" },
  { value: "Tenis", label: "Tenis", customAbbreviation: "J" },
  { value: "Baschet", label: "Baschet", customAbbreviation: "D" },
  { value: "Handbal", label: "Handbal", customAbbreviation: "J" },
  { value: "Hochei", label: "Hochei", customAbbreviation: "J" },
  { value: "Volei", label: "Volei", customAbbreviation: "J" },
  { value: "Baseball", label: "Baseball", customAbbreviation: "J" },
  { value: "Fotbal American", label: "Fotbal American", customAbbreviation: "J" },
  { value: "MMA", label: "MMA", customAbbreviation: "J" },
  { value: "Esports", label: "Esports", customAbbreviation: "J" },
  { value: "Motorsport", label: "Motorsport", customAbbreviation: "J" },
  { value: "Sporturi de iarna", label: "Sporturi de iarna", customAbbreviation: "J" },
  { value: "Ciclism", label: "Ciclism", customAbbreviation: "J" },
  { value: "Darts", label: "Darts", customAbbreviation: "J" },
  
];

const AlegeLiga = [
  { value: "Abe", label: "Abe", customAbbreviation: "A" },
  { value: "John", label: "John", customAbbreviation: "J" },
  { value: "Dustin", label: "Dustin", customAbbreviation: "D" }
];

const AlegeMeciul = [
  { value: "Abe", label: "Abe", customAbbreviation: "A" },
  { value: "John", label: "John", customAbbreviation: "J" },
  { value: "Dustin", label: "Dustin", customAbbreviation: "D" }
];





export const PosteazaPont = ({ values, label, customAbbreviation, odd }) => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get("http://localhost:3005/api/sports/fotbal")
    setData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Navbar></Navbar>
      <div className='container-posteaza-pont'>
            <h1>Posteaza pont</h1>
            <div className='selectors-posteaza-pont'>
            <div>
            <label></label>
            <Select options={data} className='select-select' placeholder="Alege sportul" />
            </div>
            <div>
            <label></label>
            <Select options={AlegeTara} className='select-select'/>
            </div>
            <div>
            <label></label>
            <Select options={AlegeLiga} className='select-select'/>
            </div>
            <div>
            <label></label>
            <Select options={AlegeMeciul} className='select-select'/>
            </div>
          </div>
          <div className='container-oddsSection'>
            <h1>Odds</h1>
            <div className='oddsSection'>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
              <div>
               <label>Super Cota</label>
               <Select options={AlegeMeciul} className='select-select' isMulti/>
              </div>
            </div>
            </div>
            <div>
            <div className='container-commentSection'>
              <h1>Lasati un comentariu</h1>
              <textarea
                className='text-area-pont'
                placeholder='Scrieti comentariul aici!'
              />
            </div>
      </div>
      <button
        className='button-postare-pont'
        type='submit'
      >Postati pontul</button>
      </div>
      <Footer></Footer>
    </>
  )
}
