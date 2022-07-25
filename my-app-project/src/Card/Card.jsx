import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardAllItem } from './CardAllItem';

export const Card = () => {
  const [Carddata, setshopData] = useState([]);

  useEffect(() => {
    axios
      .get('https://json-deploy.herokuapp.com/Shopping/card')
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
      {Carddata.map((e, index) => {
        return <CardAllItem key={e.id} {...e} />;
      })}
    </>
  );
};
