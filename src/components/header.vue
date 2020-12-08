<template>
  <div class="container w-1200px">
    <header class="position-sticky" id="inicio">
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <img width="30" height="30"  src="../assets/logo.png" alt="Sprint 2">
            <a class="navbar-brand" href="#inicio"> Sprint 2</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#noticias">Noticias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#equipo">Equipo</a>
                  </li>
                </ul>
              </div> 
        </nav>
    </header>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(movie, key, index) in movies" :key="movie.imdbID" :class="['carousel-item', (index === 0 ? 'active' : '')]">
          <img v-bind:src="require(`../assets/banner${index + 1}.png`)" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div class="h3 text-dark text-uppercase">{{movie.Title}}</div>
            <div class="h4 text-dark">{{movie.Year}}</div>
            <div class="h4 text-dark">{{movie.Released}}</div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>
</template>

<script>
import movieApi from "../mixins/movieApi";
export default {
    data: () => ({
      titles: ["up", "fast", "harry","her"]
    }),
    name: "Header",
    props: ['member'],
    mixins: [movieApi]
}
</script>

<style scoped>

</style>
