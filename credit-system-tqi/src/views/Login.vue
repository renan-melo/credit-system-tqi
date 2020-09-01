<template>
<div class="login d-flex justify-content-center align-items-center p-0">
    <CardLogin />
</div>
</template>

<script>
import CardLogin from '@/components/CardLogin.vue'

export default {
    name: 'Login',
    components: {
        CardLogin
    }
}
</script>

<style>
.login {
    min-height: 100vh;

}
</style>s
