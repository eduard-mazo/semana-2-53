<template>
  <div id="app">
    <header-page></header-page>
    <noticias></noticias>
    <div class="container w-1200px mt-3">
      <div class="card-deck">
          <team-card v-for="(item, index) of team" :key="index" v-bind:member="item"></team-card>
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
  data() {
    return{
      team: [
          {
              codigo: "1",
              nombre: "Raúl Esteban Enciso",
              descripcion: "Estudiante de septimo semestre de Ingeniería de Sistemas de la Uniremington. Interesado por la música, el microfutbol y la programación." ,
              rol: "Backend Developer",
              image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/116005253_10217723276288757_5876702974766690000_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=oIY2KuNT1FkAX8fUKdQ&_nc_ht=scontent.feoh1-1.fna&oh=d113241f68f273c993151c1d114a4c1e&oe=5FF3A865",
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
              image: "https://avatars0.githubusercontent.com/u/21210115?s=460&u=3a85f861fb2641f5b1c8c6a282138b6bbafee222&v=4",
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
              image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/15401150_583324451873526_8744490872600191281_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=9kcx_ccuerkAX-z0rwt&_nc_ht=scontent.feoh1-1.fna&oh=bed6f29c74379094d8cc6fb880f0f17a&oe=5FF44B66",
          },
      ],
    }
  }
}
</script>


