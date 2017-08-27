import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Route, Link } from "react-router-dom";

@inject("store")
@observer
export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();
		this.props.store.authenticate();
  }

  openSideBar() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";    
  }

	render() {
		return (
			<div className='nav'>
				<div className='heading'> <i className='fa fa-phone'></i> 22 44 18 11</div>
        <div className='heading central'>
          <a href='/'>
            Tannelege
            <br />
            <b>Homan Zandi AS</b>
          </a>
        </div>
				<div className='heading' onClick={this.openSideBar.bind(this)}>
          Menu
        </div>
			</div>
		);
	}
}
