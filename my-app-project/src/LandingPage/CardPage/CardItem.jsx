// import React from 'react';
// import { DeleteIcon } from '@chakra-ui/icons';
// import { Box, Button, Center, Image, Text, VStack } from '@chakra-ui/react';
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';
// // import { BsCaretUpSquareFill, BsCartPlusFill } from 'react-icons/bs';

// // import { Rating } from '../../PRODUCTS/Rating';

// export const CardItem = props => {
//   console.log('props', props);
//   return (
//     <>
//       <VStack>
//         <Center
//           bordercolor="silver"
//           border="2px"
//           height="100%"
//           width="100%"
//           marginTop={'100px'}
//         >
//           <Box display="flex" marginTop={'100px'}>
//             <Box>
//               <Image src={props.imageUrl} alt={props.category} />
//             </Box>
//             <Box>
//               <Center>
//                 <Text
//                   fontSize="30px"
//                   fontWeight="bold"
//                   margin={'auto'}
//                   colorScheme="pink"
//                   fontStyle="italic"
//                 >
//                   {props.Category}
//                 </Text>
//               </Center>
//               <Center>
//                 <Text fontSize="20px" fontWeight="bold" color="brown">
//                   {/* ${price} */}
//                   {props.Headline}
//                 </Text>
//               </Center>
//               <Center>{/* <Rating /> */}</Center>
//               <Center>{props.P}</Center>
//               <Center>
//                 {' '}
//                 <Text
//                   fontSize="20px"
//                   fontWeight="bold"
//                   overflow="hidden"
//                   margin="auto"
//                   width="1000px"
//                 >
//                   {/* {description} */}
//                 </Text>
//               </Center>
//               <Center>
//                 {' '}
//                 <Text
//                   fontSize="20px"
//                   fontWeight="bold"
//                   overflow="hidden"
//                   margin="auto"
//                   width="1000px"
//                 >
//                   {/* {perks} */}
//                 </Text>
//               </Center>
//               <Center>
//                 <Button
//                   //   onClick={() => RemoveProduct(id)}
//                   variant={'outline'}
//                   leftIcon={<DeleteIcon />}
//                 >
//                   Remove
//                 </Button>
//               </Center>
//             </Box>
//           </Box>
//         </Center>
//       </VStack>
//     </>
//   );
// };

import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Image,
  Text,
  Avatar,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/react';

export const CardItem = props => {
  console.log('props', props);
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image src={props.imageUrl}  />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {props.Category}
          </Text>
          <Heading
            // color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {props.Headline}
          </Heading>
          <Text color={'gray.500'}>{props.description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Button
            // onClick={() => RemoveProduct(id)}
            variant={'outline'}
            leftIcon={<DeleteIcon />}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
