<template>
<div class="container-fluid  d-flex justify-content-center p-3">

    <form class="form-box col-6 p-4 border">

        <h1 class=" ">Acompanhe sua proposta</h1>

        <div class="pt-5" id="Calcule">

            <div class="form-group col-md-12">
                <!-- <label for="income" class="d-flex justify-content-center font-weight-bold">Informe o valor pretendido</label> -->
                <h3>Informe o valor pretendido</h3>
                <h5>Nós encontraremos a melhor opção para vocês</h5>

                <div class="row col-12 d-flex justify-content-center">
                    <!-- <the-mask :mask="['R$ ####,##','R$ #####,##','R$ ######,##']" class="form-control col-2" v-model="valor" id="valor" /> -->

                    <div class='d-flex justify-content-center align-items-center my-2'>

                        <button type="button" :class="valorSelecionado === index?'btn-success':'btn-outline-success' " class="btn btn-lg m-2" v-for="(valor, index) in valores" :key="index" @click="alterarValor(index)">
                            R$ {{valor}},00
                        </button>
                    </div>
                </div>
            </div>

            <h4>Parcelas</h4>
            <div class='d-flex justify-content-center align-items-center mb-5'>

                <button type="button" :class="parcelaSelecionada === index?'btn-primary':'btn-outline-primary' " class="btn m-1" v-for="(parcela, index) in parcelas" :key="index" @click="alterarParcela(index)">
                    {{parcela.num}}x
                </button>
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
                        <tr v-for="(parcela, index) in parcelas[parcelaSelecionada].values" :key="index">
                            <td>{{parcela.num}}º</td>
                            <td>{{parcela.taxa}}%</td>
                            <td>R${{parcela.value}}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <div class="btn btn-primary btn-lg text-uppercase">
            <button type="button pt-t" class="btn btn-primary btn-lg ">Confirmar</button>
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
            dataUser: {

            }

        }
    },

    methods: {
        alterarValor(index) {
            this.valorSelecionado = index
            this.calcularParcelas()
        },
        alterarParcela(index) {
            this.parcelaSelecionada = index
            this.calcularParcelas()
        },
        calcularParcelas() {
            const valorAtual = this.valores[this.valorSelecionado] / this.parcelas[this.parcelaSelecionada].num
            this.parcelas[this.parcelaSelecionada].values = []
            for (let i = 0; i < this.parcelas[this.parcelaSelecionada].num; i++) {
                const result = {
                    num: i + 1,
                    taxa: this.parcelas[this.parcelaSelecionada].taxa,
                    value: parseFloat(valorAtual + (this.valores[this.valorSelecionado] * this.parcelas[this.parcelaSelecionada].taxa) / 100).toFixed(2)
                }
                this.parcelas[this.parcelaSelecionada].values.push(result)
            }

        },

    },

    mounted() {
        this.id = this.$router.history.current.params.id
        const users = JSON.parse(localStorage.getItem('users'));
        this.dataUser = users[this.id]
        console.log(this.dataUser);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="css" scoped>
.form-box {
    background: white;

}

.table-custom {
    max-height: 360px !important;
    overflow-y: auto !important;
    height: 360px !important;
}
</style>
