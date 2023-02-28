import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { Switch, Route } from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_NEWS_API;
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/general" key="general">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="general"
            />
          </Route>
          <Route path={"/business"} key="business">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="business"
            />
          </Route>
          <Route path={"/entertainment"} key="entertainment">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="entertainment"
            />
          </Route>
          <Route path={"/health"} key="health">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="health"
            />
          </Route>
          <Route path={"/science"} key="science">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="science"
            />
          </Route>
          <Route path={"/sports"} key="sports">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="sports"
            />
          </Route>
          <Route path="/technology" key="technology">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="technology"
            />
          </Route>
          <Route exact path="/" key="general">
            <News
              apiKey={this.apiKey}
              country="in"
              pageSize={15}
              category="general"
            />
          </Route>
        </Switch>
      </>
    );
  }
}

// export default App;
