import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Component for the "/hello" route
function Hello() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    axios.get('http://localhost:8080/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return <div>{message}</div>;
}

// Component for the "/hello/:name" route
function HelloName() {
  const [personalizedMessage, setPersonalizedMessage] = React.useState('');
  const { name } = useParams(); // This gets the "name" parameter from the URL

  React.useEffect(() => {
    const personalizedUrl = `http://localhost:8080/hello/${name}`;
    axios.get(personalizedUrl)
      .then(response => {
        setPersonalizedMessage(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, [name]); // This will re-run the effect if `name` changes

  return <div>{personalizedMessage}</div>;
}

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/hello/:name" element={<HelloName />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;