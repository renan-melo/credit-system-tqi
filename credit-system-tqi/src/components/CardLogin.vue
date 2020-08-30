<template>
<div class="container-fluid d-flex justify-content-center">

    <form class="form-box col-3 p-5 ">
        <img alt=" Vue logo" src="../assets/logo1.png" class="col-12">
        <div class="form-group">
            <label class="d-flex justify-content-first " for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label class="d-flex justify-content-first " for="exampleInputPassword1">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <div class=" row px-3 pb-4">
            <div class="col-6 d-flex justify-content-first p-0">
                <router-link to="/register">Cadastre-se</router-link>
            </div>
            <div class="col-6 form-group form-check d-flex justify-content-end p-0">
                <router-link to="/about">Esqueci a senha</router-link>

            </div>
        </div>

        <button type="submit" class="btn btn-primary btn-lg px-5">Login</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'CardLogin',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.form-box {
    background: white;
}
</style>
