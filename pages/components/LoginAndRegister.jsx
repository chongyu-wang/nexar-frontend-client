import React, { useState } from 'react';
import Login from "./Login";
import Register from "./Register";

function LoginAndRegister({setShowSignup}) {
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  return (
    <div class="items-center justify-center m-auto my-20" style={{
        position: "relative",
        width: "400px",
        height: "440px",
        background: "transparent",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "20px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
        display: "flex"
    }}>
      {loginOrRegister === "login" ? (<Login setShowSignup={setShowSignup} setLoginOrRegister={setLoginOrRegister}/>) : (<Register setShowSignup={setShowSignup} setLoginOrRegister={setLoginOrRegister}/>)}
    </div>
  )
}

export default LoginAndRegister;