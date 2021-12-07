import React from 'react';
import './VaiAprender.css';
import RedLine from '../assets/vetores/linha-red.png';

function VaiAprender() {
  return (
    <section className="VaiAprender">
      <div className="container">
        <div className="vaiaprender-wrapper">
          <div className="vai-title-wrapper">
            <h2>
              What is 
              <br />
              Lorem Ipsum?
            </h2>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="vai-texts-wrapper">
            <ul>
              <li>
                <div className="vai-number"><p>01 -</p></div>
                <div className="vai-text"><strong>Lorem:</strong> 1914 translation by H. Rackham</div>
              </li>
              <li>
                <div className="vai-number"><p>02 -</p></div> 
                <div className="vai-text"><strong>Ipsum.</strong> <br/> The standard Lorem Ipsum passage, used since the 1500s</div>
                </li>
              <li>
                <div className="vai-number"><p>03 -</p></div> 
                <div className="vai-text"><strong>Lorem:</strong> 1914 translation by H. Rackham</div>
                </li>
              <li>
                <div className="vai-number"><p>04 -</p></div> 
                <div className="vai-text"><strong>Ipsum:</strong> The standard Lorem Ipsum passage, used since the 1500s</div>
                </li>
              <li>
                <div className="vai-number"><p>05 -</p></div> 
                <div className="vai-text"><strong>Lorem</strong> or <strong>Ipsum:</strong> <br/> 1914 translation by H. Rackham</div>
                </li>
              <li>
                <div className="vai-number"><p>06 -</p></div> 
                <div className="vai-text"><strong>Lorem</strong> or <strong>Ipsum:</strong> The standard Lorem Ipsum passage, used since the 1500s</div>
                </li>
              <li>
                <div className="vai-number"><p>07 -</p></div> 
                <div className="vai-text"><strong>Lorem</strong> 1914 translation by H. Rackham</div>
                </li>
              <li>
                <div className="vai-number"><p>08 -</p></div> 
                <div className="vai-text"><strong>Ipsum:</strong> The standard Lorem Ipsum passage, used since the 1500s</div>
                </li>
              <li>
                <div className="vai-number"><p>09 -</p></div> 
                <div className="vai-text"><strong>1914 translation by H. Rackham</strong> Where can I get some?</div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VaiAprender;