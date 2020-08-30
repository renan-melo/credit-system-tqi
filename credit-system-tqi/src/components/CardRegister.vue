<template>
<div class="container-fluid d-flex justify-content-center">

    <form class="form-box col-5 p-3">
        <h1 class="pb-2">CADASTRO</h1>
        <div class="border-top  p-3 pb-2">
            <h5 class="pb-4 text-uppercase ">Dados Pessoais</h5>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="d-flex justify-content-first" for=" inputAddress">Nome:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Ex:Bernardo antonio">
                </div>
                <div class="form-group col-md-6">
                    <label class="d-flex justify-content-first" for=" inputPassword4">CPF:</label>
                    <input type="text" placeholder="Ex:123.456.789.12" minlength="11" maxlength="11" class="form-control" onkeypress="$(this).mask('000.000.000-00');">
                </div>

            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="example-date-input" class="d-flex justify-content-first">Data de nascimento:</label>
                    <input class="form-control" type="date" value="2020-08-30" id="example-date-input">
                </div>
                <div class="form-group col-md-6">
                    <label for="example-date-input" class="d-flex justify-content-first">Telefone:</label>
                    <input class="form-control" type="number" value="2020-08-30" id="">
                </div>
            </div>
        </div>
        <div class="border-top  p-3 pb-2">
            <!-- <h5 class="pb-4 text-uppercase">Dados Pessoais</h5> -->
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="d-flex justify-content-first" for=" inputEmail4">Email:</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Ex:joaodasilva@gmail.com">
                </div>
                <div class="form-group col-md-6">
                    <label class="d-flex justify-content-first" for=" inputPassword4">Senha:</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="">
                </div>
            </div>
        </div>

        <div class="border-top  p-3">
            <h5 class="pb-4 text-uppercase ">Endereço</h5>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label class="d-flex justify-content-first" for=" inputZip">Cep:</label>
                    <input type="number" class="form-control" id="inputZip">
                </div>
                <div class="form-group col-md-5">
                    <label class="d-flex justify-content-first" for=" inputAddress">Rua:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group col-md-1">
                    <label class="d-flex justify-content-first" for=" inputAddress">Nº:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Complemento">
                </div>
                <div class="form-group col-md-4">
                    <label class="d-flex justify-content-first" for=" inputAddress">Complemento:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Complemento">
                </div>

            </div>

        </div>

        <div class="  p-3 pb-1">
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label class="d-flex justify-content-first" for=" inputCity">Bairro:</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-5">
                    <label class="d-flex justify-content-first" for=" inputCity">Cidade:</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-2">
                    <label class="d-flex justify-content-first" for=" inputState">Estado:</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="border-top pt-3">
            <button type="submit" class="btn btn-primary btn-lg px-5">Salvar</button>
        </div>
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
