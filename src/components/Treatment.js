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
			<div className="page treatment">
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
              <a>
              Estetisk tannpleie
              </a>
            </div>
            <div className='link'>
              <a>
              Ny teknologi
              </a>
            </div>
            <div className='link'>
              <a>
              Tannregulering
              </a>
            </div>
            <div className='link'>
              <a>
              Tannløsning
              </a>
            </div>
            <div className='link'>
              <a>
              Hull i tennene
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
              <h1>Estetisk tannpleie</h1>
              <h6>Estetisk tannbehandling handler om justeringer av tennenes utseende. </h6>
              <hr />
              <p>
                SAED står for Scandinavian Academy of Esthetic Dentistry og Erik Svendsrud har i flere år vært aktiv i styret både som leder og styremedlem i denne foreningen. SAED tar sikte på å videreutdanne tannleger i Skandinavia ved å holde årlige kurs innen estetisk tannbehandling. 
                <br />
                <br />
                Han har også holdt flere foredrag både i Norge og ved større kongresser i Skandinavia og er en mye brukt foredragsholder innen estetisk tannbehandling og behandlingsplanlegging. Tannlege Erik Svendsrud bruker mye tid på etterutdanning. Årlig tilbringes mange uker på kurs, fortrinnsvis i utlandet, for å lære mer om nye teknikker fra de ledende tannlegene i Europa og USA. Mye tid brukes også på å lese forskningsartikler som er viktige for holde seg oppdatert i den rivende utviklingen det er innen odontologi.
              </p>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
