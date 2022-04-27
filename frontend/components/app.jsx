import React from "react";

import FrontPage from "./front_page/front_page";
import { 
  Route,
  Switch,
  Link 
} from "react-router-dom";
import LoginForm from "./login_form/login_form";

const App = () => (
  <div>
    <LoginForm />
  </div>
)

export default App;