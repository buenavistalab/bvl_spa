import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer-wrapper">
          <div class="infos">
            <p>R. Santo Irineu</p>
            <p>Bosque da Saúde</p>
            <p>São Paulo, BR</p>
          </div>
          <div class="infos">
            <p>Burnsude Ave.</p>
            <p>Cranford</p>
            <p>New Jersey, US</p>
          </div>
          <div class="infos">
            <p>hi@buenavistalab.com</p>
          </div>
          <div class="infos">
            <p>Have a nice day :)</p>
          </div>
        </div>
        <p class="copyright">
          Copyright © 2022 BuenaVistaLab Softwares, Inc.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
