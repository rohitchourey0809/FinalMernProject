import { VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardAllItem } from './CardAllItem';
// import './Carditem.css';

export const Card = () => {
  const [Carddata, setshopData] = useState([]);

  useEffect(() => {
    axios
      .get('https://finalmernproject.herokuapp.com/card')
      .then(response => {
        console.log(response.data);
        setshopData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <VStack className="container">
        {Carddata.map((e, index) => {
          return (
            <CardAllItem
              key={e.id}
              id={e.id}
              title={e.title}
              category={e.category}
              rating={e.rating}
              image={e.image}
              description={e.description}
              price={e.price}
            />
          );
        })}
      </VStack>
    </>
  );
};
