import React from "react";
import { Link } from "react-router-dom";

class FrontPage extends React.Component {
  
  render(){
    return(
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    )
  }
}

export default FrontPage;