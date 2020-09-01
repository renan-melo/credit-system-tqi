<template>
<div class="container-fluid d-flex justify-content-center p-0">

    <form class="form-box col col-sm-12  col-md-12 col-lg-5 px-5 pb-3 pt-1 " @submit.prevent="salvarCadastro()">
        <div class="">
            <img alt=" Vue logo" src="../assets/logoavatar.png" class="col-sm-2 col-md-3 col-lg-4 col-xl-4 pb-3">
        </div>

        <div class="d-flex justify-content-center pb-3">
            <span class="subtitle pt-2">Dados Pessoais</span>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for=" inputname">Nome:</label>
                <input type="text" class="form-control" id="nome" v-model="nome" required>
            </div>
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for=" inputcpf">CPF:</label>
                <the-mask :mask="['###.###.###-##']" type="text" v-model="cpf" :class="cpfValido===true?'is-valid':cpfValido===false?'is-invalid':''" class="form-control " @input="validandoCpf()" required />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="example-date-input" class="d-flex justify-content-first font-weight-bold">Data de nascimento:</label>
                <input class="form-control" type="date" v-model="nascimento" id="data-de-nascimento" required>
            </div>
            <div class="form-group col-md-3">
                <label for="inputphone" class="d-flex justify-content-first font-weight-bold">Telefone:</label>
                <the-mask :mask="['(##) #####-####','(##) ####-####']" class="form-control" v-model="tel" id="telefone" required />
            </div>
            <div class="form-group col-md-3">
                <label for="income" class="d-flex justify-content-first font-weight-bold">Renda:</label>
                <the-mask :mask="['R$ ####,##','R$ #####,##']" class="form-control" v-model="renda" id="renda" required />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3">
                <label class="d-flex justify-content-first font-weight-bold" for="cep">Cep:</label>
                <the-mask :mask="['#####-###']" class="form-control" v-model="cep" id="cep" required @input="pesquisacep()" />
            </div>
            <div class="form-group col-md-3">
                <label class="d-flex justify-content-first font-weight-bold" for=" estado" required>Estado:</label>
                <input class="form-control" v-model="estado" type="text" id="estado" />
            </div>
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for="cidade" required>Cidade:</label>
                <input type="text" class="form-control" v-model="cidade" id="cidade">
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-10">
                <label class="d-flex justify-content-first font-weight-bold" for="rua" required>Rua:</label>
                <input type="text" class="form-control" v-model="rua" id="rua">
            </div>
            <div class="form-group col-md-2">
                <label class="d-flex justify-content-first font-weight-bold" for="numero" required>Nº:</label>
                <input type="text" class="form-control" v-model="numero" id="numero">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for="bairro" required>Bairro:</label>
                <input type="text" class="form-control" v-model="bairro" id="bairro">
            </div>

            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for="complemento">Complemento:</label>
                <input type="text" class="form-control" v-model="complemento" id="complemento">
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for=" inputEmail4" required>Email:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group col-md-6">
                <label class="d-flex justify-content-first font-weight-bold" for=" inputPassword4" required>Senha:</label>
                <input type="password" class="form-control" id="senha" v-model="senha">
            </div>
        </div>

        <div class=" pt-3 pb-3">
            <button type="submit" class="btn btn-primary btn-lg px-5">Salvar</button>
        </div>
    </form>

</div>
</template>

<script>
import axios from "axios"
import {
    TheMask
} from 'vue-the-mask'

export default {
    name: 'CardRegister',
    components: {
        TheMask
    },
    data() {
        return {
            nome: '',
            cpf: '',
            nascimento: '',
            tel: '',
            renda: '',
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            email: '',
            senha: '',
            cpfValido: null
        }

    },

    methods: {

        formatarValor(valor) {
            const formato = String(valor).length
            return parseFloat(`${String(valor).substring(0,formato - 2)}.${String(valor).substring(formato - 2)}`).toFixed(2)

        },

        limparCampos() {
            this.nome = ''
            this.cpf = ''
            this.nascimento = ''
            this.tel = ''
            this.renda = ''
            this.cep = ''
            this.rua = ''
            this.numero = ''
            this.complemento = ''
            this.bairro = ''
            this.cidade = ''
            this.estado = ''
            this.email = ''
            this.senha = ''
        },

        salvarCadastro() {
            if (!this.cpfValido) {
                return
            }
            const data = {
                nome: this.nome,
                cpf: this.cpf,
                nascimento: this.nascimento,
                tel: this.tel,
                renda: this.formatarValor(this.renda),
                cep: this.cep,
                rua: this.rua,
                numero: this.numero,
                complemento: this.complemento,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                email: this.email,
                senha: this.senha
            }
            const users = localStorage.getItem('users');
            if (users !== 'null' && users !== null) {
                const usersParse = JSON.parse(users)
                usersParse[`user_${this.cpf}`] = data
                localStorage.setItem('users', JSON.stringify(usersParse))
            } else {
                const usersParse = {}
                usersParse[`user_${this.cpf}`] = data
                localStorage.setItem('users', JSON.stringify(usersParse))

            }
            this.limparCampos()
            this.$router.push({
                path: '/'
            })

        },

        validateCPF() {
            let Soma;
            let Resto;
            Soma = 0;
            let strCPF = String(this.cpf)

            if (strCPF == "00000000000") return false;

            for (let i = 1; i <= 9; i++)
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

            if (Resto == 10 || Resto == 11) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) return false;

            Soma = 0;
            for (let i = 1; i <= 10; i++)
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

            if (Resto == 10 || Resto == 11) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) return false;
            return true;

        },

        validandoCpf() {
            if (this.cpf.length === 11) {
                this.cpfValido = this.validateCPF()
            } else {
                this.cpfValido = null
            }
        },

        pesquisacep() {

            if (String(this.cep).length === 8) {
                axios.get(`https://viacep.com.br/ws/${this.cep}/json/`).then(result => {
                    const data = result.data
                    if (data && data.cep) {

                        this.rua = data.logradouro
                        this.bairro = data.bairro
                        this.cidade = data.localidade
                        this.estado = data.uf
                    } else {

                        this.rua = ''
                        this.bairro = ''
                        this.cidade = ''
                        this.estado = ''
                    }
                })
            }
        },

    }
}
</script>

<style lang="css" scoped>
.form-box {
    background: white;
}

.subtitle {
    font-family: Arial, Helvetica, sans-serif
}
</style>
