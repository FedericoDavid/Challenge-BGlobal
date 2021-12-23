import { useState } from 'react';
import { Box, Image, Container, Stack, StackDivider, Input, Icon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import pokedexLogo from './../assets/pokedex-logo.png';

export const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeValue = (e) => {
    if (!e.target.value.length) onSearch(null);

    setSearchValue(e.target.value);
  };

  return (
    <Box backgroundColor='primary.500' boxShadow='md' paddingY={1}>
      <Container maxWidth='container.lg'>
        <Stack direction='row' justifyContent='space-between' align='center' spacing={3} maxHeight={120}>
          <Stack direction='column'>
            <Image
              src={pokedexLogo}
              boxSize='170px'
              objectFit='contain'
              alt='pokedex-logo'
              onClick={() => onSearch(null)}
              cursor='pointer'
            />
          </Stack>
          <Stack
            alignItems='center'
            backgroundColor='white'
            borderRadius='sm'
            boxShadow='md'
            direction='row'
            divider={<StackDivider />}
            maxHeight={50}
            maxWidth={400}
            padding={2}
            width='100%'
          >
            <Input paddingX={1} placeholder='Search Pokemon' variant='unstyled' onChange={onChangeValue} />
            <Icon
              as={SearchIcon}
              color='gray.400'
              height={5}
              width={5}
              onClick={() => onSearch(searchValue.toLowerCase())}
              _hover={{ color: 'gray.500' }}
              cursor='pointer'
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
