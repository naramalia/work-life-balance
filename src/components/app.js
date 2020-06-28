import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './navigation/navigation';
import CenterGround from './Center/centerGround';
import TaskCheck from './TaskManager/taskCheck';
import EmoCheck from './EmoManager/emoCheck';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      
        <Router>
          <div>
            {/* <Navigation /> */}

            <Switch>
              <Route exact path="/" component={Navigation} />
              <Route path="/center" component={CenterGround} />
              <Route path="/tasks" component={TaskCheck} />
              <Route path="/emotions" component={EmoCheck} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
