import React, { useEffect, useState } from "react";

const Allpost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://socialmedia-pjfo.onrender.com/posts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return <div>Allpost</div>;
};

export default Allpost;
