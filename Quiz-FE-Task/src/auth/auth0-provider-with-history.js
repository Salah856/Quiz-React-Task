import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = "conduktor-coding-challenge.eu.auth0.com";
  const clientId = "2BczaMeSZzUhOfRfDOFG5QXcfaXQUjmE";
  const redirectUrl = "http://localhost:8000"


  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || "/");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUrl}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
