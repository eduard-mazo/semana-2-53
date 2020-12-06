<template>
    <div class= "container mt-3">
        <!-- INICIO SECCION 3 "NEWS" -->
        <section id="news">
            <header class="section-title text-center container p-3 my-3 bg-dark text-white">
                <h2>NOTICIAS</h2>
            </header>
            <div class="container">

                <div class="main row mt-3  border">
                    <div id= "poster1" class = "col-sm-2"></div>

                    <div class = "col-sm-4">
                        <div id= "title1" class = "h3 text-uppercase"></div>
                        <div id= "year1" class = "h4"></div>
                        <div id= "actors1" class = "h4"></div>
                        <div class = "mt-3">
                            <a href="https://www.imdb.com" target="_blank" class="btn btn-secondary">Información</a>
                        
                        </div>
                    </div>

                    <div id= "poster2" class = "col-sm-2 "></div>

                    <div class = "col-sm-4">
                        <div id= "title2" class = "h3 text-uppercase"></div>
                        <div id= "year2" class = "h4"></div>
                        <div id= "actors2" class = "h4"></div>
                        <div class = "mt-3" >
                            <a href="https://www.imdb.com" target="_blank" class="btn btn-secondary">Información</a>
                        </div>
                    </div>
                    
                </div>

                <div class="main row mt-3  border">
                    <div id= "poster3" class = "col-sm-2"></div>

                    <div class = "col-sm-4 text-justify">
                        <div id= "title3" class = "h3 text-uppercase"></div>
                        <div id= "year3" class = "h4"></div>
                        <div id= "actors3" class = "h4"></div>
                        <div class = "mt-3">
                        <a href="https://www.imdb.com" target="_blank" class="btn btn-secondary">Información</a>
                        </div>
                    </div>

                    <div id= "poster4" class = "col-sm-2"></div>

                    <div class = "col-sm-4 text-justify">
                        <div id= "title4" class = "h3 text-uppercase"></div>
                        <div id= "year4" class = "h4"></div>
                        <div id= "actors4" class = "h4"></div>
                       <div class =  "mt-3">
                        <a href="https://www.imdb.com" target="_blank" class="btn btn-secondary">Información</a>
                    </div>
                    </div>
                    
                </div>
                
            </div>

        </section>
        <!-- INICIO SECCION 3 "NEWS" -->
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
