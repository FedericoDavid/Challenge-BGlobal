import {
  Modal,
  Image,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  Grid,
  GridItem,
  Tag,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';

export const DetailsModal = ({
  isOpen,
  onClose,
  height,
  abilities,
  types,
  imageUrl,
  capitalizeName,
  hashtagId,
  weight,
}) => {
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent h='380px' maxW='50rem'>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(5, 1fr)'>
            <GridItem rowSpan={3} colSpan={2}>
              <Image src={imageUrl} alt={imageUrl} boxSize='300px' objectFit='cover' />
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Stack align='center'>
                <Text fontSize='25px' fontWeight='500'>{`${capitalizeName()} ${hashtagId()}`}</Text>
              </Stack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Stack direction='row' justifyContent='space-around' align='center' spacing={3}>
                <Box>
                  <Text>Height:</Text>
                  <Text>{`${height / 10}m`}</Text>
                </Box>
                <Box>
                  <Text>Type:</Text>
                  {types.map((t, i) => {
                    return (
                      <Stack pt='1' align='center'>
                        <Tag size='md' key={i} variant='subtle' colorScheme='teal'>
                          {t.type.name}
                        </Tag>
                      </Stack>
                    );
                  })}
                </Box>
              </Stack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Stack direction='row' justifyContent='space-around' align='center' spacing={3}>
                <Box>
                  <Text>Weight:</Text>
                  <Text>{weight()}</Text>
                </Box>
                <Box>
                  <Text>Abilities:</Text>
                  {abilities.map((a, i) => {
                    return (
                      <Stack pt='1' align='center'>
                        <Tag size='md' key={i} variant='subtle' colorScheme='teal'>
                          {a.ability.name}
                        </Tag>
                      </Stack>
                    );
                  })}
                </Box>
              </Stack>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailsModal;
