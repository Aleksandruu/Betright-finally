import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from './sections/Footer';
import ForgotpasswordIMG from '../assets/Forgot password.svg';
import { useState } from 'react'; 
import axios from 'axios';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('');

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };

    try {
        const { data } = await axios.post(
            "http://192.168.1.147:3005/api/auth/forgotpassword",
            { email },
            config
        );

        setSuccess(data.data);
    } catch (error) {
        setError(error.response.data.error);
        setEmail("");
        setTimeout(() => {
            setError("");
        }, 3005);
    }
  };



  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
        <div className="login-left">
            <div className="login-header">
                <h1>Recupereaza parola</h1>
                <p>Introduceti email-ul pentru a recupera parola</p>
                {error && <span className="error-message">{error}</span>}
                {success && <span className="success-message">{success}</span>}
            </div>
            <form className="login-form" onSubmit={forgotPasswordHandler}>
                <div className="login-form-content">
                    <div className="form-item">
                        <label htmlFor="email">Introduceti email</label>
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        id="email" 
                        required
                        />
                    </div>
                    <button type="submit" className="loginSubmit">Trimitere</button>
                </div>

            </form>
        </div>
        <div className="login-right">
            <img src={ ForgotpasswordIMG } alt="image" />
        </div>
    </div>
    <Footer></Footer>
  </>


  );
};
