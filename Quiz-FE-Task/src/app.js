import React from "react";
import { Route, Switch } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";

import { Home, Profile, CreateQuiz, EditQuiz } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {

  window.title= "Quiz FE Task";

  localStorage.setItem('quizzes', JSON.stringify([])); 
  
  const { isLoading } = useAuth0();


  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/quiz-create" component={CreateQuiz}/>
          <ProtectedRoute path="/quiz-edit/:id" component={EditQuiz} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
