import React from 'react';
import './ParaMim.css';
import RedLine from '../assets/vetores/linha-red.png';

function ParaMim() {
  return (
    <section className="ParaMim">
      <div className="container">
        <div className="paramim-wrapper">
          <div className="para-title-wrapper">
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <h2>
              Why do we use it?
              <br />
              Where can I get some?
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
              excepturi sint occaecati cupiditate non provident, similique sunt in 
              culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
              Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
          <div className="para-texts-wrapper">
            <div className="numbers-texts">
              <div className="texts">
                <div className="num-txt-wrap">
                  <p className="text para-texts-title">
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/01</p>
                  <p className="text">
                    <strong>Quis autem vel</strong> eum iure reprehenderit qui in 
                    ea voluptate velit esse quam.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/02</p>
                  <p className="text">
                    <strong>Quis autem vel</strong> eum iure reprehenderit qui in 
                    ea voluptate velit esse quam.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/03</p>
                  <p className="text">
                    <strong>Quis autem vel</strong> eum iure reprehenderit qui in 
                    ea voluptate velit esse quam.
                  </p>
                </div>
                <div className="num-txt-wrap">
                  <p className="number">/04</p>
                  <p className="text padding-zero">
                    <strong>Quis autem vel</strong> eum iure reprehenderit qui in 
                    ea voluptate velit esse quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParaMim;