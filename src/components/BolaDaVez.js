import React from 'react';
import './BolaDaVez.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function BolaDaVez() {
  return (
    <section className="BolaDaVez">
      <div className="container">
        <div className="boladavez-wrapper">
          <div className="boladavez-title-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
            />
            <h2 className="display-none-500">
              Where does it come from?
            </h2>
            <h2 className="display-none display-block-500">
            Porque Customer 
            <br/>
            Success é a 
            <br/>
            bola 
            da vez?
            </h2>
          </div>
          <div className="blue-box">
            <p className="container">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Excepteur sint occaecat cupidatat non proident, <strong>sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>"
              <br/>
              <br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse <strong>cillum dolore eu fugiat nulla pariatur.</strong> 
            </p>
          </div>
        </div>
      </div>
      <img 
        className="blue-line" 
        src={BlueLine} 
        alt="linha azul"
      />
    </section>
  );
}

export default BolaDaVez;