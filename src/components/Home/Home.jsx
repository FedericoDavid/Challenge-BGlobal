import React from 'react';
import Card from '../Common/Card';
import { Box, Grid, Container, Stack } from '@chakra-ui/react';
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';

export const Home = ({ pokemon, isLoading, currentPage, totalPages, onLastPage, onNextPage }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container maxWidth='container.xl' h={pokemon.length < 2 && 649}>
          <Pagination
            currentPage={currentPage + 1}
            totalPages={totalPages}
            onLastPage={onLastPage}
            onNextPage={onNextPage}
          />
          <Stack direction='row'>
            <Grid templateColumns='repeat(4, 1fr)' gap={7}>
              {pokemon.map((p, i) => (
                <Box h='300px' key={i}>
                  <Card
                    name={p.name}
                    imageUrl={p.sprites.other.home.front_default}
                    id={parseInt(p.id)}
                    height={p.height}
                    weight={p.weight}
                    types={p.types}
                    abilities={p.abilities}
                  />
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Home;
