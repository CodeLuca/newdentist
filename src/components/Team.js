import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import $ from 'jquery';

@inject("store")
@observer
export default class Treatment extends Component {
	constructor(props) {
		super(props);
    this.store = this.props.store;
    this.state = {
      formOn: false
    }
  }
  
  toggleForm() {
    let tempState = this.state;
    this.setState({
      formOn: !tempState.formOn
    })

    if(this.state.formOn) {
      $('.homeForm').slideDown();
    } else {
      $('.homeForm').slideUp();
    }
  }

	render() {
    const store = this.store;

		return (
			<div className="page teamContainer">
        <div className='header'>
          <div className='buttons'>
            <div className='button' onClick={this.toggleForm.bind(this)}>
              Make an Appointment
            </div>
          </div>
        </div>
        
        <div className='info'>
            <div className='team'>
            <h1>Our Team</h1>
            <h6>We Have the Best Dentists & Staff in Oslo.</h6>
            <h6>Click one of our team members to find out more about them.</h6>
            <hr />
            <div className='teamImages'>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img'></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Homan Zandi</h3>
                      <h6>Tannlege</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img' style={{'background-image': 'url("http://i.imgur.com/JTzrBGe.jpg")'}}></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Trude Bøe</h3>
                      <h6>Tannlege</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img' style={{'background-image': 'url("http://i.imgur.com/1ocAMHg.jpg")'}}></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Anders Valnes</h3>
                      <h6>Tannlege</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img' style={{'background-image': 'url("http://i.imgur.com/N4zbpxM.jpg")'}}></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Sindy Tran</h3>
                      <h6>Tannpleier</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img' style={{'background-image': 'url("http://i.imgur.com/glLTaxE.jpg")'}}></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Rounak Karimi</h3>
                      <h6>Tannlegeassistent</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className='teamImageContainer'>
                <a href='/member/homan'>
                  <div className='img' style={{'background-image': 'url("http://i.imgur.com/URi9WyD.jpg")'}}></div>
                  <div className="overlay">
                    <div className='text'>
                      <h3>Jenny Gonzalez Solhaug</h3>
                      <h6>Tannlegeassistent</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
