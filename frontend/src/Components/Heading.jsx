import React from 'react';
import { Box, Stack, Heading } from '@chakra-ui/react';
const HeadingTitle = () => {
  return (
    <Box>
      <Stack>
        <Heading as="h1" textAlign={'center'} textTransform={'uppercase'}>
          Un-Stop Train Seat Reservation
          <div
            style={{
              color: 'teal',
              fontSize: '13px',
              textTransform: 'lowercase',
            }}
          >
            (Click on box to Un-Book the Seat)
          </div>
        </Heading>
      </Stack>
    </Box>
  );
};

export default HeadingTitle;
