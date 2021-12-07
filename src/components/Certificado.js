import React from 'react';
import './Certificado.css';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';
import Book from '../assets/images/img_template5.jpg';

function Certificado() {
  return (
    <section className="Certificado" id="Certificado">
      <div className="container">
        <div className="certificado-wrapper">
          <div className="certificado-img">
            <img className="book" src={Book} alt=""/>
            <img 
              className="red-line display-none-700" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <img 
              className="white-line display-none-700" 
              src={WhiteLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="certificado-text">
            <img 
              className="white-line display-none-700" 
              src={WhiteLine} 
              alt="linha branca"
            />
            <h2>
              The wise man therefore always holds in these matters to this principle of selection: 
            </h2>
            <p className="certi-subtitle">
              1914 translation by H. Rackham
              <br/>
              + Section 1.10.32
              <br/>
              + Section 1.10.33 of "de Finibus Bonorum et Malorum"
              <br/>
              + Section 1.10.34, written by Cicero in 45 BC
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificado;