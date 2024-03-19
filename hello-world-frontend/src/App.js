import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Update the URL below to match the endpoint of your Spring Boot application
    axios.get('http://localhost:8080/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#007bff', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
      {message}
    </div>
  );
}

export default App;
