import axios from 'axios';

export const usePokemonAPIClient = () => {
  const list = async (limit, offset) => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit ?? 25}&offset=${offset ?? 0}`;
    return axios.get(url).then((res) => res.data);
  };

  const getByUrl = async (url) => axios.get(url).then((res) => res.data);

  const search = async (value) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    return axios.get(url).then((res) => res.data);
  };

  return {
    list,
    getByUrl,
    search,
  };
};
