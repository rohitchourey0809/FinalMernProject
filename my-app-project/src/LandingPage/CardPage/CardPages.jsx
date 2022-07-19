import React, { useEffect, useState } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { CardItem } from './CardItem';
import axios from 'axios';

export const CardPages = () => {
  const [New, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/news')
      .then(response => {
        // console.log(response.data);
        console.log(response.data[0].articles);
        setNewData(response.data[0].articles);
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Box>
      <>
        <Heading as="h2" size="xl" textAlign="center" marginTop="20px">
          Cart
        </Heading>
        {New.length &&
          New.map(e => {
            return (
              <CardItem
                key={e.id}
                id={e.id}
                Category={e.category}
                Headline={e.headline}
                imageUrl={e.image_url}
                description={e.posted_date}
              />
            );
          })}
      </>
      <Center> {/* <Checkout /> */}</Center>
    </Box>
    // <div>
    //   <CardItem />
    // </div>
  );
};
