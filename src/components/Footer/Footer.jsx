import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
  const onInstagram = () => window.open('https://www.linkedin.com/in/federico-d-enriquez/');

  return (
    <Box backgroundColor='primary.500' boxShadow='md' height='80px' marginTop={20}>
      <Container maxWidth='container.lg'>
        <Stack direction='row' h='80px' alignItems='center' justifyContent='center' spacing={3}>
          <Text fontSize='17px' fontWeight='500'>
            Made with ❤ Federico Enriquez
          </Text>
          <Text>
            <AiOutlineLinkedin onClick={() => onInstagram()} cursor='pointer' fontSize='22px' color='#ccc' />
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
