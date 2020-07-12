import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtention ? window.devToolsExtention(): f => f)(createStore)));

import "./style/main.scss";

import history from './history';
import App from "./components/app";
import Navigation from './components/navigation/navigation';

import CenterGround from './components/Center/centerGround';
import TaskCheck from './components/TaskManager/taskCheck';
import EmoCheck from './components/EmoManager/emoCheck';
import Emotion from './components/EmoManager/emotion';

import Blue from './components/EmoManager/Cards/blue';
import Green from './components/EmoManager/Cards/green';
import Yellow from './components/EmoManager/Cards/yellow';
import Red from './components/EmoManager/Cards/red';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Navigation} />
            <Route path="/center" component={CenterGround} />
            <Route path="/tasks" component={TaskCheck} />
            <Route path="/emotions" component={EmoCheck} />
            <Route path="/emotion" component={Emotion} />

            <Route path="/blue" component={Blue} />
            <Route path="/green" component={Green} />
            <Route path="/yellow" component={Yellow} />
            <Route path="/red" component={Red} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
