const API_BASE_PATH = 'https://www.omdbapi.com/'

export default {
  api: {
    getMovieList: `${API_BASE_PATH}`,
    getMovieById (movieId) {
      return `${API_BASE_PATH}/${movieId}`
    },
    getMovieUsingId: `${API_BASE_PATH}`
  }
}
