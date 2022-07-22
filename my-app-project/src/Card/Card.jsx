
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '../Rating/Rating';
import { CardAllItem } from './CardAllItem';

export const Card = () => {
  const [Carddata, setshopData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/card')
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
