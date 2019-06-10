import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import CalendarApp from './Components/Planner/Calender';
export default class App extends Component {
  render() {
    return (
    
      <div>
        <BrowserRouter>
<Header/>
<Route exact path="/" component={Home}/>
<Route path="/calender" component={CalendarApp}/>
{/* <Route path="/info" component={Info}/> */}
{/* <AppFooter /> */}
</BrowserRouter>
      </div>
    );
  }
}
