const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
    //requestMovieGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
    requestMovieGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,

    requestMoviePopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestMovieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestMovieTrending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
    requestMovieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestMovieLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,

    requestTvGenre: `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`,

    requestTvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTvLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,

    requestOnAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
    requestAirToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
  };

  export default requests

//requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,