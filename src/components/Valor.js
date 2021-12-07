import React from 'react';
import './Valor.css';
import RedLine from '../assets/vetores/linha-red.png';
import VerticalLine from '../assets/vetores/line-vertical.png';

function Valor() {
  return (
    <section className="Valor" id="Valor">
      <div className="container">
        <div className="valor-wrapper">
          <div className="valor-blue-box-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <div className="valor-blue-box">
              <div className="valor-blue-box-up">
                <p className="up-title">
                  The standard Lorem Ipsum passage, used since the 1500s
                </p>
                <p className="up-preco">
                  À vista: de <span className="valor-riscado">R$ 9.999,99</span>
                  <br/>
                  por R$ 999,99
                </p>
                <p className="up-preco em-ate">
                  em até <span className="valor-destaque">9x R$ 99,99</span> sem juros
                </p>
              </div>
              <img className="vertical-line" src={VerticalLine} alt=""/>
              <div className="valor-blue-box-down">
                <p className="down-title">
                <strong>Lorem:</strong> Section 1.10.32 of 
                <br />
                "de Finibus Bonorum et Malorum", 
                <br />
                written by Cicero in 45 BC
                </p>
              </div>
            </div>
          </div>
          <div className="investimento-wrapper">
            <h2>
              1914 translation by H. Rackham
            </h2>
            <p className="investimento-title">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
              voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <a className="investimento-btn" href="/">
              Lorem Ipsum
            </a>
            <p className="investimento-subtitle">
              What is Lorem Ipsum?
              <br/>
              Where does it come from?
              <br/>
              Why do we use it?
              <br/>
              Where can I get some?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valor;