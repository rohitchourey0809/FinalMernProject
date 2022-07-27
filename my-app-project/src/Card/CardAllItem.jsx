import React from 'react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Img, Text, VStack } from '@chakra-ui/react';
import { Rating } from '../Rating/Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const CardAllItem = props => {
  console.log(props.rating.rate);
  const RemoveProduct = deleteid => {
    console.log('deleteId', deleteid);

    axios
      .delete(`https://json-deploy.herokuapp.com/card/${deleteid}`)
      .then(response => {
        console.log('response', response);
        window.location.reload(false);
        alert(`Delete Item Successful: ${deleteid}`);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <VStack>
        <Center
          // border="2px"
          height="100%"
          width="98%"
          margin={1}
          bg="grey.100"
          boxShadow="2xl"
          backgroundColor="brown"
        >
          <Box display="flex" p={10} margin={1}>
            <Box>
              <Img
                src={props.image}
                alt={props.title}
                p={2}
                backgroundColor="brown"
              />
            </Box>
            <Box margin={1}>
              <Center>
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  margin={'auto'}
                  color="pink.500"
                  fontStyle="italic"
                >
                  {props.title}
                </Text>
              </Center>
              <Center>
                <Text fontSize="20px" fontWeight="bold" color="brown">
                  ${props.price}
                </Text>
              </Center>
              <Center>{/* <Rating /> */}</Center>
              <Center>
                <Text color="dark green">
                  <Rating rating={props.rating.rate} />
                </Text>
              </Center>
              <Center>
                {' '}
                <Flex flexWrap="wrap">
                  {' '}
                  <Text
                    fontSize="15px"
                    fontWeight="bold"
                    overflow="hidden"
                    marginleft="10px"
                    width="1000px"
                  >
                    {props.description}
                  </Text>
                </Flex>
              </Center>
              <Center>
                {' '}
                <Text fontSize="10px" fontWeight="bold" overflow="hidden">
                  {/* {perks} */}
                </Text>
              </Center>
              <Center>
                {' '}
                <Flex>
                  {' '}
                  <Button
                    bg={'red.500'}
                    onClick={() => RemoveProduct(props.id)}
                    variant={'outline'}
                    leftIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                  <Link to={`/Shopping/Payment`}>
                    <Button
                      bg="green"
                      // onClick={() => AddCardProduct(props)}
                      variant={'outline'}
                      leftIcon={<AddIcon />}
                    >
                      Add
                    </Button>
                  </Link>
                </Flex>
              </Center>
            </Box>
          </Box>
        </Center>
      </VStack>
    </div>
  );
};
