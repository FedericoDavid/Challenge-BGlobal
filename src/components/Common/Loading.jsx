import { Container, Stack, Spinner } from '@chakra-ui/react';
export const Loading = () => {
  return (
    <Container maxWidth='container.2xl' height='2xl'>
      <Stack h='500' alignItems='center' justifyItems='center' justifyContent='center'>
        <Spinner thickness='5px' speed='0.55s' emptyColor='gray.200' color='primary.500' size='xl' />
      </Stack>
    </Container>
  );
};

export default Loading;
