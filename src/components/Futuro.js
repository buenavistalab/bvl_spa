import React from 'react';
import './Futuro.css';
import RedLine from '../assets/vetores/linha-red.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function Futuro() {
  return (
    <section className="Futuro">
      <div className="container futuro-wrapper">
        <h2 className="display-none-500-min">
          Where does it come from?
        </h2>
        <h2 className="display-none display-block-500-min display-none-576-min">
          Where does it come from?
        </h2>
        <h2 className="display-none display-block-576-min">
          Where does it come from?
        </h2>
        <div className="futuro-row">
          <div className="futuro-row-text">
            <p className="display-none-700-min">
              <strong>Contrary to popular belief</strong> Lorem Ipsum is not simply 
              random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at 
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
              consectetur, from a Lorem Ipsum passage, and going through the 
              cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
              written in 45 BC. This book is a treatise on the theory of ethics, 
              very popular during the Renaissance. The first line of Lorem Ipsum, 
              <strong> "Lorem ipsum dolor sit amet.."</strong>, comes from a line in section 1.10.32.
            </p>
            <p className="display-none display-block-700-min">
              <strong>Contrary to popular belief</strong> Lorem Ipsum is not simply 
              random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old. Richard McClintock, a Latin professor at 
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
              consectetur, from a Lorem Ipsum passage, and going through the 
              cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
              written in 45 BC. This book is a treatise on the theory of ethics, 
              very popular during the Renaissance. The first line of Lorem Ipsum, 
              <strong> "Lorem ipsum dolor sit amet.."</strong>, comes from a line in section 1.10.32.
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="futuro-row-black-box-wrapper">
            <div className="futuro-row-black-box">
              <p>
                The standard chunk of <strong>Lorem Ipsum</strong> used since the 1500s is reproduced 
                below for those interested. Sections 1.10.32 and 1.10.33 from "de 
                Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
                exact original form, accompanied by English versions from the 1914 
                translation by H. Rackham.
              </p>
            </div>
            <img 
              className="blue-line" 
              src={BlueLine} 
              alt="linha azul"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Futuro;