import apiUrls from './api-paths'
import apiCall from './apiUtils/make-api-calls'

export default {
  getAllMovies (callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getMovieList, callback, fail, params)
  },
  getMovieDetailById (callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(
      apiUrls.api.getMovieUsingId,
      callback,
      fail,
      params
    )
  }
}
