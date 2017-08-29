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
			<div className="page memberContainer">
        <div className='header'>
          <div className='buttons'>
            <div className='button' onClick={this.toggleForm.bind(this)}>
              Make an Appointment
            </div>
          </div>
        </div>
        
        <div className='treatmentContainer'>
          <div className='side'>
            <div className='link active'>
              <a href='/team'>
              View all members
              </a>
            </div>
            <div className='link active'>
              <a>
              Tannelege Homan Zandi
              </a>
            </div>
            <div className='link'>
              <a>
              Tannlege Trude Bøe
              </a>
            </div>
            <div className='link'>
              <a>
              Tannlege Anders Valnes
              </a>
            </div>
            <div className='link'>
              <a>
              Tannpleier Sindy Tran
              </a>
            </div>
            <div className='link'>
              <a>
              Tannlegeassistent Rounak Karimi
              </a>
            </div>
            <div className='link'>
              <a>
              Tannlegeassistent Jenny Gonzalez Solhaug
              </a>
            </div>
          </div>

          <div className='treatmentWrapper'>
            <div className='form homeForm'>
              <form>
                <input placeholder='Nvan:' />
                <input placeholder='E-post:' />
                <input placeholder='Telefon:' />
                <textarea placeholder='Melding:'></textarea>
                <input type='submit' />
              </form>
            </div>

            <div className='info'>
              <h1>Tannelege Homan Zandi</h1>
              <h6>Estetisk tannbehandling handler om justeringer av tennenes utseende. </h6>
              <hr />
              <div className='infoMember'>
                <img src='http://i.imgur.com/TLzK3vV.jpg' style={{
                  'width': '250'
                }}/>
                <p>
                  Cand. Odont 1996.
                  <br />
                  Spesialist i Endodonti 2003
                  <br />
                  Forskningsstipendiat fra norsk forskningsråd 1994-1996 i mikrobiologi
                  <br />
                  Privat praktiserende tannlege siden 1996. London 1997-1998. King’s College dental hospital i London. Oslo 1998-2008
                  <br />
                  Henvisningspraksis siden 2003
                  <br />
                  Instruktørtannlege avd. endodonti siden 2000.
                  <br />
                  Universitetslektor avd. endodonti. Arbeider både med grunnutdanning og videreutdanningen, med særlig vekt på endodontisk kirurgi
                  <br />
                  Holder en rekke kurs for allmenntannleger i klinisk endodonti
                  <br />
                  PhD kandidat Universitetet i  Oslo
                </p>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
