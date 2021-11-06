<template>
    <!-- ADD NOVA TAREFA -->

    <section id="nova-tarefa" class="container col-6 anamation">

        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Nome Tarefa:</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Escreva o nome da sua tarefa" v-model='target.nometarefa'>
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label" >Descrição:</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Alguma descrição..." v-model="target.descricao">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Classifique sua tarefa:</label>
            <select class="form-select" aria-label="Default select example" v-model="target.idcategoria">
                <option v-for="dado in category" :value="dado.idcategoria" :key="dado.idcategoria">{{ dado.nomecategoria }}</option>
            </select>
        </div>
        <button class="btn btn-success" :disabled="target.nometarefa == '' || target.descricao == '' || target.idcategoria == ''">Adicionar</button>
        <router-link to="/" @click="reset"><button class="btn btn-danger">Cancelar</button></router-link>

    </section>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'NewTarget',
    data() {
        return {
            category: [],
            target: {},
            info: false
        }
    },
    methods: {
        reset() {
            this.target = {}
        },
        adicionarNovaTarefa() {

           /*  let datenow = new Date.now()
            let dateconc = datenow + 5 */
                        
            /* const order = {
                nometarefa: this.target.nometarefa,
                descricao: this.target.descricao,
                situacao: this.target.situacao,
                idcategoria: this.target.idcategoria,
                idusuario: 2,
                dataconclusao: dateconc
            } */

            this.info = true

        },        
        getCategory() {
            const url = `${baseApiUrl}/category`
            axios.get(url).then(res => {
                this.category = res.data
            })
        }
    },
    mounted() {
        this.getCategory()
    }

}
</script>

<style>
    #nova-tarefa {
        border: 1px solid var(--cor1);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px #4462da62;
        margin-bottom: 20px;
    }

    @media (max-width: 600px) {
    #name {
        display: none;
    }

    #nova-tarefa {
        min-width: 330px;
    }

}

</style>