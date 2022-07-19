import { useParams } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Image,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
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
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

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
          </Box>
        </Box>
      </Center>
    </VStack>
  );
};
