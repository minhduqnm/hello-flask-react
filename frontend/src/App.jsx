import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>{msg || "Loading..."}</h1>
    </div>
  );
}

export default App;
