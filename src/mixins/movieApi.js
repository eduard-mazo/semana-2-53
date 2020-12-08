export default {
    beforeMount() {
        this.getFilm();
    },
    data: () => ({
        movies: {}
    }),
    methods: {
        reload() {
            this.$forceUpdate();
            },
        getFilm() {
            this.titles.forEach(movie => {
                let urlOmbd = `http://www.omdbapi.com/?apikey=964334f2&t="${movie}"&type=movie`;
                let vueData = this.movies;
                fetch(urlOmbd, {method:"GET"})
                .then(res => res.json())
                .then(data => {
                    vueData[movie] = data;
                    console.log(vueData);
                    this.reload();
                });
            });
            
        }
    }
}