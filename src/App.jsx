import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Switch, useHistory } from "react-router";
import MovieDetail from "./Pages/MovieDetail";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Trailer from "./Pages/Trailer";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <Sidebar />
      <Switch>
        {/* home route  */}
        <Route
          exact
          path="/"
          component={() => {
            history.push("/trending");
            return null;
          }}
        />
        {/* search movie   */}
        <Route exact path="/search/:query">
          <Search />
        </Route>
        {/* trailer   */}
        <Route exact path="/trailer/:id">
          <Trailer />
        </Route>
        {/* movie detail  */}
        <Route exact path="/movie/:id">
          <MovieDetail />
        </Route>
        {/* category  */}
        <Route exact path="/:category">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
