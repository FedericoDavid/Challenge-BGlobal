import { Container, Stack, Button, Box, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export const Pagination = ({ onLastPage, onNextPage, currentPage, totalPages }) => {
  return (
    <Container maxWidth='container.xl' pt={5}>
      <Stack direction='row' justifyContent='space-between' align='center' spacing={3} maxHeight={120}>
        <Button leftIcon={<ArrowLeftIcon />} colorScheme='red' variant='ghost' onClick={() => onLastPage()}>
          Last
        </Button>
        <Box>
          <Text fontSize='16px' fontWeight='500'>{`${currentPage} from ${totalPages}`}</Text>
        </Box>
        <Button rightIcon={<ArrowRightIcon />} colorScheme='red' variant='ghost' onClick={() => onNextPage()}>
          Next
        </Button>
      </Stack>
    </Container>
  );
};

export default Pagination;
