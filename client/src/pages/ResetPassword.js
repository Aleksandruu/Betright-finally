import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from './sections/Footer';
import ForgotpasswordIMG from '../assets/Forgot password.svg';
import { useState } from 'react'; 
import axios from 'axios';

export const ResetPassword = ({history, match}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if(password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 3005);
      return setError("Parolele nu coincid!");
    }

    try {
      const { data } = await axios.put(
        `http://192.168.1.147:3005/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
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
                {success && (
                  <span className="success-message">
                    {success} <a href="/login">Conectare</a>
                  </span>
                )}
            </div>
            <form className="login-form" onSubmit={resetPasswordHandler}>
                <div className="login-form-content">
                    <div className="form-item">
                        <label htmlFor="password">Introduceti parola noua</label>
                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        placeholder="Parola"
                        id="password" 
                        required
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="confirmpassword">Confirmare parola noua</label>
                        <input 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password" 
                        placeholder="Parola"
                        id="confirmpassword"
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
