import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

  const {user} = useAuth0(); 

  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <img 
            //src="https://avatars.githubusercontent.com/u/60062294?s=200&v=4"
            src="https://awsmp-logos.s3.amazonaws.com/cebc564a-ef52-4b68-8df9-9aad9d14ce34/e6e00d7e0978a73a48dae3010a553b1f.png"
            width="350px"
            height="80px"
            style={{marginRight: "25px"}} 
          />
          { user && user.picture && 
                    <img 
                      src={user.picture}
                      width="50px"
                      height="50px"
                      style={{marginRight: '10px'}}
                    />
          }
          <MainNav />
          <AuthNav />
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
