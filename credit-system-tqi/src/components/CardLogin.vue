<template>
<div class="container-fluid d-flex justify-content-center p-0">

    <form class="form-box col col-sm-8  col-md-5 col-lg-3 p-5 rounded" @submit.prevent="logar()">
        <img alt=" Vue logo" src="../assets/logo1.png" class="col-12">
        <div class="form-group">
            <label class="d-flex justify-content-first ">Email User</label>
            <input type="email" class="form-control" v-model="email" required>
        </div>
        <div class="form-group">
            <label class="d-flex justify-content-first ">Password</label>
            <input type="password" class="form-control" v-model="senha" required>
        </div>
        <div class="form-group">
            <span class="text-danger"> {{mensagem}}</span>
        </div>

        <div class=" row px-3 pb-4">
            <div class="col-6 d-flex justify-content-first p-0">
                <router-link to="/register">Cadastre-se</router-link>
            </div>

        </div>

        <button type="submit" class="btn btn-primary btn-lg px-5">Login</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'CardLogin',
    data() {
        return {
            email: '',
            senha: '',
            mensagem: ''
        }
    },
    methods: {
        logar() {
            let id = null
            const users = JSON.parse(localStorage.getItem('users'));
            const usersArray = Object.keys(users)
            let proposta = null
            usersArray.forEach(element => {
                const user = users[element]
                if (user.email === this.email && String(user.senha) === String(this.senha)) {
                    id = element
                    proposta = user.hasOwnProperty("emprestimo")
                }
            });

            if (id) {
                if (proposta) {
                    this.$router.push({
                        path: `/accompany/${id}`
                    })
                } else {
                    this.$router.push({
                        path: `/proposal/${id}`
                    })
                }
            } else {
                this.mensagem = "Email ou senha inválidos."
            }
        }
    }
}
</script>

<style lang="css" scoped>
.form-box {
    background: white;
}
</style>
