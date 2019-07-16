import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

//Dynamic import with code splitting
//In this case, it is not worth it. But for futur projects, you should do code spliiting
//for code that accounts for at least 30KB+.
const Details = lazy(() => import("./Details"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
