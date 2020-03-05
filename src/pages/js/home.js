import { mapGetters } from 'vuex'
// eslint-disable-next-line no-unused-vars
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Loader from '@/components/Loader'

export default {
  name: 'home',
  data () {
    return {
      formatDistanceToNow,
      isLoadingmovies: false,
      movieList: []
    }
  },
  components: {
    Loader
  },
  created () {
    this.loadMovieList()
  },
  computed: {
    ...mapGetters('movieStore', ['getMovies'])
  },
  watch: {
    getMovies (newValue) {
      this.movieList = newValue.Search
    }
  },
  methods: {
    loadMovieList () {
      this.isLoadingmovies = true
      const parameters = {
        apikey: '9e2446c7',
        s: 'ALL',
        r: 'json'
        // y: '2019'
        // page: 1
      }

      this.$store.dispatch('movieStore/GET_MOVIES', {
        success: () => {
          this.isLoadingmovies = false
        },
        fail: () => {
          this.isLoadingmovies = false
        },
        params: parameters
      })
    },
    showMovieDetails (movie) {
      this.$router.push(`/details/${movie.imdbID}`)
    },
    getSearchData () {
      const parameters = {
        apikey: '9e2446c7'
      }
      if (this.$refs.contentType.value) {
        parameters.type = this.$refs.contentType.value
      }
      if (this.$refs.searchKey.value) {
        parameters.s = this.$refs.searchKey.value
      }
      this.$store.dispatch('movieStore/GET_MOVIES', {
        success: () => {
          this.isLoadingmovies = false
        },
        fail: () => {
          this.isLoadingmovies = false
        },
        params: parameters
      })
    },
    resetSearch () {
      this.isLoadingmovies = true
      if (this.$refs.contentType.value) {
        this.$refs.contentType.value = ''
      }
      if (this.$refs.searchKey.value) {
        this.$refs.searchKey.value = ''
      }
      this.loadMovieList()
    },
    addToFav (event, item) {
      event.stopPropagation()
      const data = JSON.parse(localStorage.getItem('favourites'))
      if (!data) {
        const obj = {
          [item.imdbID]: true
        }
        const toStoreData = JSON.stringify(obj)
        localStorage.setItem('favourites', toStoreData)
      } else {
        data[item.imdbID] = true
        const updatedObj = JSON.stringify(data)
        localStorage.setItem('favourites', updatedObj)
      }
      this.loadMovieList()
    },
    removeFromFav (event, item) {
      event.stopPropagation()
      const data = JSON.parse(localStorage.getItem('favourites'))
      data[item.imdbID] = false
      const updatedObj = JSON.stringify(data)
      localStorage.setItem('favourites', updatedObj)
      this.loadMovieList()
    },
    isAlreadyAdded (item) {
      const data = JSON.parse(localStorage.getItem('favourites'))
      return data && data[item.imdbID] === true
    },
    showFvrts () {
      const data = JSON.parse(localStorage.getItem('favourites'))
      const filtered = this.movieList.filter(el => data[el.imdbID] === true)
      console.log('Filter:', filtered)
      this.movieList = filtered
    }
  }
}
