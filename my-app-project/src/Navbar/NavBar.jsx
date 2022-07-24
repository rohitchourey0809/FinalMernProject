import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  Icon,
} from '@chakra-ui/react';
// import { Icon } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AvatarWithRipple from '../Avatar/Avatar';
export default function NavBar() {
  const [counter, setcounter] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    axios
      .get(' http://localhost:5000/card')
      .then(response => {
        setcounter(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex>
          <AvatarWithRipple />
        </Flex>
        <Flex>
          <ColorModeSwitcher />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Link to={'Shopping/card'}>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'20px'}
              fontWeight={600}
              color={'white'}
              bg="rgb(33,31,32)"
              _hover={{
                bg: 'black.300',
              }}
              position="relative"
            >
              <Icon as={AiOutlineShoppingCart} h={12} w={10} color={'green'} />
              {counter}
            </Button>
          </Link>
          <Link to={'/login'}>
            {' '}
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'purple.400'}
              _hover={{
                bg: 'black.300',
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to={'/signup'}>
            {' '}
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              _hover={{
                bg: 'black.300',
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}
