import { Box, Image, Stack, useDisclosure } from '@chakra-ui/react';
import DetailsModal from './DetailsModal';

export const Card = ({ id, name, imageUrl, height, weight, types, abilities }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getHashtagId = () => `#${(id / 100).toFixed(2).replace('.', '')}`;
  const getCapitalizeName = () => name.charAt(0).toUpperCase() + name.slice(1);
  const getWeight = () => `${((weight / 10) * 2.205).toFixed(2)}lbs (${weight / 10}kg)`;

  return (
    <>
      <Stack p='8'>
        <Box
          maxW='sm'
          borderWidth='2px'
          borderRadius='xl'
          overflow='hidden'
          boxShadow='md'
          _hover={{ boxShadow: 'xl' }}
          cursor='pointer'
          onClick={onOpen}
        >
          <Box p='8' bg='gray.100'>
            <Image src={imageUrl} alt={imageUrl} />
          </Box>
          <Stack p='3'>
            <Box fontWeight='semibold' textAlign='center'>
              <span>{getCapitalizeName()}</span>
            </Box>
            <Box fontWeight='semibold' textAlign='center'>
              <span>{getHashtagId()}</span>
            </Box>
          </Stack>
        </Box>
      </Stack>

      <DetailsModal
        height={height}
        types={types}
        abilities={abilities}
        imageUrl={imageUrl}
        isOpen={isOpen}
        onClose={onClose}
        capitalizeName={getCapitalizeName}
        hashtagId={getHashtagId}
        weight={getWeight}
      />
    </>
  );
};

export default Card;
