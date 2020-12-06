<template>
        <div class="card bg-dark w-1200px">
            <img class="card-img-top" v-bind:src="member.image" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title text-white">{{ member.nombre }}</h4>
                <h6 class="card-title text-white">{{ member.rol }}</h6>
                <p class="card-text text-white">{{ member.codigo }} - {{ member.descripcion }}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Grupo 53 / Mision TIC 2022</small>
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
    h4 {
        font-size: 1rem;
    }
    h6 {
        font-size: 0.8rem;
    }
    .card-text {
        font-size: 0.7rem;
    }
    .card-body {
        padding: 0.5rem;
    }
</style>
