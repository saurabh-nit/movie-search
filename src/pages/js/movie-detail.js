import { mapGetters } from 'vuex'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Loader from '@/components/Loader'

export default {
  name: 'Details',
  data () {
    return {
      formatDistanceToNow,
      loadingmovieDetails: false
    }
  },
  components: {
    Loader
  },
  computed: {
    ...mapGetters('movieStore', ['getMovieDetail'])
  },
  created () {
    window.scrollTo(0, 0)
    this.loadingmovieDetails = true
    const parameters = {
      apikey: '9e2446c7',
      i: this.$route.params.movieId
    }
    this.$store.dispatch('movieStore/GET_MOVIE_BY_ID', {
      success: () => {
        this.loadingmovieDetails = false
      },
      fail: () => {
        this.loadingmovieDetails = false
      },
      params: parameters
    })
  },
  methods: {
    getPostsByMe (type, item) {
      console.log('TYPE:', type)
      console.log('ITEM:', item)
      this.$router.push({ path: '/', query: { [type]: item.slug } })
    }
  }
}
