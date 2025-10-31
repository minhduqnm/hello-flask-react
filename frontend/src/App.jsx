import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading message from Flask...');

  useEffect(() => {
    fetch('https://flask-backend.onrender.com/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg('Unable to reach backend.'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
