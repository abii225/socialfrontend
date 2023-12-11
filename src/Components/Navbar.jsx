import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "green", height: "100px" }}>
      <Link style={{ margin: "10px", fontSize: "20px" }} to="/posts">
        view Posts
      </Link>
      <Link style={{ margin: "10px", fontSize: "20px" }} to="/addposts">
        Add posts
      </Link>
      <Link style={{ margin: "10px", fontSize: "20px" }} to="/login">
        login
      </Link>
      <Link style={{ margin: "10px", fontSize: "20px" }} to="/signup">
        signup
      </Link>
    </div>
  );
};

export default Navbar;
