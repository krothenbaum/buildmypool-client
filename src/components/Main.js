import { default as React, Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Card from './Card';
// import Home from '../home'
// import About from '../about'

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Card</Link>
          {/* <Link to="/about-us">About</Link> */}
        </header>
        {<main>
          <Route exact path="/" component={Card} />
          {/* <Route exact path="/about-us" component={About} /> */}
        </main>}

      </div>
    )
  }
}

export default Main;