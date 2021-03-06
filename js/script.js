var app = new Vue({
 el: '#root',
 data:{
  filmAndSeries:[],
  search: '',
  flags:['en', 'it', 'de', 'fr', 'es', 'pt', 'zh', 'ja', 'ru'],
  active: false,
  deactivate: true
 },

 methods:{
   movie: function () {
     if (this.searchFilm === '') {
       alert('Error 404: Inserire testo')
     }else {
       const self = this
       axios.get('https://api.themoviedb.org/3/search/movie?api_key=3cb3d116da9f170df8a3aa2687a762ed&language=it-IT&query=' + self.search).then(function(resp){
         self.filmAndSeries = resp.data.results
       })

       axios.get('https://api.themoviedb.org/3/search/tv?api_key=3cb3d116da9f170df8a3aa2687a762ed&language=it-IT&query=' + self.search).then(function(resp){
         self.filmAndSeries = resp.data.results
         console.log(self.filmAndSeries);
       })
     }

     this.search= '';
   },


   starVote(vote) {
     return parseInt(vote / 2);
   },
   getPosterSrc(filmAndSeries){
     return `https://image.tmdb.org/t/p/w342${filmAndSeries.poster_path}`
   },

   mouseOver: function(){
     this.active = !this.active;
     this.deactivate = !this.deactivate;
   }

},
});
Vue.config.devtools = true
