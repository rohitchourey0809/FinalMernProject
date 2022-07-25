import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { CardItem } from './CardItem';
import axios from 'axios';
import { ArrowLeftIcon, ArrowRightIcon, Search2Icon } from '@chakra-ui/icons';
import { PaginaionComponent } from '../PaginaTion/PaginaTion';

export const CardPages = () => {
  const [Shoping, setshopData] = useState([]);
  const [filterTitle, setfilterTitle] = useState();
  const [page, setpage] = useState(1);
  const [query, setquery] = useState('');
  const [text, settext] = useState('');

  useEffect(() => {
    async function AllshoppingData() {
      await axios
        .get('https://json-deploy.herokuapp.com/Shopping', {
          params: {
            category: filterTitle,
            _page: page,
            _limit: 10,
            q: query,
          },
        })
        .then(response => {
          setshopData(response.data);
          // return response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    AllshoppingData();
  }, [filterTitle, page, query]);

  return (
    <>
      {/* Search by q */}
      <Box className="center SearchByQ">
        <Flex>
          {' '}
          <Center margin="auto">
            {' '}
            <Input value={text} onChange={e => settext(e.target.value)} />
            <Button
              bg={'black'}
              color={'brown'}
              onClick={() => setquery(text)}
              className="Search"
            >
              <Search2Icon />
            </Button>
          </Center>
        </Flex>
      </Box>

      {/* Prev-Next */}
      <Center>
        {' '}
        <Flex flexWrap="wrap">
          <Button
            disabled={page === 1}
            onClick={() => setpage(page - 1)}
            bg={'black'}
            color={'green'}
            gap={'2px'}
          >
            Prev
            <ArrowLeftIcon />
          </Button>
          <Button
            onClick={() => setpage(page + 1)}
            bg={'black'}
            color={'green'}
          >
            Next
            <ArrowRightIcon />
          </Button>
        </Flex>
      </Center>

      <Box>
        <Center flexWrap="wrap">
          {' '}
          <PaginaionComponent
            CurrentPage={page}
            LastPage={3}
            OnPageChange={setpage}
          />
        </Center>
      </Box>

      <VStack className="filter-stack">
        <Stack>
          <Flex
            gap={'10px'}
            cursor={'pointer'}
            color="pink"
            bg={'black'}
            borderRadius={'10px'}
            flexWrap="wrap"
          >
            <Box>
              <Button
                borderRadius={'10px'}
                radius="10px"
                onClick={() => setfilterTitle(Shoping.category)}
                backgroundColor={'black'}
                color={'gold'}
              >
                All |
              </Button>
            </Box>
            <Box>
              <Button
                borderRadius={'10px'}
                radius="10px"
                onClick={() => setfilterTitle("men's clothing")}
                backgroundColor={'black'}
                color={'gold'}
              >
                men's clothing |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle("women's clothing")}
                backgroundColor={'black'}
                color={'gold'}
              >
                women's clothing |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle('electronics')}
                backgroundColor={'black'}
                color={'gold'}
              >
                electronics |
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => setfilterTitle('jewelery')}
                backgroundColor={'black'}
                color={'gold'}
              >
                jewelery |
              </Button>
            </Box>
          </Flex>
        </Stack>
      </VStack>
      <Box marginLeft="250">
        <Grid templateColumns="repeat(2, 1fr)">
          {Shoping.length &&
            Shoping.map(e => {
              return (
                <CardItem
                  key={e.id}
                  id={e.id}
                  Title={e.title}
                  Category={e.category}
                  rating={e.rating.rate}
                  imageUrl={e.image}
                  Description={e.description}
                  Price={e.price}
                />
              );
            })}
        </Grid>

        <Center> {/* <Checkout /> */}</Center>
      </Box>
    </>
  );
};
