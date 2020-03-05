<template>
  <div class="details">
    <div class="sidebar" v-if="!loadingmovieDetails">
      <a class="active" href="/">Go to Home Page</a>
    </div>
    <div v-if="loadingmovieDetails">
      <Loader :isFullScreen="true" />
    </div>
    <div class="row main-contents" v-if="!loadingmovieDetails">
      <div class="col-md-12">
        <div class="details__title">
          {{ getMovieDetail.Title }}
        </div>
        <div class="details__postar-image" v-if="getMovieDetail.Poster">
          <img :src="getMovieDetail.Poster" alt="logo" />
        </div>
        <div class="details__content">
          <span class="heading">Title </span>:
          <span class="text">{{getMovieDetail.Title}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Year </span>:
          <span class="text">{{getMovieDetail.Year}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Released </span>:
          <span class="text">{{getMovieDetail.Released}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Runtime </span>:
          <span class="text">{{getMovieDetail.Runtime}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Genre </span>:
          <span class="text">{{getMovieDetail.Genre}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Director </span>:
          <span class="text">{{getMovieDetail.Director}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Writer </span>:
          <span class="text">{{getMovieDetail.Writer}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Actors </span>:
          <span class="text">{{getMovieDetail.Actors}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Plot </span>:
          <span class="text">{{getMovieDetail.Plot}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Language </span>:
          <span class="text">{{getMovieDetail.Language}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Language </span>:
          <span class="text">{{getMovieDetail.Language}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Country </span>:
          <span class="text">{{getMovieDetail.Country}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Awards </span>:
          <span class="text">{{getMovieDetail.Awards}}</span>
        </div>
        <div class="details__content">
          <span class="heading">IMDB Rating </span>:
          <span class="text">{{getMovieDetail.imdbRating}}</span>
        </div>
        <div class="details__content">
          <span class="heading">IMDB Votes </span>:
          <span class="text">{{getMovieDetail.imdbVotes}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Type </span>:
          <span class="text">{{getMovieDetail.Type}}</span>
        </div>
        <div class="details__content">
          <span class="heading">DVD </span>:
          <span class="text">{{getMovieDetail.DVD}}</span>
        </div>
        <div class="details__content">
          <span class="heading">BoxOffice Collection </span>:
          <span class="text">{{getMovieDetail.BoxOffice}}</span>
        </div>
        <div class="details__content">
          <span class="heading">Production </span>:
          <span class="text">{{getMovieDetail.Production}}</span>
        </div>
        <div class="details__content">
          <span class="heading" style="font-size: 18px;">Ratings: </span>
        </div>
        <div class="details__content" v-for="item in getMovieDetail.Ratings" v-bind:key="item.Source">
          <span class="heading">{{item.Source}}: </span>
          <span class="text">{{item.Value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/movie-detail.js"></script>
<style lang="scss" scoped>
.details {
  .main-contents {
    max-width: 1080px;
    margin: 0 auto;
    float: none;
    padding-top: 60px;
  }

  &__title {
    margin-top: 30px;
    font-size: 34px;
    font-weight: bold;
    line-height: 1.8;
  }

  &__postar-image {
    width: 100%;
    height: 270px;
    overflow: hidden;
    margin: 30px 0;

    img {
      max-width: 100%;
      height: inherit;
    }
  }

  &__content {
    margin-top: 5px;
    text-align: left;

    .heading {
      font-size: 16px;
      font-weight: bold;
    }

    .text {
      margin-left: 8px;
    }

    /deep/ img {
      max-width: 100%;
    }
  }

  .sidebar {
    margin: 0;
    padding: 0;
    height: auto;
    background-color: #f1f1f1;
    position: fixed;
    width: 100%;
    overflow: auto;
    z-index: 20;
    text-align: left;
    display: flex;
  }

  .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }

  .sidebar a.active {
    background-color: #4caf50;
    color: white;
  }

  .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
  }

  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      /*position: relative;*/
    }
    .sidebar a {
      float: left;
    }
    div.content {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }

  .categories {
    margin-top: 30px;
    text-align: left;
    &__head {
      border-top: 5px solid grey;
      font-size: 20px;
      line-height: 1.8;
      font-weight: bold;
    }

    &__list {
      .item {
        border-left: 4px solid cornflowerblue;
        margin: 10px 0;
        padding: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .item:hover {
        color: #4caf50;
        transform: scale(1.1);
        background-color: #f1f1f1;
      }
    }
  }

  .tags {
    margin-top: 30px;
    text-align: left;

    &__head {
      border-top: 5px solid grey;
      font-size: 20px;
      line-height: 1.8;
      font-weight: bold;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;

      .tag-iem {
        width: auto;
        padding: 6px;
        font-size: 14px;
        background: cornflowerblue;
        border-radius: 4px;
        margin: 5px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .tag-iem:hover {
        color: #4caf50;
        transform: scale(1.1);
        background-color: #f1f1f1;
      }
    }
  }

  .related-posts {
    margin-top: 30px;
    text-align: left;
    &__head {
      border-top: 5px solid grey;
      font-size: 20px;
      line-height: 1.8;
      font-weight: bold;
    }

    &__list {
      .item {
        border-left: 4px solid cornflowerblue;
        margin: 10px 0;
        padding: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;

        &.error {
          border-left: 4px solid red;
        }
      }
      .item:hover {
        color: #4caf50;
        transform: scale(1.1);
        background-color: #f1f1f1;
      }
      .item.error:hover {
        border-left: 4px solid red;
        color: red;
      }
    }
  }
}
</style>
