<template>
  <div id="app">
    <header-page></header-page>
    <noticias></noticias>
    <div class="container container-fluid w-1200px">
        <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(item, index) of team" :key="index">
            <team-card class="mh-100" style="height: 700px; width:198px;" v-bind:member="item"></team-card>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue';
import Noticias from './components/noticias.vue';
import HeaderPage from "./components/header.vue";
export default {
  name: 'App',
  components: {
    TeamCard,
    Noticias,
    HeaderPage
  },
  data(){
    return{
      team: [
          {
              codigo: "1",
              nombre: "Raúl Esteban Enciso",
              descripcion: "Estudiante de septimo semestre de Ingeniería de Sistemas de la Uniremington. Interesado por la música, el microfutbol y la programación." ,
              rol: "Backend Developer",
              image: require("@/assets/Esteban.jpg"),
          },
          {
              codigo: "2",
              nombre: "Alvaro Julián Manrique Gomez",
              descripcion: "Estadístico egresado de la Universidad Nacional. Gran entusiasta de los videojuegos y el fútbol." ,
              rol: "Backend Developer ",
              image: require("@/assets/Julian.jpeg"),
          },
          {
              codigo: "3",
              nombre: "Eduard Alfonso Mazo Quintero",
              descripcion: "Ingeniero Electrónico egresado de la Universidad de Antioquia. Interesado por el cine, la programación, la tecnología digital y el microfutbol. " ,
              rol: "Product Owner",
              image: require("@/assets/Eduard.jpg"),
          },
          {
              codigo: "4",
              nombre: "Karen Suárez Luque",
              descripcion: "Egresada de la Universidad Ditrital. Interesada por el diseño web y las metodologías ágiles. Además de ser una gran entusiasta del ciclismo." ,
              rol: "Frontend Developer",
              image: require("@/assets/Karen.jpg"),
          },
          {
              codigo: "5",
              nombre: "Alejandro Valencia Alzate",
              descripcion: "Ingeniero Mecánico egresado de la Universidad de Antioquia. Interesado por el cine, la tecnología digital, la lectura de terror, las artes marciales y la cocina." ,
              rol: "Frontend Developer",
              image: require("@/assets/Alejandro.jpg"),
          },
      ],
    }
  }
}
</script>


