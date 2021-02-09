// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film.
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// 1.	Titolo
// 2.	Titolo Originale
// 3.	Lingua
// 4.	Voto


var app = new Vue({
 el: '#root',
 data:{
  film:[],
  searchFilm: ''
 },
 mounted() {
   const self = this;
   let resultFilm = axios.get('https://api.themoviedb.org/3/search/movie?api_key=3cb3d116da9f170df8a3aa2687a762ed&language=it-IT&query=' + self.searchFilm)

 },
 methods:{
   movie: function () {
     if (this.searchFilm === '') {
       alert('Error 404: Inserire testo')
     }else {
       this.film.push(this.searchFilm);

     }
     console.log(this.resultFilm);
     this.searchFilm= '';
   },
 }
});
Vue.config.devtools = true
