const API_KEY = process.env.REACT_APP_API_KEY;

const urls = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&with_genres=`,
  tv: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=`,
  movie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`,
  genres: {
    movie: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
    tv: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`,
  },
  search: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
};

export default urls;
