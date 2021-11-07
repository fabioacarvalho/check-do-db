<template>
    <div>

        <section id="painel">
                <router-link class="router-link" to="/newtarget"><button class="btn btn-primary">Nova Tarefa</button></router-link>
            </section>
            <!-- INFO -->
            <section id="alertInform" class="container anamation2">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </symbol>
                </svg>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                    Tarefa Adicionada <strong>com Sucesso!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
        </section>
        <main class="container anamation3">
                <div class="row row-cols-2 ">
                    <section id="qd1" class="col-6 quadros">
                        <span>
                            <h5>+ IMPORTANTE - URGENTE</h5>
                            <span>DECIDA QUANDO FAZER</span>
                        </span>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card" v-for="target in targets" :key="target.idtarefa" >
                                    <div class="card-body">
                                    <h5 class="card-title"> {{ target.nometarefa }} </h5>
                                    <p class="card-text">{{ target.descricao }}</p>
                                    <p class="card-text">{{ target.idcategoria }}</p>
                                    <button  class="btn btn-success">Feito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="qd2" class="col-6 quadros">
                        <span>
                            <h5>+ IMPORTANTE + URGENTE</h5>
                            <span>FAÇA IMEDIATAMENTE</span>
                        </span>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title">TITULO</h5>
                                    <p class="card-text">DESCRIÇÃO</p>
                                    <button  class="btn btn-success">Feito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </section>
                    <section id="qd3" class="col-6 quadros">
                        <span>
                            <h5>- IMPORTANTE - URGENTE</h5>
                            <span>FAÇA MAIS TARDE</span>
                        </span>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card" >
                                    <div class="card-body">
                                    <h5 class="card-title">TITULO</h5>
                                    <p class="card-text">DECRICAO</p>
                                    <button  class="btn btn-success">Feito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </section>
                    <section id="qd4" class="col-6 quadros">
                        <span>
                            <h5>- IMPORTANTE + URGENTE</h5>
                            <span>DELEGUE PARA OUTRA PESSOA</span>
                        </span>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title">TITULO</h5>
                                    <p class="card-text">DECRICAO</p>
                                    <button  class="btn btn-success">Feito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </section>
                </div>
            </main>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Quadros',
    data() {
        return {
            objeto: [],
            targets: [],
            qd1: [],
            qd3: []

        }
    },
    methods: {
        loadTarget() {
            const url = `${baseApiUrl}/target`
            axios.get(url).then(res => {
                this.targets = res.data
            })
        },       
        
    },
    
    mounted() {
        this.loadTarget()

    }

}
</script>

<style>
    #painel {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    
    .quadros {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
        min-height: 30vh;
    }

    #qd1 {
        border-right: 2px solid var(--cor1);
        border-bottom: 2px solid var(--cor1);

    }
    #qd2 {
        border-left: 2px solid var(--cor1);
        border-bottom: 2px solid var(--cor1);
    }
    #qd3 {
        border-right: 2px solid var(--cor1);
        border-top: 2px solid var(--cor1);

    }
    #qd4 {
        border-left: 2px solid var(--cor1);
        border-top: 2px solid var(--cor1);

    }

    .router-link {
        text-decoration: none;
        color: white;
    }

    .router-link:hover {
        color: white;
    }


</style>