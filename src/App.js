import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./Services/auth.service";
import Login from "./Components/Forms/login-user-form";
import CalendarioView from "./Components/Views/calendarView";
import Register from "./Components/Forms/registration";
import agendaView from "./Components/Views/agendaView";
import emotionsView from "./Components/Views/emotionsView";
import Navbar_ from "./Components/Elements/navbar";
import  PrivateRoute from "./Services/privateRoute";
import HomePage from "./Components/Views/homePage";
import LoginAdminForm from "./Components/Forms/login-admin-form";
import addArticleView from "./Components/Views/addArticle";
import addPhraseView from './Components/Views/addPhrase';
import RecomendationView from './Components/Views/recomendations';
import StatsView from './Components/Views/statsView';

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);


  return (
    <>
    <Navbar_/>
    <Router>
            <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/singup" component={Register} />
            <Route exact path="/admin" component={LoginAdminForm} />
            <Route exact path="/admin/createArticle" component={addArticleView} />
            <Route exact path="/admin/createPhrase" component={addPhraseView} />
            <PrivateRoute exact path="/stats" component={StatsView} />
            <PrivateRoute exact path="/articles" component={RecomendationView} />
            <PrivateRoute exact path="/profile" component={CalendarioView} />
            <PrivateRoute exact path="/agenda" component={agendaView} />
            <PrivateRoute exact path="/mood" component={emotionsView} />
          </Switch>
    </Router>
    </>
  );
};

export default App;