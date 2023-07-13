import React from 'react';
import { Box, Stack, Heading } from '@chakra-ui/react';
const HeadingTitle = () => {
  return (
    <Box>
      <Stack>
        <Heading as="h1" textAlign={'center'} textTransform={'uppercase'}>
          Untop Train Seat Reservation
        </Heading>
      </Stack>
    </Box>
  );
};

export default HeadingTitle;
