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
  const toast = useToast({
    position: 'top',

    containerStyle: {
      maxWidth: '100%',
    },
  });
  if (errorMessage) {
    toast({
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          {errorMessage}
        </Box>
      ),
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
