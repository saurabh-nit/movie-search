<template>
  <div class="home">
    <div class="home__header">
      <div style="float: left; cursor: pointer;"><a href="/" style="text-decoration: none;">Home</a></div>
      <div style="float: right; cursor: pointer;" @click="showFvrts">Favourites</div>
    </div>
    <div v-if="isLoadingmovies" class="loader">
      <Loader :isFullScreen="false" />
    </div>
    <div class="home__filter-section row" v-if="!isLoadingmovies">
      <div class="input-box col-sm-4 pl-0 pr-0">
        <input type="text" ref="searchKey">
      </div>
      <div class="dropdown col-sm-4 pl-0 pr-0">
        <select ref="contentType">
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      <div class="search-button col-sm-4 pl-0 pr-0">
        <button @click="getSearchData">Search</button>
        <button @click="resetSearch">Reset</button>
      </div>
    </div>
    <div class="home__show-error" v-if="getMovies.Error">
      Ooops... your search did not match any data. Please try to change keyword.
    </div>
    <div v-if="!isLoadingmovies" class="home__movie-content">
      <div
        v-for="(item, index) in movieList"
        v-bind:key="index"
        class="thumb-list__item"
        @click="showMovieDetails(item)"
      >
        <div class="movie-img">
          <img :src="item.Poster" alt="logo" />
        </div>
        <div class="movie-title">
          <b>{{ item.Title }}</b>
        </div>
        <div class="info">
            <div>{{item.Type}}</div>
            <div>{{item.Year}}</div>
            <div>{{item.Release}}</div>
            <div class="add-to-fav" v-if="!isAlreadyAdded(item)" @click="(event) => addToFav(event, item)">Add to Favourite</div>
            <div class="add-to-fav" v-else @click="(event) => removeFromFav(event, item)">Remove from Favourite</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss" scoped>
.home {
  .loader {
    margin-top: calc(50vh - 100px);
  }

  &__header {
    height: 56px;
    line-height: 56px;
    padding: 0 16px;
    font-weight: bold;
    user-select: none;
  }

  &__show-error {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
  }

  &__filter-section {
    display: inline-flex;
    border: 1px solid lightgray;
    padding: 10px 0;
    width: 100%;

    .input-box {
      input {
        padding: 10px;
        color: #555555;
        font-weight: bold;
        border: 1px solid lightgray;
        font-size: 17px;
        max-width: 100%
      }
    }

    .dropdown {
      border: 1px solid lightgray;
      padding: 10px;
      select {
        padding: 10px 12px;
        font-size: 16px;
        font-weight: bold;
      }
      select:focus {
        outline-offset: 0;
        border: none;
      }
    }

    .search-button {
      button {
        background-color: #42b983;
        color: white;
        font-weight: bold;
        border: none;
        height: inherit;
        padding: 12px 20px;
        font-size: 16px;
        border-width: 0;
        margin-left: 10px;
      }
    }
  }

  &__movie-content {
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    /deep/ img {
      width: 100%;
    }

    .thumb-list {
      height: 100vh;
      overflow-y: scroll;
      text-align: left;
      padding: 10px;
      &__item {
        border: 1px solid gainsboro;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
        max-width: 300px;
        transition: all 0.4s ease-in-out;
        transform: scale(1);
        min-height: 300px;
        overflow: hidden;

        .movie-img {
          width: 100%;
          height: 150px;
          overflow: hidden;
        }

        .movie-img img {
          transition: transform 0.5s ease;
          height: inherit;
        }

        .movie-img:hover img {
          transform: scale(1.2);
        }

        .movie-title {
          text-align: left;
          padding: 5px 0;
        }

        .info {
          text-align: left;

          .add-to-fav {
            padding: 5px 10px;
            background-color: cornflowerblue;
            font-weight: bold;
            width: fit-content;
            color: white;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
