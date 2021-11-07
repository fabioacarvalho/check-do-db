let lista = [{idcategoria:1,situacao:1,idusuario:1,nometarefa:"Fazer Orçamento",descricao:"Teste de orçamente para piso laminado",dataconclusao:"2021-11-05T03:00:00.000Z"},{idcategoria:1,situacao:1,idusuario:1,nometarefa:"Ligar Fulano",descricao:"Ligar para Fuluno para definir obra",dataconclusao:"2021-11-05T03:00:00.000Z"},{idcategoria:1,situacao:0,idusuario:1,nometarefa:"Ligar Fulano",descricao:"Ligar para Fuluno para definir obra",dataconclusao:"2021-11-05T03:00:00.000Z"},{idcategoria:3,situacao:1,idusuario:2,nometarefa:"Ligar Ciclano",descricao:"Ligar para Ciclano para definir construcao de sobrado 550m²",dataconclusao:"2021-11-05T03:00:00.000Z"}]


let mapa = lista.map(v => {
    if (v.idcategoria == 1) {
        return v
    }
})

console.log(mapa)