import React, { useContext, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { SeatsContext } from '../Context/Seats.context';

const Seats = () => {
  const { getSeats, data, isLoading } = useContext(SeatsContext);

  useEffect(() => {
    getSeats();
  }, []);
  return (
    <Box w={['95%', '80%', '80%', '30%']} m="auto" mt="50px">
      {isLoading ? (
        <Flex
          w="100%"
          justifyContent={'center'}
          alignItems={'center'}
          h="100vh"
        >
          <Text textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>
            ....Loading Please Wait
          </Text>
        </Flex>
      ) : (
        <Grid templateColumns="repeat(7, 1fr)" gap={'25px'} h="100vh">
          {data?.map(({ Seat_Number, isBooked, _id }, index) => {
            return (
              <GridItem
                borderRadius={'5px'}
                _hover={{
                  opacity: '0.5',
                  color: 'black',
                }}
                key={index}
                w="100%"
                h="60px"
                bg={isBooked ? 'red.400' : 'blue.400'}
                color="white"
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box>
                  <Text>{Seat_Number}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Seats;
