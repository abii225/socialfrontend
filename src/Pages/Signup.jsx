import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [msg, setMsg] = useState("");
  const SignupUser = () => {
    fetch(`https://socialmedia-pjfo.onrender.com/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password, gender }),
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
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
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
      <select name="gender" id="" onChange={(e) => setGender(e.target.value)}>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">female</option>
      </select>

      <button onClick={() => SignupUser()}>Submit</button>
    </div>
  );
};

export default Signup;
