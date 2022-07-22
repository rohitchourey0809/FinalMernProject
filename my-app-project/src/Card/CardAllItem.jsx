import React from 'react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Img, Text, VStack } from '@chakra-ui/react';
import { Rating } from '../Rating/Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const CardAllItem = props => {
  const RemoveProduct = deleteid => {
    console.log('deleteId', deleteid);

    axios
      .delete(`http://localhost:8080/card/${deleteid}`)
      .then(response => {
        console.log('response', response);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <VStack>
        <Center
          bordercolor="silver"
          border="2px"
          height="100%"
          width="100%"
          marginTop={'100px'}
        >
          <Box display="flex" marginTop={'100px'}>
            <Box>
              <Img src={props.image} alt={props.title} />
            </Box>
            <Box>
              <Center>
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  margin={'auto'}
                  colorScheme="pink"
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
                  <Rating rating={props.rating} />
                </Text>
              </Center>
              <Center>
                {' '}
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  overflow="hidden"
                  margin="auto"
                  width="1000px"
                >
                  {props.description}
                </Text>
              </Center>
              <Center>
                {' '}
                <Text
                  fontSize="20px"
                  fontWeight="bold"
                  overflow="hidden"
                  margin="auto"
                  width="1000px"
                >
                  {/* {perks} */}
                </Text>
              </Center>
              <Center>
                <Button
                  onClick={() => RemoveProduct(props.id)}
                  variant={'outline'}
                  leftIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </Center>
              <Center>
                <Link to={`/Payment`}>
                  {' '}
                  <Button
                    bg="black"
                    // onClick={() => AddCardProduct(props)}
                    variant={'outline'}
                    leftIcon={<AddIcon />}
                  >
                    Add
                  </Button>
                </Link>
              </Center>
            </Box>
          </Box>
        </Center>
      </VStack>
    </div>
  );
};
