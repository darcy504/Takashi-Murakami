import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, PageTitle } from './components/common'
import './App.css';
import About from './components/common/about/About'
import Portfolio from './components/common/portfolio/Portfolio';
import Home from './components/common/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/portfolio">
            <PageTitle title="PORTFOLIO"></PageTitle>
            <Portfolio />
          </Route>
          <Route path="/about">
            <PageTitle title="ABOUT"></PageTitle>
            <About />
          </Route>
          <Route path="/">
            <PageTitle title="HOME"></PageTitle>
            <Home /> 
          </Route>
        </Switch>

    </div>
  )
}


export default App;
