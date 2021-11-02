<template>
    <!-- ADD NOVA TAREFA -->

        <section v-if="newTarget" id="nova-tarefa" class="container col-6 anamation">

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nome Tarefa:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Escreva o nome da sua tarefa" v-model='tarefa.nome'>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label" >Descrição:</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Alguma descrição..." v-model="tarefa.desc">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Classifique sua tarefa:</label>
                <select class="form-select" aria-label="Default select example" v-model="tarefa.valorSelecionado">
                    <option >OPÇÕES</option>
                </select>
            </div>
            <button @click="adicionarNovaTarefa" class="btn btn-success" :disabled="tarefa.nome == '' || tarefa.desc == '' || tarefa.valorSelecionado == ''">Adicionar</button>
            <button @click="newTarget = false" class="btn btn-danger">Cancelar</button>

        </section>
</template>

<script>
export default {
    name: 'NewTarget',
    methods: {
        adicionarNovaTarefa() {
            
            let item = this.status.filter(v => {
                if(v.classe == this.tarefa.valorSelecionado) {
                    this.qdSelecionado = v.qd
                }
            })
            
            const order = {
                target: this.tarefa.nome,
                descricao: this.tarefa.desc,
                status: this.tarefa.status,
                local: this.tarefa.valorSelecionado,
                nqd: this.qdSelecionado
            }

            if(this.qdSelecionado == 1) {
                this.qd1.push(order)
            } else if (this.qdSelecionado == 2) {
                this.qd2.push(order)
            } else if (this.qdSelecionado == 3) {
                this.qd3.push(order)
            } else if (this.qdSelecionado == 4) {
                this.qd4.push(order)
            }

            this.newTarget = false
            this.info = true

            this.tarefa.nome = ''
            this.tarefa.desc = ''
            this.tarefa.valorSelecionado = ''

        },
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