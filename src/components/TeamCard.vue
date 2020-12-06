<template>   
    <div class="card text-white bg-info mb-3" style="width:100%">
        <img class="card-img-top" v-bind:src="member.image"  alt="Card image" style="width:100%">
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
