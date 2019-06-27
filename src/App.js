import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import CalendarApp from './Components/Calender/Calender';
import CreatePlan from './Components/Plan/CreatePlan';
import EditPlan from './Components/Plan/EditPlan';
import PlanList from './Components/Plan/PlanList';
import DeletePlan from './Components/Plan/DeletePlan';
import Contact from './Components/Contact/Contact';
import Map from './Components/Contact/Map';
import Guide from './Components/Guidelines/Guidelines';
import Frontpage from './Components/Frontpage/Frontpage';
import Review from './Components/Reviews/Review';
import PriceTypes from './Components/Priser/PriceTypes';

export default class App extends Component{
  render() {
    return (
      <div>
<BrowserRouter>
<Header/> 
<Route exact path="/" component={Frontpage}/>
<Route path="/reviews" component={Review}/>
<Route path="/pricing" component={PriceTypes}/>
<Route path="/contact" component={Contact}/>
<Route path="/list" component={PlanList}/>
<Route path="/calender" component={CalendarApp}/>
<Route path="/create" component={CreatePlan} />
<Route path="/edit/:id" component={EditPlan} />
<Route path="/delete/:id" component={DeletePlan} />
<Route path="/map" component={Map}/>
<Route path="/guide" component={Guide}/>
</BrowserRouter>
      </div>
    );
  }
}
