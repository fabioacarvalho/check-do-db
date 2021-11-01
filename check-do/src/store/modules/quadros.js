export default {

    state: {
        newTarget: false,
        qd1: [],
        qd2: [],
        qd3: [],
        qd4: [],
        tarefa: {
            nome: '',
            desc: '',
            valorSelecionado: '',
            qdSelecionado: '',
            status: false
        },
        status: [
            {qd: 1, classe: 'Decida Quando Fazer'},
            {qd: 2, classe: 'Faça Imediatamente'},
            {qd: 3, classe: 'Faça Mais Tarde'},
            {qd: 4, classe: 'Delegue Para Outra Pessoa'},
        ],
        qd: '',
        info: false,
    },

}