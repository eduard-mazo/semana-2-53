<template>
    <div id="noticias" class= "container mt-3">
        <section id="news">
            <header class="section-title text-center container p-3 my-3 bg-dark text-white">
                <h2>NOTICIAS</h2>
            </header>
            <div class="container">
                <div class="row mt-3">
                    <div v-for="movie in movies" :key="movie.imdbID" class="col-sm-6">
                        <div class="card flex-row">
                            <div class="card-header col-sm-4">
                                <img v-bind:src="movie.Poster" alt="" width="150" height="225" >
                            </div>
                            <div class="card-body col-sm-8">
                                <h4 class="card-title">{{movie.Title}}</h4>
                                <p class="card-text">{{movie.Plot}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import movieApi from "../mixins/movieApi";
export default {
    name: "Noticias",
    beforeMount() {
        this.getFilm();
    },
    data: () => ({
        movies: {},
        titles: ["up", "fast", "harry","her"]
    }),
    methods: {
    },
    mixins: [movieApi]
}
</script>

<style scoped>

</style>
