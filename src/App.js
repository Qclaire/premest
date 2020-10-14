import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import CreateArticle from './components/Content/CreateArticle';
import Details from './components/Content/Details';
import Home from './components/Content/Home';
import Index from './components/Index';

function App() {
  return (

    <Index>
      <Router>
        <Route exact default path="/articles" component={Home} />
        <Route exact path="/new-article" component={CreateArticle} />
        <Route exact path="/articles/details" component={Details} />

        {/* <Redirect to="/articles" /> */}
      </Router>

    </Index>
  );
}

export default App;
