import { useCallback, useEffect, useState } from 'react';
import NotMatchesFound from './components/Common/NotMatchesFound';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { usePokemonAPIClient } from './services/pokemonAPIClient';

export const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(0);
  const [notMatchesFound, setNotMatchesFound] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const pokemonAPIClient = usePokemonAPIClient();

  const getPokemonList = async () => {
    try {
      setIsloading(true);

      const list = await pokemonAPIClient.list(25, 25 * page);

      const promiseResult = list.results.map(async (p) => {
        return pokemonAPIClient.getByUrl(p.url);
      });

      const res = await Promise.all(promiseResult);

      setPokemon(res);

      setIsloading(false);
      setTotalPages(Math.ceil(list.count / 25));
      setNotMatchesFound(false);
    } catch (error) {
      new Error(error);
      console.log(`${error.name} : ${error.message} : ${error.response.data}`);
    }

    setIsloading(false);
    setNotMatchesFound(false);
  };

  const onSearch = async (value) => {
    if (!value) return getPokemonList();

    setIsloading(true);
    setNotMatchesFound(false);

    try {
      const res = await pokemonAPIClient.search(value.toString());

      setPokemon([res]);
      setPage(0);
      setTotalPages(1);
    } catch (error) {
      console.log(`${error.name} : ${error.message} : ${error.response.data}`);
      setNotMatchesFound(true);
      setIsloading(false);
    }

    setIsloading(false);
  };

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
  };

  useEffect(() => {
    getPokemonList();
  }, [page]);

  return (
    <div className='App'>
      <Navbar onSearch={onSearch} />
      {notMatchesFound ? (
        <NotMatchesFound goBack={onSearch} />
      ) : (
        <Home
          pokemon={pokemon}
          isLoading={isLoading}
          currentPage={page}
          totalPages={totalPages}
          onLastPage={lastPage}
          onNextPage={nextPage}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
