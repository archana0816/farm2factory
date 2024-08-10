import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import './BuyerFooter.css';

const BuyerFooter = () => {
  return (
    <footer className="text-center text-lg-start foot-bg-body-tertiary" style={{textDecoration:'none'}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" style={{color:'white'}}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5 text">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                Farm2Factory
              </h6>
              <p>
              Connecting farmers with factories to sell organic waste to convert it into valuable resources for sustainable production.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Coconut Shell</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Banana Fibre</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Sugarcane Bagasse</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Rice Straw</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Coconut Husk</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Home</a>
              </p>
              <p>
                <a href="/aboutus" className="text-reset">About us</a>
              </p>
              <p>
                <a href="/profile" className="text-reset">Profile</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" />
                Coimbatore
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                farm2factory@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                + 91 98765 01243
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold">Farm2Factory.com</a>
      </div>
    </footer>
  );
};

export default BuyerFooter;
