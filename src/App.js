import React, { Component } from 'react';
import routers from './router/router.js';
// 处理页面空白 BrowserRouter 改为 HashRouter
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {routers.map((route, key) => {
            //对路由匹配模式（exact）进行拆分，true：严格模式，false：非严格模式
            if (route.exact) {
              return (
                <Route
                  key={key}
                  exact
                  path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routers={route.routers} />
                  )}
                />
              );
            } else {
              return (
                <Route
                  key={key}
                  path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              );
            }
          })}
        </Router>
      </div>
    );
  }
}

export default App;
