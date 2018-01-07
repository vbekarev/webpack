var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');
var Foother = require('./Foother.jsx');
import { Button } from 'react-bootstrap';

class Main extends React.Component {

  render(){
    return (
      <div>
          <Header />
          <Body />
          <Foother />
      </div>
    );
  }
}

module.exports = Main;
