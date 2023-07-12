import { Box, Flex, Text, Grid, GridItem, Stack } from '@chakra-ui/react';
import Seats from './Components/Seats';
import BookingConsole from './Components/Console';

import HeadingTitle from './Components/Heading';
import { useContext } from 'react';
import { SeatsContext } from './Context/Seats.context';

function App() {
  const value = useContext(SeatsContext);
  console.log(value);
  return (
    <>
      <HeadingTitle />
      <Box
        // border={'1px solid black'}
        display={['block', 'block', 'block', 'flex']}
        justifyContent={'space-around'}
        w="100%"
        m="auto"
        h="100vh"
      >
        {' '}
        <Seats />
        <BookingConsole />
      </Box>
    </>
  );
}

export default App;
