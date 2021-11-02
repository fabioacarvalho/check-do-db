<template>
    <div class="container">
        <User />
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import User from './User.vue'

export default {
    name: 'Register',
    components: { User },
    data() {
      return {
         mode: 'save',
            user: {},
            users: [],
            fields: [
                { key: 'idusuario', label: 'Código', sortable: true },
                { key: 'nomeusuario', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'administrador', label: 'Administrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não' },
                { key: 'actions', label: 'Ações' }
            ]
      }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`

            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {
        this.loadUsers()
    }
}
</script>

<style>

</style>