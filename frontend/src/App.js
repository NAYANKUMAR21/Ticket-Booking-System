import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Stack,
  useToast,
} from '@chakra-ui/react';
import Seats from './Components/Seats';
import BookingConsole from './Components/Console';

import HeadingTitle from './Components/Heading';
import { useContext } from 'react';
import { SeatsContext } from './Context/Seats.context';

function App() {
  const { data, errorMessage } = useContext(SeatsContext);
  const toast = useToast();
  if (errorMessage) {
    toast({
      isClosable: true,
      status: 'info',

      title: errorMessage,
    });
  }
  return (
    <>
      <HeadingTitle />
      <Box
        display={['block', 'block', 'block', 'flex']}
        justifyContent={'space-around'}
        w="100%"
      >
        {' '}
        <Seats />
        <BookingConsole />
      </Box>
    </>
  );
}

export default App;
