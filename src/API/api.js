const axios = require('axios');

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '78f2432cb0b978404715fbeff43c36be';

axios.defaults.params = {
  api_key: apiKey,
};

const fetchTrend = async (page = 1) => {
  const { data } = await axios.get(`/trending/all/day?page=${page}`);
  return data;
};

const fetchSearch = async (search, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?language=en-US&page=${page}&include_adult=false&query=${search}`,
  );
  return data;
};

const fetchDetail = async id => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`);
  return data;
};

const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);
  return data;
};

const fetchReview = async (id, page = 1) => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?language=en-US&page=${page}`,
  );
  return data;
};

export { fetchTrend, fetchSearch, fetchDetail, fetchCast, fetchReview };
