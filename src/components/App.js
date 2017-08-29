import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import TopBar from "./TopBar";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
  }
  
  closeSideBar() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("wrapper").style.marginLeft = "0";    
  }
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		return (
      <div>
        <div className="wrapper" id="wrapper">
          {/*<DevTools />*/}
          <TopBar />
          <Route
            exact
            path="/"
            render={props => (
              <LazyRoute {...props} component={import("./Home")} />
            )}
          />
          <Route
            exact
            path="/prices"
            render={props => (
              <LazyRoute {...props} component={import("./Prices")} />
            )}
          />
          <Route
            exact
            path="/treatment/tannpleie"
            render={props => (
              <LazyRoute {...props} component={import("./Treatment")} />
            )}
          />
          <Route
            exact
            path="/team"
            render={props => (
              <LazyRoute {...props} component={import("./Team")} />
            )}
          />
          <Route
            exact
            path="/member/homan"
            render={props => (
              <LazyRoute {...props} component={import("./Member")} />
            )}
          />
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeSideBar.bind(this)}>&times;</a>
          <a href="/"><b>Home</b></a>
          <a href="#">Rotfylling</a>
          <a href="/team">Vare Medarbeidere</a>
          <a href="#">Prisliste</a>
          <a href="#">Vitenskaplige Artikler</a>
          <a href="#">Bilder</a>
          <a href="#">Kontact Oss</a>
          <a href="#">Timebestilling</a>
        </div>

        <div className='footer'>
          <h3>Tannelege Homan Zandi AS</h3>
          <h5>Adress: Parkveien 60, 0254 Oslo | Phone: (+47) 22 44 18 11 | Faks: (+47) 22 44 18 12</h5>
        </div>
      </div>
		);
	}
}
