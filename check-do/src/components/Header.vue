<template>
  <nav class="navbar ">
            <h1>Check - Do <span id="versao">v.1</span></h1> 
            <section id="infos-links">
                <span>
                    <span id="name"  class="pa-1 justify-end"> Developed by <strong>Fábio Carvalho</strong></span>
                    <a class="pa-1" target="_blank" href="https://github.com/fabioacarvalho">
                      <img height="40" src="https://www.vectorlogo.zone/logos/github/github-tile.svg" data-canonical-src="https://img.shields.io/badge/github-%23100000.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white&amp;link=mailto:https://github.com/fabioacarvalho" style="max-width:100%;">
                    </a>
                    <a class="pa-1" target="_blank" href="https://www.linkedin.com/in/fabio-carvalho-881026142/" rel="nofollow">
                      <img height="40" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white&amp;link=mailto:https://www.linkedin.com/in/fabio-carvalho-881026142/" style="max-width:100%;">
                    </a>
                </span>
                
            </section>
        </nav>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kaushan+Script&family=Maven+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Londrina+Solid:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@500&family=Inter:wght@100;200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    :root {
        --cor1: #4462da;
        --cor2: #e8e8e8;


        --fonte-padrao: 'Maven Pro', sans-serif;
        --fonte-padrao1: 'Inter', sans-serif;
        --fonte-titulo: 'Bebas Neue', cursive;
        --fonte-logo2: 'Kaushan Script', cursive;
        --fonte-logo: 'Lobster', cursive;
        --fonte-destaque: 'Anton', sans-serif;
        --fonte-destaque2: 'Londrina Solid', cursive;
    }

    nav {
        padding: 20px;
        color: white;
        background-color: var(--cor1);
        font-family: var(--fonte-logo);
        margin-bottom: 20px;
    }

    #versao {
        font-family: var(--fonte-padrao1);
        font-size: 0.7rem;
    }

    #infos-links {
        font-family: var(--fonte-padrao1);
    }


    @media (max-width: 600px) {
        #name {
            display: none;
        }
    }

</style>