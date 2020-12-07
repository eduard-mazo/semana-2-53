<template>
  <div class="container w-1200px">
    <header class="position-sticky" id="inicio">
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <img width="30" height="30"  src="../assets/logo.png" alt="Sprint 2">
            <a class="navbar-brand" href="#inicio"> Sprint 2</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#news">Noticias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#team">Equipo</a>
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
        <div class="carousel-item active">
          <img src="../assets/banner1.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div id= "titleh1" class = "h3 bg-light text-dark text-uppercase"></div>
            <div id= "yearh1" class = "h4 bg-light text-dark"></div>
            <div id= "actorsh1" class = "h4 bg-light text-dark"></div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/banner2.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div id= "titleh2" class = "h3 bg-light text-dark text-uppercase" ></div>
            <div id= "yearh2" class = "h4 bg-light text-dark"></div>
            <div id= "actorsh2" class = "h4 bg-light text-dark"></div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/banner3.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div id= "titleh3" class = "h3 bg-light text-dark text-uppercase "></div>
            <div id= "yearh3" class = "h4 bg-light text-dark"></div>
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
    export default {
        name: "Header",
        props: ['member']
    }
</script>

<style scoped>

</style>
