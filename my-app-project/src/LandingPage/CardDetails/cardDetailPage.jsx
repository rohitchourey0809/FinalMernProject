import { Link, useParams } from 'react-router-dom';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Img, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '../../Rating/Rating';

export const CardDetailPage = () => {
  const { id } = useParams();
  console.log('detail-id', id);
  const [Shoping, setshopData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Shopping/${id}`)
      .then(response => {
        setshopData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const AddCardProduct = e => {
    console.log('Addcard id', e);
    axios
      .post('http://localhost:8080/card', e)
      .then(response => {
        console.log('responseAdd', response.data);
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
        bordercolor="silver"
        border="2px"
        height="100%"
        width="100%"
        marginTop={'100px'}
      >
        <Box display="flex" marginTop={'100px'}>
          <Box>
            <Img src={Shoping.image} alt={Shoping.title} />
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
                {Shoping.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="20px" fontWeight="bold" color="brown">
                ${Shoping.price}
              </Text>
            </Center>
            <Center>{/* <Rating /> */}</Center>
            <Center>
              <Text color="dark green">
                <Rating rating={Shoping.rating} />
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
                {Shoping.description}
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
                // onClick={() => RemoveProduct(id)}
                variant={'outline'}
                leftIcon={<DeleteIcon />}
              >
                Remove
              </Button>
            </Center>
            <Center>
              <Link to={`/Shopping/card`}>
                {' '}
                <Button
                  bg="black"
                  onClick={() => AddCardProduct(Shoping)}
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
  );
};
