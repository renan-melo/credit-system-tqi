<template>
<div class="container-fluid box d-flex justify-content-center p-3">

    <form class="form-box col col-md-12 col-lg-8 col-xl-6  p-4 border">

        <h1 class=" ">Acompanhe sua proposta</h1>

        <div class="pt-5" id="Calcule">
            <div class="pb-2 my-3">
                <h6 class=" ">Valor do emprestimo:</h6>
                <h2 class=" ">R$ {{valorEmprestimo}}</h2>
            </div>

            <div class="container-fluid d-flex pb-2 my-3 justify-content-between">
                <h4 class=" ">Status:<span class="text-warning"> Pendente</span></h4>
                <h4>{{num}}x</h4>
            </div>
            <div class="table-custom">
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Parcela</th>
                            <th scope="col">Taxa %</th>
                            <th scope="col">Valor</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(parcela, index) in values" :key="index">
                            <td>{{parcela.num}}º</td>
                            <td>{{parcela.taxa}}%</td>
                            <td>R${{parcela.value}}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="container-fluid d-flex pb-2 my-3 justify-content-between">
                <h3 class=" ">Total:</h3>
                <h3 class=" ">R$ {{valorTotal}}</h3>
            </div>
        </div>

        <div class="btn btn-primary btn-lg text-uppercase">
            <button type="button" class="btn btn-primary px-5" @click.prevent="sair()">Sair</button>
        </div>

    </form>
</div>
</template>

<script>
import {
    TheMask
} from 'vue-the-mask'

export default {
    name: 'Accompany',
    components: {
        TheMask
    },
    data() {
        return {
            dataUser: {},
            valorEmprestimo: 0,
            valorTotal: 0,
            values: [],
            num: 0
        }
    },
    methods: {
        sair() {
            this.$router.push({
                path: `/`
            })
        }
    },

    mounted() {
        this.id = this.$router.history.current.params.id
        const users = JSON.parse(localStorage.getItem('users'));
        this.dataUser = users[this.id]
        const taxa = this.dataUser.emprestimo.values[0].taxa
        const numeroParcela = this.dataUser.emprestimo.num
        const juros = (this.dataUser.valorEmprestimo * taxa) / 100 * numeroParcela
        this.valorEmprestimo = parseFloat(this.dataUser.valorEmprestimo).toFixed(2)
        this.valorTotal = parseFloat(this.dataUser.valorEmprestimo + juros).toFixed(2)
        this.values = this.dataUser.emprestimo.values
        this.num = this.dataUser.emprestimo.num
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="css" scoped>
.box {
    min-height: 100vh;
}

.form-box {
    background: white;

}

.table-custom {
    max-height: 360px !important;
    overflow-y: auto !important;
    height: 360px !important;
}
</style>
