import React from "react";
import { useState } from "react";

function Home() {
  const [username, setUsername] = useState("Mindy");
  function ChangeState() {
    setUsername("Peter");
  }
  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={ChangeState}>Change Name</button>
    </div>
  );
}

export default Home;
