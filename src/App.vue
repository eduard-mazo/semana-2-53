<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(item, index) of team" :key="index">
            <team-card v-bind:member="item"></team-card>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue'
export default {
  name: 'App',
  components: {
    TeamCard
  },
  data(){
    return{
      team: [
          {
              codigo: "1",
              nombre: "Raúl Esteban Enciso",
              descripcion: "Estudiante de septimo semestre de Ingeniería de Sistemas de la Uniremington. Interesado por la música, el microfutbol y la programación." ,
              rol: "Backend Developer",
              imagen: "https://placeimg.com/192/192/people",
          },
          {
              codigo: "2",
              nombre: "Alvaro Julián Manrique Gomez",
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan. Mauris condimentum ac elit et accumsan." ,
              rol: "Backend Developer ",
              imagen: "https://placeimg.com/192/192/people",
          },
          {
              codigo: "3",
              nombre: "Eduard Alfonso Mazo Quintero",
              descripcion: "Ingeniero Electrónico egresado de la Universidad de Antioquia. Interesado por el cine, la programación, la tecnología digital y el microfutbol. " ,
              rol: "Product Owner",
              imagen: "https://placeimg.com/192/192/people",
          },
          {
              codigo: "4",
              nombre: "Karen Suárez Luque",
              descripcion: "Egresada de la Universidad Ditrital. Interesada por el diseño web y las metodologías ágiles. Además de ser una gran entusiasta del ciclismo." ,
              rol: "Frontend Developer",
              imagen: "https://placeimg.com/192/192/people",
          },
          {
              codigo: "5",
              nombre: "Alejandro Valencia Alzate",
              descripcion: "Ingeniero Mecánico egresado de la Universidad de Antioquia. Interesado por el cine, la tecnología digital, la lectura de terror, las artes marciales y la cocina." ,
              rol: "Frontend Developer",
              imagen: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/15401150_583324451873526_8744490872600191281_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=TeGvfdz0FQsAX8UyhXv&_nc_ht=scontent.feoh1-1.fna&oh=2bb77259d549eb5960cb900c751d32ef&oe=5FF056E6",
          },
      ],
    }
  }
}
</script>


