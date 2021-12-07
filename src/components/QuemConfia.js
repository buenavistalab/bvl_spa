import React from 'react';
import './QuemConfia.css';
import Ok from '../assets/vetores/like.png';
import BlueLine from '../assets/vetores/linha-blue.png';

function QuemConfia() {
  return (
    <section className="QuemConfia">
      <div className="container">
        <h2 className="display-none-500-min">
          Section 1.10.32 of 
          <br />
          "de Finibus Bonorum et Malorum", 
          <br />
          written by Cicero in 45 BC
        </h2>
        <h2 className="display-none display-block-500-min display-none-576-min">
          Section 1.10.32 of 
          <br />
          "de Finibus Bonorum et Malorum", 
          <br />
          written by Cicero in 45 BC
        </h2>
        <h2 className="display-none display-block-576-min">
          Section 1.10.32 of 
          <br />
          "de Finibus Bonorum et Malorum", 
          <br />
          written by Cicero in 45 BC
        </h2>
        <div className="quem-confia-wrapper">
          <div className="red-box">
            <img src={Ok} alt="vetor like"/>
            <p className="autor">
              LOREM IPSUM
              <br/>
              Neque porro quisquam est qui dolorem
            </p>
            <p className="autor-about">
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
              consectetur, adipisci velit, sed quia non numquam eius modi tempora 
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur?"
            </p>
          </div>
          <div className="youtube-wrapper">
            <iframe 
              title="youtube"
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/DY5RYp4sxYc?controls=0" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
        <img 
          className="blue-line display-none-700" 
          src={BlueLine} 
          alt="linha azul"
        />
      </div>
    </section>
  );
}

export default QuemConfia;