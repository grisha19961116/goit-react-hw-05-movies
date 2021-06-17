const axios = require('axios');

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '78f2432cb0b978404715fbeff43c36be';

axios.defaults.params = {
  api_key: apiKey,
};

const getTrend = async (page = 1) => {
  const { data } = await axios.get(`/trending/all/day?page=${page}`);
  return data;
};

const getSearch = async (search, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?language=en-US&page=${page}&include_adult=false&query=${search}`,
  );
  return data;
};

const getDetail = async id => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`);
  return data;
};

const getIframe = async id => {
  const { data } = await axios.get(`/movie/${id}/videos?language=en-US`);
  return data;
};

const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);
  return data;
};

const getReview = async (id, page = 1) => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?language=en-US&page=${page}`,
  );
  return data;
};

export { getTrend, getSearch, getDetail, getIframe, getCast, getReview };
