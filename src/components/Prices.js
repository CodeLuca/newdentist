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
      formOn: true
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
			<div className="page prices">
        <div className='header'>
          <div className='buttons'>
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
          <h1>Pricing at Tannelege Homan Zandi</h1>
          <h6>Our Pricing for Our Different Operations. </h6>
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
          <h1>Our Treatment Pricing</h1>
          <h6>We have a Range of Treatments to Suit Every Patient.</h6>
          <hr />

          <div className='types'>
            <div className='title row'>
              <div className='name'>Prisoppslagets tjenester</div>
              <div className='price'>Priser Fra</div>
            </div>
            <div className='row'>
              <div className='name'>Konsultasjon/undersøkelse av revisjonspasient</div>
              <div className='price'>890,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 1 flate</div>
              <div className='price'>750,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 2 flate</div>
              <div className='price'>1250,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 3 flate</div>
              <div className='price'>1750,-</div>
            </div>
            <div className='row'>
              <div className='name'>Helkrone keram, gull eller MK.(inkl tanntekniker)</div>
              <div className='price'>5900,-</div>
            </div>
          </div>

          <div className='types'>
            <div className='title row'>
              <div className='name'>Prisoppslagets tjenester</div>
              <div className='price'>Priser Fra</div>
            </div>
            <div className='row'>
              <div className='name'>Konsultasjon/undersøkelse av revisjonspasient</div>
              <div className='price'>890,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 1 flate</div>
              <div className='price'>750,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 2 flate</div>
              <div className='price'>1250,-</div>
            </div>
            <div className='row'>
              <div className='name'>Tannfarget fylling 3 flate</div>
              <div className='price'>1750,-</div>
            </div>
            <div className='row'>
              <div className='name'>Helkrone keram, gull eller MK.(inkl tanntekniker)</div>
              <div className='price'>5900,-</div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
