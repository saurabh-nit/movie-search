import api from '@/api/movie-apis'
import errorHandler from '@/api/apiUtils/error-handler'

export default {
  state: {
    movies: {},
    movieDetail: {}
  },
  getters: {
    getMovies (state) {
      return state.movies
    },
    getMovieDetail (state) {
      return state.movieDetail
    }
  },
  mutations: {
    setMovies (state, value) {
      state.movies = value
    },
    setMovieDetail (state, value) {
      state.movieDetail = value
    }
  },
  actions: {
    GET_MOVIES (
      { commit, dispatch },
      { params, pathVariables, success, fail } = {}
    ) {
      api.getAllMovies(
        response => {
          commit('setMovies', response.data)
          success()
        },
        error => {
          errorHandler.handleErrors(dispatch, error)
          fail()
        },
        pathVariables,
        params
      )
    },
    GET_MOVIE_BY_ID (
      { commit, dispatch },
      { params, pathVariables, success, fail } = {}
    ) {
      api.getMovieDetailById(
        response => {
          commit('setMovieDetail', response.data)
          success()
        },
        error => {
          errorHandler.handleErrors(dispatch, error)
          fail()
        },
        pathVariables,
        params
      )
    }
  },
  namespaced: true
}
