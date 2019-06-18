import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">Plan List</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <Link to="/" className="list-item">List</Link>
                </NavItem>
              <NavItem>
              <Link to="/calender" className="list-item">Calender</Link>
                </NavItem>
                <NavItem>
                <Link to="/create" className="list-item">Create new appoinment</Link>
                </NavItem>
                <NavItem>
                <Link to="/contact" className="list-item">Contact info</Link>
                </NavItem>
                <NavItem>
                <Link to="/map" className="list-item">Map</Link>
                </NavItem>
                <NavItem>
                <Link to="/guide" className="list-item">Rules</Link>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
