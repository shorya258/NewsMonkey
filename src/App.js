import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Temp from "./components/Temp";
//news api key f25897909b79440195c4847071c6a739
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/general" key="general">
            <News country="in" pageSize={15} category="general" />
          </Route>
          <Route path={"/business"} key="business">
            <News country="in" pageSize={15} category="business" />
          </Route>
          <Route path={"/entertainment"} key="entertainment">
            <News country="in" pageSize={15} category="entertainment" />
          </Route>
          <Route path={"/health"} key="health">
            <News country="in" pageSize={15} category="health" />
          </Route>
          <Route path={"/science"} key="science">
            <News country="in" pageSize={15} category="science" />
          </Route>
          <Route path={"/sports"} key="sports">
            <News country="in" pageSize={15} category="sports" />
          </Route>
          <Route path="/technology" key="technology">
            <News country="in" pageSize={15} category="technology" />
          </Route>
          <Route exact path="/" key="general">
            <News country="in" pageSize={15} category="general" />
          </Route>
        </Switch>
      </>
    );
  }
}

// export default App;
