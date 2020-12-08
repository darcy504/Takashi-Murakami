import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, PageTitle } from './components/common'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/about">
            <PageTitle title="ABOUT"></PageTitle>
          </Route>
          <Route path="/portfolio">
            <PageTitle title="PORTFOLIO"></PageTitle>
          </Route>
          <Route path="/">
            <PageTitle title="HOME"></PageTitle>
          </Route>
        </Switch>

    </div>
  )
}


export default App;
