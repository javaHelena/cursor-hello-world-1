import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Add this line

function App() {
  const [message, setMessage] = useState('');
  const [personalizedMessage, setPersonalizedMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // General greeting
    axios.get('http://localhost:8080/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => console.error('There was an error!', error));

    // Personalized greeting to "Helena"
    const personalizedUrl = name ? `http://localhost:8080/hello/${name}` : 'http://localhost:8080/hello/Helena';
    axios.get(personalizedUrl)
      .then(response => {
        setPersonalizedMessage(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, [name]); // This will re-run the effect if `name` changes

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="appContainer"> {/* Use the class name here */}
      <div>{message}</div>
      <div>{personalizedMessage}</div>
      {/* Uncomment below to allow dynamic name input */}
      {/* <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name for personalized greeting" /> */}
    </div>
  );
}

export default App;