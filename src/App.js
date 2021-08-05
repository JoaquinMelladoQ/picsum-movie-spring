//import react from 'react';
import { Switch, Route } from "react-router-dom";

//import Header from './components/navbar/Header';
import Home from "./components/pages/Home";
import Cards from "./components/pages/Cards";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Cards} />
      </Switch>
    </>
  );
};

export default App;
