var app = new Vue({
 el: '#root',
 data:{
  film:[],
  serieTv:[],
  search: ''
 },

 methods:{
   movie: function () {
     if (this.searchFilm === '') {
       alert('Error 404: Inserire testo')
     }else {
       const self = this
       axios.get('https://api.themoviedb.org/3/search/movie?api_key=3cb3d116da9f170df8a3aa2687a762ed&language=it-IT&query=' + self.search).then(function(resp){
         self.film = resp.data.results
         console.log(self.film);
       })

       axios.get('https://api.themoviedb.org/3/search/tv?api_key=3cb3d116da9f170df8a3aa2687a762ed&language=it-IT&query=' + self.search).then(function(resp){
         self.serieTv = resp.data.results
         console.log(self.serieTv);

       })

     this.search= '';
   },

   starVote(vote) {
     return parseInt(vote / 2);
   },

 }
},
});
Vue.config.devtools = true
