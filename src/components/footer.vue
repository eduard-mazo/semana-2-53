<template>
    <footer class="container w-1200px mt-3">
            <div class="card-container">
                <div class="cardf bg-dark text-white">
                    <h2>DESCRIPCION</h2>
                    <p class="flexible">Esta página Web se crea con el objetivo de aplicar los conocimientos adquiridos durante la semana 1 del ciclo 3 del curso de programación dictado por la UPT como operador del Ministerio TIC Colombia. Este es un primer acercamiento con la programación web formarnos como programadores y en futuro aplicar los conocimientos adquiridor al campo laboral y productivo. </p>
                    <h3>Enlace al repositorio de github</h3>
                    <p><a href="https://github.com/eduard-mazo/semana-1-53.git">Visita nuestro Repositorio en gitHub</a></p>
                </div>
                <div class="cardf bg-dark text-white">
                    <h2>DATOS DE CONTACTO</h2>
                        <ul>
                            <li>PRODUCT OWNER:
                                <ul>
                                    <li>Eduard Mazo</li>
                                    <li>Contacto: eduard.mazo@gmail.com</li>
                                </ul>
                            </li>
                            <li>SCRUM MASTER:
                                <ul>
                                    <li>Alejandro Valencia</li>
                                    <li>Contacto: alejandrovalencialzate@hotmail.com</li>
                                </ul>
                            </li>
                            <li>DEVELOPMENT TEAM:
                                <ul>
                                    <li>Karen Suárez</li>
                                    <li>Contacto: karenjulieth08@hotmail.com</li>
                                    <li>Esteban Encizo</li>
                                    <li>Contacto: estebanbenitez1996@gmail.com</li>
                                    <li>Júlian Manrique</li>
                                    <li>Contacto: ajmanriqueg@unal.edu.co</li>
                                </ul>
                            </li>
                        </ul>
                </div>
            </div>
        </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.card-container {
    display: flex;
    flex-flow: row nowrap;
}

.cardf {
    padding: 15px;
    flex: 1 1 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
}
</style>
