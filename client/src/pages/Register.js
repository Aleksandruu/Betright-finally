import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from './sections/Footer';
import RegisterIMG from '../assets/register.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("authToken")){
            navigate("/login");
        }
    }, [useNavigate]);

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            }, 3005 );
            return setError("Parolele nu coincid!")
        }

        try {
            const {data} = await axios.post("http://192.168.1.147:3005/api/auth/register" , {name, email, password}, config);

            localStorage.setItem("authToken", data.token);

            navigate("/login");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 3005);
        }
    }
   

  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
        <div className="login-left">
            <div className="login-header">
                <h1>Creati un cont</h1>
                <p>Completeaza formularul a crea un cont</p>
                {error && <span classNameName="error-message">{error}</span>}  
            </div>
            <form className="login-form" onSubmit={registerHandler}>
                <div className="login-form-content">
                <div className="form-item">
                        <label htmlFor="username">Intruduceti Numele</label>
                        <input 
                        type="text" 
                        id="email" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Intruduceti email</label>
                        <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Introduceti parola</label>
                        <input 
                        type="password" 
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="confirmpassword">Repetati parola</label>
                        <input 
                        type="password" 
                        required
                        id="confirmpassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="loginSubmit">Creeaza cont</button>
                </div>
                <div className="login-form-footer">
                <p><a href="/login">Inapoi la conectare</a></p>
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
