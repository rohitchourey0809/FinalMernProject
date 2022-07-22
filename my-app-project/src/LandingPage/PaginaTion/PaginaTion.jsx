import { Button } from '@chakra-ui/react';
import React from 'react';

export const PaginaionComponent = ({ CurrentPage, LastPage, OnPageChange }) => {
  const arr = new Array(LastPage).fill(0);
  return (
    <div>
      {arr.map((item, page) => {
        return (
          <Button
            gap={'2px'}
            bg={'black'}
            color={'white'}
            onClick={() => OnPageChange(page + 1)}
          >
            {page + 1}
          </Button>
        );
      })}
    </div>
  );
};
