(function(t){function e(e){for(var a,n,c=e[0],r=e[1],l=e[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);v&&v(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var v=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0017":function(t,e,s){t.exports=s.p+"img/success.476fb656.svg"},"0990":function(t,e,s){},4073:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],n=(s("5c0b"),s("2877")),c={},r=Object(n["a"])(c,i,o,!1,null,null,null),l=r.exports,v=s("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home__header"},[t._m(0),s("div",{staticStyle:{float:"right",cursor:"pointer"},on:{click:t.showFvrts}},[t._v("Favourites")])]),t.isLoadingmovies?s("div",{staticClass:"loader"},[s("Loader",{attrs:{isFullScreen:!1}})],1):t._e(),t.isLoadingmovies?t._e():s("div",{staticClass:"home__filter-section row"},[s("div",{staticClass:"input-box col-sm-4 pl-0 pr-0"},[s("input",{ref:"searchKey",attrs:{type:"text"}})]),s("div",{staticClass:"dropdown col-sm-4 pl-0 pr-0"},[s("select",{ref:"contentType"},[s("option",{attrs:{value:""}},[t._v("All")]),s("option",{attrs:{value:"movie"}},[t._v("Movies")]),s("option",{attrs:{value:"series"}},[t._v("Series")]),s("option",{attrs:{value:"episode"}},[t._v("Episodes")])])]),s("div",{staticClass:"search-button col-sm-4 pl-0 pr-0"},[s("button",{on:{click:t.getSearchData}},[t._v("Search")]),s("button",{on:{click:t.resetSearch}},[t._v("Reset")])])]),t.getMovies.Error?s("div",{staticClass:"home__show-error"},[t._v(" Ooops... your search did not match any data. Please try to change keyword. ")]):t._e(),t.isLoadingmovies?t._e():s("div",{staticClass:"home__movie-content"},t._l(t.movieList,(function(e,a){return s("div",{key:a,staticClass:"thumb-list__item",on:{click:function(s){return t.showMovieDetails(e)}}},[s("div",{staticClass:"movie-img"},[s("img",{attrs:{src:e.Poster,alt:"logo"}})]),s("div",{staticClass:"movie-title"},[s("b",[t._v(t._s(e.Title))])]),s("div",{staticClass:"info"},[s("div",[t._v(t._s(e.Type))]),s("div",[t._v(t._s(e.Year))]),s("div",[t._v(t._s(e.Release))]),t.isAlreadyAdded(e)?s("div",{staticClass:"add-to-fav",on:{click:function(s){return t.removeFromFav(s,e)}}},[t._v("Remove from Favourite")]):s("div",{staticClass:"add-to-fav",on:{click:function(s){return t.addToFav(s,e)}}},[t._v("Add to Favourite")])])])})),0)])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{float:"left",cursor:"pointer"}},[s("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"/"}},[t._v("Home")])])}],p=(s("4de4"),s("ade3")),f=s("5530"),g=s("2f62"),m=s("ef1b"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"fullscreen-spinner":t.isFullScreen}},[a("img",{attrs:{id:"spinner",src:s("0017"),alt:"Loading..."}})])},C=[],b={name:"Loader",props:{height:{type:String,default:"30px"},width:{type:String,default:"30px"},isFullScreen:{type:Boolean,default:!1}}},y=b,D=(s("cf46"),Object(n["a"])(y,h,C,!1,null,"dbaced3a",null)),M=D.exports,S={name:"home",data:function(){return{formatDistanceToNow:m["a"],isLoadingmovies:!1,movieList:[]}},components:{Loader:M},created:function(){this.loadMovieList()},computed:Object(f["a"])({},Object(g["b"])("movieStore",["getMovies"])),watch:{getMovies:function(t){this.movieList=t.Search}},methods:{loadMovieList:function(){var t=this;this.isLoadingmovies=!0;var e={apikey:"9e2446c7",s:"ALL",r:"json"};this.$store.dispatch("movieStore/GET_MOVIES",{success:function(){t.isLoadingmovies=!1},fail:function(){t.isLoadingmovies=!1},params:e})},showMovieDetails:function(t){this.$router.push("/details/".concat(t.imdbID))},getSearchData:function(){var t=this,e={apikey:"9e2446c7"};this.$refs.contentType.value&&(e.type=this.$refs.contentType.value),this.$refs.searchKey.value&&(e.s=this.$refs.searchKey.value),this.$store.dispatch("movieStore/GET_MOVIES",{success:function(){t.isLoadingmovies=!1},fail:function(){t.isLoadingmovies=!1},params:e})},resetSearch:function(){this.isLoadingmovies=!0,this.$refs.contentType.value&&(this.$refs.contentType.value=""),this.$refs.searchKey.value&&(this.$refs.searchKey.value=""),this.loadMovieList()},addToFav:function(t,e){t.stopPropagation();var s=JSON.parse(localStorage.getItem("favourites"));if(s){s[e.imdbID]=!0;var a=JSON.stringify(s);localStorage.setItem("favourites",a)}else{var i=Object(p["a"])({},e.imdbID,!0),o=JSON.stringify(i);localStorage.setItem("favourites",o)}this.loadMovieList()},removeFromFav:function(t,e){t.stopPropagation();var s=JSON.parse(localStorage.getItem("favourites"));s[e.imdbID]=!1;var a=JSON.stringify(s);localStorage.setItem("favourites",a),this.loadMovieList()},isAlreadyAdded:function(t){var e=JSON.parse(localStorage.getItem("favourites"));return e&&!0===e[t.imdbID]},showFvrts:function(){var t=JSON.parse(localStorage.getItem("favourites")),e=this.movieList.filter((function(e){return!0===t[e.imdbID]}));console.log("Filter:",e),this.movieList=e}}},w=S,O=(s("83e3"),Object(n["a"])(w,u,_,!1,null,"23f10df2",null)),x=O.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[t.loadingmovieDetails?t._e():s("div",{staticClass:"sidebar"},[s("a",{staticClass:"active",attrs:{href:"/"}},[t._v("Go to Home Page")])]),t.loadingmovieDetails?s("div",[s("Loader",{attrs:{isFullScreen:!0}})],1):t._e(),t.loadingmovieDetails?t._e():s("div",{staticClass:"row main-contents"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"details__title"},[t._v(" "+t._s(t.getMovieDetail.Title)+" ")]),t.getMovieDetail.Poster?s("div",{staticClass:"details__postar-image"},[s("img",{attrs:{src:t.getMovieDetail.Poster,alt:"logo"}})]):t._e(),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Title ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Title))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Year ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Year))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Released ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Released))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Runtime ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Runtime))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Genre ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Genre))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Director ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Director))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Writer ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Writer))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Actors ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Actors))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Plot ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Plot))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Language ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Language))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Language ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Language))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Country ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Country))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Awards ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Awards))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("IMDB Rating ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.imdbRating))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("IMDB Votes ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.imdbVotes))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Type ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Type))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("DVD ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.DVD))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("BoxOffice Collection ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.BoxOffice))])]),s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v("Production ")]),t._v(": "),s("span",{staticClass:"text"},[t._v(t._s(t.getMovieDetail.Production))])]),t._m(0),t._l(t.getMovieDetail.Ratings,(function(e){return s("div",{key:e.Source,staticClass:"details__content"},[s("span",{staticClass:"heading"},[t._v(t._s(e.Source)+": ")]),s("span",{staticClass:"text"},[t._v(t._s(e.Value))])])}))],2)])])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details__content"},[s("span",{staticClass:"heading",staticStyle:{"font-size":"18px"}},[t._v("Ratings: ")])])}],j={name:"Details",data:function(){return{formatDistanceToNow:m["a"],loadingmovieDetails:!1}},components:{Loader:M},computed:Object(f["a"])({},Object(g["b"])("movieStore",["getMovieDetail"])),created:function(){var t=this;window.scrollTo(0,0),this.loadingmovieDetails=!0;var e={apikey:"9e2446c7",i:this.$route.params.movieId};this.$store.dispatch("movieStore/GET_MOVIE_BY_ID",{success:function(){t.loadingmovieDetails=!1},fail:function(){t.loadingmovieDetails=!1},params:e})},methods:{getPostsByMe:function(t,e){console.log("TYPE:",t),console.log("ITEM:",e),this.$router.push({path:"/",query:Object(p["a"])({},t,e.slug)})}}},T=j,E=(s("752b"),Object(n["a"])(T,I,L,!1,null,"557a5c6f",null)),k=E.exports;a["a"].use(d["a"]);var R=[{path:"/",name:"Home",component:x},{path:"/details/:movieId",name:"Detail",component:k},{path:"*",redirect:"/"}],P=new d["a"]({mode:"history",base:"/",routes:R}),$=P,F="http://www.omdbapi.com/",A={api:{getMovieList:"".concat(F),getMovieById:function(t){return"".concat(F,"/").concat(t)},getMovieUsingId:"".concat(F)}},B=s("bc3a"),N=s.n(B),V=(s("99af"),s("4160"),s("a15b"),s("d81d"),s("b64b"),s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("1276"),s("159b"),s("53ca")),G=function(t){return t?"?".concat(Object.keys(t).map((function(e){return"object"===Object(V["a"])(t[e])?t[e]&&t[e].map((function(t){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))})).join("&"):"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))})).join("&")):""},J={},q={makeGetRequest:function(t,e,s,a){J.Accept="application/json";var i=t+G(a);N.a.get(i,{withCredentials:!1,headers:J}).then(e).catch(s)},makePostRequest:function(t,e,s,a,i){var o=t+G(i);N.a.post(o,a,{withCredentials:!1}).then(e).catch(s)}},U={getAllMovies:function(t,e,s,a){q.makeGetRequest(A.api.getMovieList,t,e,a)},getMovieDetailById:function(t,e,s,a){q.makeGetRequest(A.api.getMovieUsingId,t,e,a)}},Y={handleErrors:function(t,e){var s=e.response?e.response.data:{};console.log("...err:",e),console.log("...ERR:",e.response),console.log("ERR OBJECT:",s)}},K={state:{movies:{},movieDetail:{}},getters:{getMovies:function(t){return t.movies},getMovieDetail:function(t){return t.movieDetail}},mutations:{setMovies:function(t,e){t.movies=e},setMovieDetail:function(t,e){t.movieDetail=e}},actions:{GET_MOVIES:function(t){var e=t.commit,s=t.dispatch,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.params,o=a.pathVariables,n=a.success,c=a.fail;U.getAllMovies((function(t){e("setMovies",t.data),n()}),(function(t){Y.handleErrors(s,t),c()}),o,i)},GET_MOVIE_BY_ID:function(t){var e=t.commit,s=t.dispatch,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.params,o=a.pathVariables,n=a.success,c=a.fail;U.getMovieDetailById((function(t){e("setMovieDetail",t.data),n()}),(function(t){Y.handleErrors(s,t),c()}),o,i)}},namespaced:!0};a["a"].use(g["a"]);var H=new g["a"].Store({modules:{movieStore:K}});s("2aeb");a["a"].config.productionTip=!1,new a["a"]({router:$,store:H,render:function(t){return t(l)}}).$mount("#app")},"56e5":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"752b":function(t,e,s){"use strict";var a=s("4073"),i=s.n(a);i.a},"83e3":function(t,e,s){"use strict";var a=s("0990"),i=s.n(a);i.a},"9c0c":function(t,e,s){},cf46:function(t,e,s){"use strict";var a=s("56e5"),i=s.n(a);i.a}});
//# sourceMappingURL=app.633e16ee.js.map