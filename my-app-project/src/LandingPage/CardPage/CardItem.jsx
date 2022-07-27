import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Center,
  Image,
  Text,
  Stack,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Rating } from '../../Rating/Rating';
import './CardItem.css';

export const CardItem = props => {
  // console.log('props', props);
  return (
    <Link to={`/Shopping/${props.id}`}>
      <Grid templateColumns="repeat(2, 300px)" className="container">
        <Center py={6}>
          <GridItem
          
            width={'1000px'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={5}
            className="elements"
          >
            <Box h={'210px'} bg={'gray.100'}>
              <Image
                src={props.imageUrl}
                height={'100%'}
                width={'100%'}
                margin={'auto'}
                p={10}
                bg={'cream'}
              />
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={400}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {props.Category}
              </Text>
              <Heading
                // color={useColorModeValue('gray.700', 'white')}
                fontSize={'1xl'}
                fontFamily={'body'}
              >
                {props.Title}
              </Heading>
              <Text fontSize={'20px'}>{props.description}</Text>
              <Text color={'red.500'} letterSpacing={1}>
                `${props.Price}`
              </Text>
              <Text color={'black.500'}>
                <Rating rating={props.rating} />
              </Text>
            </Stack>
          </GridItem>
        </Center>
      </Grid>
    </Link>
  );
};
