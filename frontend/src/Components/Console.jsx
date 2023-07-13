import React, { useContext, useState } from 'react';
import { LuArmchair } from 'react-icons/lu';
import {
  InputGroup,
  InputLeftAddon,
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Stack,
  Heading,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { SeatsContext } from '../Context/Seats.context';
const BookingConsole = () => {
  const { DefaultSetting, patchNumOfSeats, bookedSeats, isLoading } =
    useContext(SeatsContext);
  // console.log(DefaultSetting);
  const [num, setNum] = useState(0);
  const toast = useToast({
    position: 'top',
    title: 'Container style is updated',
    containerStyle: {
      maxWidth: '100%',
    },
  });
  const handleReserve = (e) => {
    console.log(typeof num);
    if (num > 7 || num <= 0) {
      return toast({
        title: 'Number should be between 1 and 7!',
        status: 'warning',
      });
    }
    patchNumOfSeats(num);
  };

  return (
    <Box
      w={['95%', '80%', '80%', '40%']}
      m="auto"
      mt="50px"
      borderRadius={'5px'}
      border={'1px solid teal'}
      p="10px"
    >
      <Flex>
        <Box
          backgroundColor={'red.400'}
          borderRadius={'100%'}
          padding={'15px'}
        ></Box>
        <Text ml="10px" fontSize={'xl'}>
          Booked Seats
        </Text>
      </Flex>
      <Flex mt="10px">
        <Box
          backgroundColor={'blue.400'}
          borderRadius={'100%'}
          padding={'15px'}
        ></Box>
        <Text ml="10px" fontSize={'xl'}>
          Avialable Seats
        </Text>
      </Flex>
      <Flex
        // border={'1px solid black'}
        p={'10px'}
        mt="10px"
        borderRadius={'5px'}
        bgColor={'#eaeaea'}
      >
        <Flex mt="10px" fontSize={'xl'} w="30%">
          Current Seats Booked :
        </Flex>
        <Flex gap="5px" w="60%">
          {!isLoading ? (
            bookedSeats.length !== 0 ? (
              bookedSeats?.map(({ Seat_Number, isBooked, _id }, index) => {
                return (
                  <Box
                    w="50px"
                    borderRadius={'5px'}
                    _hover={{
                      opacity: '0.5',
                      color: 'black',
                    }}
                    key={index}
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
                  </Box>
                );
              })
            ) : (
              <Text fontSize={'xl'} mt="10px">
                All Seats Are Avilable
              </Text>
            )
          ) : (
            <Text fontSize={'xl'} mt="10px" ml="10px" fontWeight={'bold'}>
              ..Updating
            </Text>
          )}
        </Flex>
      </Flex>
      <Stack mt="10px">
        Number of Seats:
        <Text fontWeight={'bold'} fontSize={'xl'}>
          {' '}
          Ex:3
        </Text>
        <Flex justifyContent={'space-between'} mt="10px">
          <InputGroup>
            <InputLeftAddon children={<LuArmchair />} />
            <Input
              type="number"
              w="50%"
              variant="flushed"
              min={1}
              max={7}
              placeholder="Enter Number 1-7 to book Seats"
              onChange={(e) => setNum(Number(e.target.value))}
            />
          </InputGroup>

          <Button w="45%" colorScheme="blue" onClick={handleReserve}>
            Reserve Seats
          </Button>
        </Flex>
        <Button
          colorScheme="red"
          onClick={() => {
            DefaultSetting();
          }}
        >
          Reset All Seats
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingConsole;
