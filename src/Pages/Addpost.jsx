import React, { useEffect, useState } from "react";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [device, setdevice] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    console.log(device);
  }, []);
  const loginSubmit = () => {
    fetch(`https://socialmedia-pjfo.onrender.com/posts/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({ title, body, device }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(data.msg);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>...</h1>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setbody(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="device"
        onChange={(e) => setdevice(e.target.value)}
      />

      <button onClick={() => loginSubmit()}>Submit</button>
    </div>
  );
};

export default Addpost;
