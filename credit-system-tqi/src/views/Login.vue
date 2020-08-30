<template>
<div class="home d-flex justify-content-center align-items-center">
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
.home {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(71, 28, 157, 1) 29%, rgba(66, 40, 163, 1) 50%, rgba(54, 73, 181, 1) 66%, rgba(0, 212, 255, 1) 100%);
    width: 100%;
    height: 100vh;

}
</style>s
