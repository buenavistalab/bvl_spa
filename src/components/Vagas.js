import React from 'react';
import './Vagas.css';
import BlueLine from '../assets/vetores/linha-blue.png';

function Vagas() {
  return (
    <section className="Vagas">
      <div className="vagas-wrapper container">
        <div className="vagas-card-wrapper">
          <div className="vagas-card">
            <p className="vagas-card-title">
              Where can I get some?
            </p>
            <p className="vagas-card-subtitle">
              De R$ 9.999,99 a R$ 99.999,99
              <br/>
              1 vaga: São Paulo - SP (1)
              <br/>
              Publicada em 01/01
            </p>
            <p className="vagas-card-about">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
              <br/>
              <br/>
            </p>
            <p className="vagas-card-about catho">
              <strong>Fonte:</strong> Lorem
            </p>
          </div>
          <img 
            src={BlueLine} 
            alt="" 
            className="blue-line"
          />
        </div>
        <div className="vagas-text-wrapper">
          <img 
            src={BlueLine} 
            alt="" 
            className="blue-line"
          />
          <h2>
            It is a long established fact that a reader will be distracted by
          </h2>
          <p className="vagas-salarios">
            the readable content of a page
          </p>
          <p className="vagas-fontes">
            when looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vagas;