<template>   
    <div class=" container card text-white bg-dark mb-3 w-1200px">
        <img class="card-img-top mt-2" v-bind:src="member.image"  alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">{{ member.nombre }}</h4>
            <h6 class="card-title">{{ member.rol }}</h6>
            <p class="card-text">{{ member.codigo }} - {{ member.descripcion }}</p>
        </div>
        <div class="card-footer">
            <small class="text-white">Grupo 53 / Mision TIC 2022</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: {
            'member': Object
        }
    }
</script>

<style scoped>

</style>
