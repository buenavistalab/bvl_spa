import React from 'react';
import './Idealizador.css';
import CSWeek from '../assets/images/bvl.png';
import RD from '../assets/images/bvl.png';
import TDC from '../assets/images/bvl2.png';
import Livro from '../assets/images/bvl.png';
import Hiram from '../assets/images/img_template3.png';
import Lisboa from '../assets/images/bvl2.png';
import RedLine from '../assets/vetores/linha-red.png';

function Idealizador() {
  return (
    <section className="Idealizador">
      <div className="idealizador-wrapper container">
        <div className="idealizador-item">
          <div className="ide-photo">
            <img className="hiram-photo" src={Hiram} alt=""/>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
            />
          </div>
          <div className="ide-text">
              <h2>
                1914 translation by H. Rackham
              </h2>
              <p className="autor-livro">
                But I must explain to you how all this mistaken idea of denouncing 
                pleasure and praising pain was born and I will give you a complete 
                account of the system, and expound the actual teachings of the great explorer of the truth, 
                the master-builder of human happiness.
              </p>
              <p className="autor-palestra">
                Eventos que já palestrou:
              </p>
              <div className="lugares-row">
                <img src={RD} alt="logo patrocinador"/>
                <img src={TDC} alt="logo patrocinador"/>
                <img src={Lisboa} alt="logo patrocinador"/>
                <img src={CSWeek} alt="logo patrocinador"/>
              </div>
          </div>
        </div>
        <div className="idealizador-item idealizador-item-reverse" id="Livro">
          <div className="ide-text">
            <h2>
              Section 1.10.33 of
            </h2>
            <p className="autor-livro">
              The wise man therefore always holds in these matters to this principle 
              of selection: he rejects pleasures to secure other greater pleasures, 
              or else he endures pains to avoid worse pains.
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha animada"
            />
          </div>
          <div className="ide-livro">
            <img src={Livro} alt="capa do livro customer success"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Idealizador;