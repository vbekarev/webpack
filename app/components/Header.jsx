var React = require('react');
import { Navbar, Nav,  NavItem} from 'react-bootstrap';


class Header extends React.Component {

  constructor(props) {
  super(props);
  // Устанавливаем состояние
  debugger;
  this.state = {
    isAuthorized: false
  };
}

  handleSelect(key){
    debugger;
    this.setState(
      isAuthorized:true
    );
    console.log(key);
  }

  render(){
    debugger;
    var loginItem = '';
    if(!this.state.isAuthorized){
      loginItem = 'Login';
    }else{
      loginItem = 'Welcome!';
    }
    return (
      <Navbar width="100%">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">WebStore</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <div>
          <Navbar.Collapse>
            <Nav pullRight onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="#">Cart</NavItem>
              <NavItem eventKey={2} href="#">{loginItem}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

module.exports = Header;
