import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './component/Header'
//import Calender from './component/Calender';
import Info from './component/Info';
import TimeRange from './component/Time'
import Activity from './component/Activity';
import Calendar from "./component/Calendar";

class App extends Component {
  state = {
    selectedRange: [0,24]
  }

  handleRange = (event,values) => {
    this.setState({selectedRange: values});
  }

  render() {
    return (
      <>
        
        <BrowserRouter>
          <Header />
          <Switch>
            {/* if currentUrl == '/time', render <TimeRange> */}
            <Route exact path="/" render={props => <TimeRange handleRange={this.handleRange} selectedRange={this.state.selectedRange}/>} />

            {/* if currentUrl == '/about', render <Info> */}
            <Route path="/about" component={Info} />

            {/* if currentUrl == '/activity', render <Activity> */}
            <Route path="/activity" component={Activity} />
            {/* if currentUrl == '/activity', render <Calendar> */}
            <Route
              path="/calendar"
              render={props => <Calendar selectedRange={this.state.selectedRange}/>}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
