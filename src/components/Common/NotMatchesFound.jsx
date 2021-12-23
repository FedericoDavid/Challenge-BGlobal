import { Button, Box, Container, Stack, Text } from '@chakra-ui/react';
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';

export const NotMatchesFound = ({ goBack }) => {
  return (
    <Container maxWidth='container.2xl' height={649}>
      <Stack h='500' alignItems='center' justifyContent='center'>
        <Box mt='3' h='40px'>
          <CloseIcon />
        </Box>
        <Box justifyContent='center'>
          <Text fontSize='3xl'>Ups!... Not coincidences found 😪</Text>
        </Box>
        <Box justifyContent='center'>
          <Button leftIcon={<ArrowBackIcon />} colorScheme='red' variant='solid' onClick={() => goBack(null)}>
            Go Back
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default NotMatchesFound;
