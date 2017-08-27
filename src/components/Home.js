import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import $ from 'jquery';

@inject("store")
@observer
export default class Home extends Component {
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
			<div className="page home">
        <div className='header'>
          <div className='buttons'>
            <a href='/prices'>
              <div className='button'>
                See our Prices
              </div>
            </a>
            <div className='button' onClick={this.toggleForm.bind(this)}>
              Make an Appointment
            </div>
          </div>
        </div>

        <div className='form homeForm'>
          <form>
            <input placeholder='Nvan:' />
            <input placeholder='E-post:' />
            <input placeholder='Telefon:' />
            <textarea placeholder='Melding:'></textarea>
            <input type='submit' />
          </form>
        </div>


        <div className='aboutUs'>
          <h1>Tannelege Homan Zandi</h1>
          <h6>We Take Care of More Than Just Your Smile.</h6>
          <hr />
          <p>
            Your dental health is very important to you, and therefore it is also very important to us.
          </p>
          <p>
            Our staff make sure that we take extreme care when handling your dental highgene and we will do everything to make sure it is good.
          </p>
          <p>
            Our Staff are friendly and will make sure that we accomadate your stay to be as pleasent as possible.
          </p>
          <p>
            We have been in this buisness longer than anyone else in Oslo, and we know how to make sure that we finish your procedure as quickly as possible.
          </p>
        </div>

        <div className='treatments'>
          <h1>Our Treatments</h1>
          <h6>Our Click on a Treatment to Find Out More.</h6>
          <hr />

          <div className='types'>
            <div>
              <p>
                <i className="fa fa-stethoscope"></i>
                Estetisk tannpleie
              </p>
              <p>
                <i className="fa fa-stethoscope"></i>
                Reparere tenner
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-stethoscope"></i>
                Vanlige problemer
              </p>
              <p>
                <i className="fa fa-stethoscope"></i>
                Hull i tennene
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-stethoscope"></i>
                Tannløsning
              </p>
              <p>
                <i className="fa fa-stethoscope"></i>
                Ny teknologi
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-stethoscope"></i>
                Munnhygiene
              </p>
              <p>
                <i className="fa fa-stethoscope"></i>
                Barn og ungdom
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-stethoscope"></i>
                Tenner og graviditet
              </p>
              <p>
                <i className="fa fa-stethoscope"></i>
                Implantater
              </p>
            </div>
          </div>
        </div>

        <div className='team'>
          <h1>Our Team</h1>
          <h6>We Have the Best Dentists & Staff in Oslo.</h6>
          <hr />
          <div className='teamImages'>
            <div className='teamImageContainer'>
              <div className='img'></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Homan Zandi</h3>
                  <h6>Tannlege</h6>
                </div>
              </div>
            </div>
            <div className='teamImageContainer'>
              <div className='img' style={{'background-image': 'url("http://i.imgur.com/JTzrBGe.jpg")'}}></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Trude Bøe</h3>
                  <h6>Tannlege</h6>
                </div>
              </div>
            </div>
            <div className='teamImageContainer'>
              <div className='img' style={{'background-image': 'url("http://i.imgur.com/1ocAMHg.jpg")'}}></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Anders Valnes</h3>
                  <h6>Tannlege</h6>
                </div>
              </div>
            </div>
            <div className='teamImageContainer'>
              <div className='img' style={{'background-image': 'url("http://i.imgur.com/N4zbpxM.jpg")'}}></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Sindy Tran</h3>
                  <h6>Tannpleier</h6>
                </div>
              </div>
            </div>
            <div className='teamImageContainer'>
              <div className='img' style={{'background-image': 'url("http://i.imgur.com/glLTaxE.jpg")'}}></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Rounak Karimi</h3>
                  <h6>Tannlegeassistent</h6>
                </div>
              </div>
            </div>
            <div className='teamImageContainer'>
              <div className='img' style={{'background-image': 'url("http://i.imgur.com/URi9WyD.jpg")'}}></div>
              <div className="overlay">
                <div className='text'>
                  <h3>Jenny Gonzalez Solhaug</h3>
                  <h6>Tannlegeassistent</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
