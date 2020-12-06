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
              image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/116005253_10217723276288757_5876702974766690000_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=oIY2KuNT1FkAX8fUKdQ&_nc_ht=scontent.feoh1-1.fna&oh=d113241f68f273c993151c1d114a4c1e&oe=5FF3A865",
          },
          {
              codigo: "2",
              nombre: "Alvaro Julián Manrique Gomez",
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan. Mauris condimentum ac elit et accumsan." ,
              rol: "Backend Developer ",
              image: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
          },
          {
              codigo: "3",
              nombre: "Eduard Alfonso Mazo Quintero",
              descripcion: "Ingeniero Electrónico egresado de la Universidad de Antioquia. Interesado por el cine, la programación, la tecnología digital y el microfutbol. " ,
              rol: "Product Owner",
              image: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
          },
          {
              codigo: "4",
              nombre: "Karen Suárez Luque",
              descripcion: "Egresada de la Universidad Ditrital. Interesada por el diseño web y las metodologías ágiles. Además de ser una gran entusiasta del ciclismo." ,
              rol: "Frontend Developer",
              image: "https://www.w3schools.com/bootstrap4/img_avatar5.png",
          },
          {
              codigo: "5",
              nombre: "Alejandro Valencia Alzate",
              descripcion: "Ingeniero Mecánico egresado de la Universidad de Antioquia. Interesado por el cine, la tecnología digital, la lectura de terror, las artes marciales y la cocina." ,
              rol: "Frontend Developer",
              image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/15401150_583324451873526_8744490872600191281_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=TeGvfdz0FQsAX8UyhXv&_nc_ht=scontent.feoh1-1.fna&oh=2bb77259d549eb5960cb900c751d32ef&oe=5FF056E6",
          },
      ],
    }
  }
}
</script>


