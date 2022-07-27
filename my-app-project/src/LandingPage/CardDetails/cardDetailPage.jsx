import { Link, useParams } from 'react-router-dom';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Img, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '../../Rating/Rating';

export const CardDetailPage = () => {
  const { id } = useParams();
  console.log('detail-id', id);
  const [Shoping, setshopData] = useState({});
  const [Rate, setRate] = useState([]);

  useEffect(() => {
    axios
      .get(`https://json-deploy.herokuapp.com/Shopping/${id}`)
      .then(response => {
        setshopData(response.data);
        setRate(response.data.rating.rate);
        console.log(response.data.rating.rate, '(response.data.rating.rate');
      })
      .catch(error => {
        return error;
      });
  }, [id]);

  const AddCardProduct = e => {
    console.log('Addcard id', e);
    axios
      .post('https://finalmernproject.herokuapp.com/card', e)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log('shopping', Shoping);
  return (
    // <div></div>
    <VStack>
      <Center
        height="100%"
        width="100%"
        marginTop={20}
        p={50}
        boxShadow="dark-lg"
        backgroundColor="brown"
      >
        <Box display="flex">
          <Box>
            <Img
              src={Shoping.image}
              alt={Shoping.title}
              h={240}
              w={240}
              backgroundColor="brown"
            />
          </Box>
          <Box>
            <Center>
              <Text
                fontSize="30px"
                fontWeight="bold"
                margin={'auto'}
                color="pink"
                fontStyle="italic"
              >
                {Shoping.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="20px" fontWeight="bold" color="orange">
                ${Shoping.price}
              </Text>
            </Center>
            <Center>
              <Rating rating={Rate} />
            </Center>

            <Center display={'flex'} flexWrap={'wrap'}>
              {' '}
              <Text p={5} fontSize="18px" fontWeight="bold" margin="auto">
                {Shoping.description}
              </Text>
            </Center>
            <Center>
              <Flex p={6} margin="auto">
                <Button
                  bg={'red.400'}
                  variant={'outline'}
                  leftIcon={<DeleteIcon />}
                >
                  Remove
                </Button>

                <Link to={`/Shopping/card`}>
                  {' '}
                  <Button
                    bg="yellow.500"
                    onClick={() => AddCardProduct(Shoping)}
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
  );
};
