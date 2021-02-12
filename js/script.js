var app = new Vue({
 el: '#root',
 data:{
  // film:[],
  // serieTv:[],
  filmAndSeries:[],
  search: '',
  flags:['en', 'it', 'de', 'fr', 'es', 'pt', 'zh']
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

   // print: function(){
   //   let resultSearch = [...this.film,...this.serieTv]
   //   this.filmAndSeries.push(resultSearch)
   //   console.log(this.filmAndSeries);

   // },

   starVote(vote) {
     return parseInt(vote / 2);
   },

},
});
Vue.config.devtools = true
