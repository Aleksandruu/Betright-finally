import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("authToken")) {
     navigate("/login")
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try {
        const {data} = await axios.get("http://localhost:3005/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Nu sunteți autorizat vă rugăm să vă conectați")
      }
    }

    fetchPrivateData();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    error ? <span className="error-message">{error}</span> : <>
      <div style={{ background: "green", color: "white" }}>{privateData}</div>
    <button onclick={logoutHandler}>Logout</button>
    </>
  )
}