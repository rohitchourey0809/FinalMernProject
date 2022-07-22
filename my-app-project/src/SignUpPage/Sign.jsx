import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';
export const Sign = () => {
  return (
    <div>
      <div id="FULLDIV">
        <div id="head">
          <h2 id="custo">CREATE ACCOUNT</h2>
        </div>

        <hr />
        <div id="signcontainer">
          <label id="headingname">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="fname"
            placeholder="First Name"
            class="inputsize"
          />
          <br />
          <br />

          <label id="headingname">LAST NAME</label>
          <br />
          <input
            type="text"
            id="lname"
            placeholder="Last Name"
            class="inputsize"
          />

          <br />

          <br />

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

          <br />
          <Link to={'/login'}>
            <button id="buttonsign">SIGN UP</button>
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
            <Link to={'/login'} id="logina">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
