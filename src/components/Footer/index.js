import React from 'react';

import kieranlogo from '../../images/kieranlogo.png';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import Contributors from "../Contributers";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <div className="footer-created">
            <div className="footer-created__img-holder">
              <a href="http://kieranvenison.co.uk" target="_blank">
                <img className="footer-created__img" src={kieranlogo} alt="kieran venison logo" />
              </a>
            </div>
            <div className="footer-created__text">
              <p className="h6 text-light">Front end wizard</p>
              <p className="text-light">Created with love by <a href="http://kieranvenison.co.uk" target="_blank" className="text-light">Kieran Venison</a></p>
            </div>
          </div>
        </div>
        <div className="col-8 col-sm-4 col-md-3 offset-md-1 col-lg-2 offset-lg-2">
          <div className="social">
            <div className="social__icon-holder">
              <a rel="noopener noreferrer" href="https://twitter.com/kieranmv95?lang=en-gb" target="_blank">
                <img src={twitter} alt="twitter logo" className="social__icon" />
              </a>
            </div>
            <div className="social__icon-holder">
              <a rel="noopener noreferrer" href="https://github.com/kieranmv95" target="_blank">
                <img src={github} alt="github logo" className="social__icon" />
              </a>
            </div>
            <div className="social__icon-holder">
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/kieran-venison-9a4aa292/" target="_blank">
                <img src={linkedin} alt="linkedin logo" className="social__icon social__icon--large" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contributors />
    </div>
  </footer>
);

export default Footer;
