<template>
    <b-container fluid>
        <b-row class="my-2">
            <b-col sm="2">
                <label for="input-default">Nome:</label>
            </b-col>
            <b-col sm="8">
                <b-form-input  placeholder="Insira seu nome" v-model="user.nomeusuario"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="2">
                <label for="input-default">E-mail:</label>
            </b-col>
            <b-col sm="8">
                <b-form-input type="email"  placeholder="Insira seu e-mail" v-model="user.email"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="2">
                <label for="input-default">Senha:</label>
            </b-col>
            <b-col sm="8">
                <b-form-input type="password"  placeholder="Insira seu senha" v-model="user.senha"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="2">
                <label for="input-default">Confirme a senha:</label>
            </b-col>
            <b-col sm="8">
                <b-form-input  type="password"  placeholder="Confirme sua senha" v-model="user.confirmeSenha"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="my-2">
            <b-col sm="2">
                <span>
                <b-form-checkbox id="user-admin"
                    v-model="user.admin" class="mt-3 mb-3 ma-3"><span> Administrador</span>
                </b-form-checkbox>
                </span>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="my-2 mx-2">
                <button class="btn btn-primary mx-2 justify-start"  @click="save">Salvar</button>
                <button class="btn btn-danger" @click="reset">Cancelar</button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'User',
    data() {
        return {
            user: {}
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`

            axios.get(url).then(res => {
                this.users = res.data
            })
        },
        reset() {
            this.user = {}
            this.loadUsers()
        },
        save() {

            axios.post(`${baseApiUrl}/users`, this.user)
                .then(() => {
                    alert('Usuarios inseridos com sucesso!')
                    this.reset()
                })
                .catch(err => alert('Houve um erro: ' + err))
                

        }
    }
}
</script>

<style>

</style>