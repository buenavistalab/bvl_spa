import React from 'react';
import './Acessar.css';
import WhiteLine from '../assets/vetores/linha-white.png';

function Acessar() {
  return (
    <section className="Acessar">
      <div className="container">
        <div className="acessar-wrapper">
          <div className="acessar-wrapper-text">
            <p>
              On the other hand, we denounce with righteous indignation and dislike 
              men who are so beguiled and demoralized by the charms of pleasure of the moment.
            </p>
          </div>
          <div className="acessar-wrapper-btn">
            <a href="/">
              Lorem Ipsum
            </a>
            <img 
              className="white-line" 
              src={WhiteLine} 
              alt="linha branca animada"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acessar;