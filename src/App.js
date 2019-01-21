import React, { Component } from 'react';
import './App.css';

import { Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
    <h2> Airport </h2>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <h2> City </h2>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const Courses = ({ match }) => (
  <div>
    <h2> Courses </h2>
    {console.log('match:', match)}
    <ul>
      <li>
        <Link to={`${match.url}/technology`}>Technology</Link>
      </li>
      <li>
        <Link to={`${match.url}/business`}>Business</Link>
      </li>
      <li>
        <Link to={`${match.url}/economics`}>Economics</Link>
      </li>
    </ul>

    <Route
      exact
      path={`${match.path}/:course`}
      render={({ match }) => <div> This is {match.params.course}</div>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/airports">Airports</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/airports" component={Airport} />
        <Route path="/cities" component={City} />
        <Route path="/courses" component={Courses} />

        <Route
          path="/products"
          render={() => <div> This is the products route </div>}
        />
      </div>
    );
  }
}

export default App;
