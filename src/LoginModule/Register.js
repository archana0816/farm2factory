import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/login');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="register-module">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="register-container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                <span className="register-text-primary">Farm2Factory</span>
              </h1>
              <p style={{ color: '#26620E' }}>
                Connecting farmers with industries for sustainable waste management. Turn agricultural waste into valuable resources, fostering a greener future and boosting profitability for farmers and businesses alike.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSignUp}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control custom-border"
                            id="form3Example1"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <label htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control custom-border"
                            id="form3Example2"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <label htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="email"
                        className="form-control custom-border"
                        id="form3Example3"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        className="form-control custom-border"
                        id="form3Example4"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="form3Example4">Password</label>
                    </div>

                    <div className="form-check d-flex mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                      <label className="form-check-label" htmlFor="form2Example33" style={{ textAlign: 'left' }}>
                        Remember my Password
                      </label>
                    </div>

                    <button type="submit" className="btn btn-custom btn-block mb-4">
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or Sign up with</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FontAwesomeIcon icon={faGoogle} />
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FontAwesomeIcon icon={faTwitter} />
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
