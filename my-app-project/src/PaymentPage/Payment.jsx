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
      <Box className="container">
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
              <Box className="collapse Text-3 pt-0" id="collapseExample">
                <Box className="row">
                  <Box className="col-8">
                    <Text className="h4 mb-0">Summary</Text>
                    <Text className="mb-0">
                      <Text className="fw-bold">Product:</Text>
                      <Text className="c-green">: Name of product</Text>
                    </Text>
                    <Text className="mb-0">
                      <Text className="fw-bold">Price:</Text>
                      <Text className="c-green">:$452.90</Text>
                    </Text>
                    <Text className="mb-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque nihil neque quisquam aut repellendus, dicta vero?
                      Animi dicta cupiditate, facilis provident quibusdam ab
                      quis, iste harum ipsum hic, nemo qui!
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="card-body border Text-0">
              <Text>
                <a
                  className="btn btn-primary Text-2 w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <Text className="fw-bold">Credit Card</Text>
                  <Text className="">
                    <Text className="fab fa-cc-amex"></Text>
                    <Text className="fab fa-cc-mastercard"></Text>
                    <Text className="fab fa-cc-discover"></Text>
                  </Text>
                </a>
              </Text>
              <Box className="collapse show Text-3 pt-0" id="collapseExample">
                <Box className="row">
                  <Box className="col-lg-5 mb-lg-0 mb-3">
                    <Text className="h4 mb-0">Summary</Text>
                    <Text className="mb-0">
                      <Text className="fw-bold">Product:</Text>
                      <Text className="c-green">: Name of product</Text>
                    </Text>
                    <Text className="mb-0">
                      <Text className="fw-bold">Price:</Text>
                      <Text className="c-green">:$452.90</Text>
                    </Text>
                    <Text className="mb-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque nihil neque quisquam aut repellendus, dicta vero?
                      Animi dicta cupiditate, facilis provident quibusdam ab
                      quis, iste harum ipsum hic, nemo qui!
                    </Text>
                  </Box>
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
                        <Box className="col-12">
                          <Box className="btn btn-primary w-100">Submit</Box>
                        </Box>
                      </Box>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="col-12">
          <Box className="btn btn-primary payment">
            <Button onClick={() => JSAlert()}>Make Payment</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
