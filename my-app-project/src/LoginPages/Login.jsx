import '../SignUpPage/Sign.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <div id="FULLDIV">
        <div id="head">
          <h2 id="custo">CUSTOMER LOGIN</h2>
        </div>

        <hr />
        <div id="signcontainer">
          <label id="headingname">EMAIL</label>
          <br />
          <input
            type="email"
            id="emailinp"
            placeholder="Email"
            class="inputsize"
          />
          <br />
          <br />

          <label id="headingname">PASSWORD</label>
          <br />
          <input
            type="text"
            id="password"
            placeholder="Password"
            class="inputsize"
          />
          <br />
          <br />
        </div>
        <br />
        <Link to={'/'}>
          <button id="buttonlogin">LOG IN</button>
        </Link>
        <br />
        <div
          style={{
            margin: 'auto',
            textAlign: 'center',
            color: 'gold',
            fontWeight: 'bold',
          }}
        >
          <p>RETURNING CUSTOMER?</p>
          <Link to={'/signup'} id="logina">
            SIGNUP
          </Link>
        </div>
      </div>
    </div>
  );
};
