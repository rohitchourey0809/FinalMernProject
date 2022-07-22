import { Box, Button, FormLabel, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.css';
export const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  async function Signup(e) {
    const payload = await {
      FIRSTNAME: firstname,
      LASTNAME: lastname,
      EMAIL: email,
      PASSWORD: password,
    };
    axios
      .post('  http://localhost:8080/Signupdata', payload)
      .then(response => {
        alert(`SignUp Successful  -${response.status}`);
      })
      .catch(error => {
        console.log('ErrorSignup', error);
      });

    navigate('/login');
  }

  return (
    <Box>
      <Box id="FULLDIV">
        <Box id="head">
          <Text id="custo">CREATE ACCOUNT</Text>
        </Box>

        <hr />
        <Box id="signcontainer">
          <FormLabel id="headingname">FIRST NAME</FormLabel>

          <Input
            value={firstname}
            name="firstname"
            onChange={e => setfirstname(e.target.value)}
            type="text"
            id="fname"
            placeholder="First Name"
            class="inputsize"
          />
          <br />
          <br />

          <FormLabel id="headingname">LAST NAME</FormLabel>

          <Input
            value={lastname}
            name="lastname"
            onChange={e => setlastname(e.target.value)}
            type="text"
            id="lname"
            placeholder="Last Name"
            class="inputsize"
          />

          <br />

          <br />

          <FormLabel id="headingname">EMAIL</FormLabel>

          <Input
            value={email}
            name="email"
            onChange={e => setemail(e.target.value)}
            type="email"
            id="emailinp"
            placeholder="Email"
            class="inputsize"
          />
          <br />
          <br />

          <FormLabel id="headingname">PASSWORD</FormLabel>

          <Input
            value={password}
            name="password"
            onChange={e => setpassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            class="inputsize"
          />
          <br />
          <br />

          <br />
          <Link to={'/login'}>
            <Button
              onClick={e => Signup(e)}
              id="buttonsign"
              type="submit"
              variant={'ghost'}
            >
              SIGN UP
            </Button>
          </Link>
          <br />
          <Box
            style={{
              margin: 'auto',
              textAlign: 'center',
              color: 'gold',
              fontWeight: 'bold',
            }}
          >
            <Text>RETURNING CUSTOMER?</Text>
            <Link to={'/login'} id="logina">
              LOGIN
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
