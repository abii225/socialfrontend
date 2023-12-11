import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log(msg);
  }, [msg]);
  const loginSubmit = () => {
    fetch(`https://socialmedia-pjfo.onrender.com/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(data.msg);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>{msg}</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={() => loginSubmit()}>Submit</button>
    </div>
  );
};

export default Login;
