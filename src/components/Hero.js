import React from 'react';
import './Hero.css';
import ImgHeader from '../assets/images/img_template2.jpg';
import Relogio from '../assets/vetores/relogio.png';
import Chapeu from '../assets/vetores/chapeu.png';
import Calendario from '../assets/vetores/calendario.png';
import Livro from '../assets/vetores/livro.png';
import Cofre from '../assets/vetores/cofre.png';

function Hero() {

  const scrollToCertificado = () => {
    document.querySelector('#Certificado').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToLivro = () => {
    document.querySelector('#Livro').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToValor = () => {
    document.querySelector('#Valor').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="Hero">
      <div 
        className="hero-wrapper"
        style={{
          backgroundImage: `url(${ImgHeader})`
        }}  
      >
        <div className="container hero-text">
          <h1>
            What is Lorem Ipsum?
          </h1>
          <p className="display-none-500-min">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <p className="display-none display-block-500-min display-none-576-min">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className="display-none display-block-576-min">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="btn-cta">
            <a href="/">
              Lorem Ipsum
            </a>
          </div>
        </div>
        <div className="container hero-grid">
          <div className="hero-grid-item">
            <img src={Relogio} alt="vetor relogio"/>
            <p>
              1914 translation by H. Rackham
            </p>
          </div>
          <button
            onClick={() => {
              scrollToCertificado()
            }}
          >
            <div className="hero-grid-item">
              <img src={Chapeu} alt="vetor chapeu"/>
              <p>
                Section 1.10.32 of "de Finibus Bonorum et Malorum".
              </p>
            </div>
          </button>
          <div className="hero-grid-item">
            <img src={Calendario} alt="vetor calendario"/>
            <p>
              Written by Cicero in 45 BC.
            </p>
          </div>
          <button
              onClick={() => {
                scrollToLivro()
              }}
            >
            <div className="hero-grid-item">
              <img src={Livro} alt="vetor livro"/>
              <p>
                Where can I get some?
              </p>
            </div>
          </button>
          <button
              onClick={() => {
                scrollToValor()
              }}
            >
            <div className="hero-grid-item">
                <img src={Cofre} alt="vetor cofre porco"/>
                <p>
                  Lorem <span>R$ 999,99</span> Lorem Ipsum R$ 99,99 Ipsum 9x R$ 99,99
                </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;