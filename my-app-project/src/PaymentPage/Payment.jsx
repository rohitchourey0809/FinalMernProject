import {
  Box,
  Flex,
  FormControl,
  Img,
  Input,
  Link,
  Stack,
  FormLabel,
  Text,
  Button,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Alerter } from './Alert/Alert';
import './Payment.css';

export const Payment = () => {
  const navigate = useNavigate();
  function JSAlert() {
    navigate('/');
    alert('Payment successful!');
  }
  return (
    <>
      <Box className="container" color="gold">
        <Flex justifyContent="space-evenly">
          <Stack>
            <Box className="Img-box" height="50px" width="200px">
              <Img
                height="50px"
                width="200px"
                src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                alt=""
              />
            </Box>
            <Box className="number">
              <FormLabel className="fw-bold" for="">
                **** **** **** 1060
              </FormLabel>
            </Box>
          </Stack>

          <Stack>
            <Box>
              <Box className="Img-box" height="80px" width="200px">
                <Img
                  height="70px"
                  width="150px"
                  src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                  alt=""
                />
              </Box>
              <Box className="number">
                <FormLabel className="fw-bold">**** **** **** 1060</FormLabel>
              </Box>
              <Box className="d-flex align-items-center justify-content-between"></Box>
            </Box>
          </Stack>

          <Stack>
            <Box>
              <Box className="Img-box" height="80px" width="200px">
                <Img
                  src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                  alt=""
                  height="70px"
                  width="200px"
                />
              </Box>
              <Box className="number">
                <FormLabel className="fw-bold">**** **** **** 1060</FormLabel>
              </Box>
            </Box>
          </Stack>
        </Flex>
        <Box className="col-12 mt-4">
          <Box className="card Text-3">
            <Text className="mb-0 fw-bold h4">Payment Methods</Text>
          </Box>
        </Box>

        <Box className="col-12">
          <Box className="card Text-3">
            <Box className="card-body border Text-0">
              <Text>
                <Link
                  className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <Text className="fw-bold">PayPal</Text>
                  <Text className="fab fa-cc-paypal"></Text>
                </Link>
              </Text>
            </Box>
            <Box className="card-body border Text-0">
              <Text>
                <Text className="fw-bold">Credit Card</Text>
              </Text>
              <Center boxShadow={'2xl'} bg="black">
                <Box
                  className="collapse show Text-3 pt-0"
                  id="collapseExample"
                  boxShadow={'2xl'}
                >
                  <Box className="row">
                    <Box className="col-lg-7">
                      <FormControl action="" className="FormControl">
                        <Box className="row">
                          <Box className="col-12">
                            <Box className="form__div">
                              <Input
                                type="text"
                                className="FormControl-control"
                                placeholder="Card Number"
                              />
                            </Box>
                          </Box>

                          <Box className="col-6">
                            <Box className="form__div">
                              <Input
                                type="text"
                                className="FormControl-control"
                                placeholder="MM / yy "
                              />
                            </Box>
                          </Box>

                          <Box className="col-6">
                            <Box className="form__div">
                              <Input
                                type="password"
                                className="FormControl-control"
                                placeholder="cvv code"
                              />
                            </Box>
                          </Box>
                          <Box className="col-12">
                            <Box className="form__div">
                              <Input
                                type="text"
                                className="FormControl-control"
                                placeholder=" name on the card"
                              />
                            </Box>
                          </Box>

                          <Center>
                            <Button
                              onClick={() => {
                                alert('Submit Detail Click For Make Payment');
                              }}
                              bg="brown"
                            >
                              Submit
                            </Button>
                          </Center>
                        </Box>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
        <Box className="col-12">
          <Box className="btn btn-primary payment">
            <Button onClick={() => JSAlert()} bg="green">
              Make Payment
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
