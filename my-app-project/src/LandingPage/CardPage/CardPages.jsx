import React, { useEffect, useState } from 'react';
import { Box, Center, Flex, Grid, Heading } from '@chakra-ui/react';
import { CardItem } from './CardItem';
import axios from 'axios';

export const CardPages = () => {
  const [Shoping, setshopData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/Shopping')
      .then(response => {
        setshopData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Box marginLeft="250">
      <>
        {/* <Center> */}
          {' '}
          <Heading marginLeft="500" as="h2">Cart</Heading>
        {/* </Center> */}
        <Grid templateColumns="repeat(2, 1fr)">
          {Shoping.length &&
            Shoping.map(e => {
              return (
                <CardItem
                  key={e.id}
                  id={e.id}
                  Title={e.title}
                  Category={e.category}
                  Rating={e.rating.rate}
                  imageUrl={e.image}
                  Description={e.description}
                  Price={e.price}
                />
              );
            })}
        </Grid>
      </>
      <Center> {/* <Checkout /> */}</Center>
    </Box>

    // <div>
    //   <CardItem />
    // </div>
  );
};
