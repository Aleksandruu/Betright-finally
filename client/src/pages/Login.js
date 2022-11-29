import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from './sections/Footer';
import RegisterIMG from '../assets/register.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            navigate("/");
        }
    }, [useNavigate]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try {
            const { data } = await axios.post("http://192.168.1.147:3000/api/auth/login" , { email, password }, config);

            localStorage.setItem("authToken", data.token);

            navigate("/posteaza-pont");

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }
   

  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
        <div className="login-left">
            <div className="login-header">
                <h1>Conecteaza-te</h1>
                <p>Introduceti datele pentru logare</p>
                {error && <span className="error-message">{error}</span>}  
            </div>
            <form className="login-form" onSubmit={loginHandler}>
                <div className="login-form-content">
                    <div className="form-item">
                        <label /*for="emailForm"*/ htmlFor="email">Intruduceti email</label>
                        <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        tabIndex={1}
                        required
                        />
                    </div>
                    <div className="form-item">
                        <label /*for="passwordForm"*/ htmlFor="password">Introduceti parola</label>
                        <input 
                        type="password" 
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        tabIndex={2}
                        />
                    </div>
                    <button type="submit" className="loginSubmit" tabIndex={3}>Conecteaza-te</button>
                </div>
                <div className="login-form-footer">
                <p>Nu ai cont?<a href="/register">Creeaza acum unul!</a></p>
                <p><a href="/forgotpassword">Ai uitat parola?</a></p>
                </div>
            </form>
        </div>
        <div className="login-right">
            <img src={ RegisterIMG } alt="image" />
        </div>
    </div>
    <Footer></Footer>
  </>


  );
};
