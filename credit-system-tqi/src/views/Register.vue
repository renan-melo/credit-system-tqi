<template>
<div class="register d-flex justify-content-center align-items-center">
    <CardRegister />
</div>
</template>

<script>
import CardRegister from '@/components/CardRegister.vue'

export default {
    name: 'Login',
    components: {
        CardRegister
    }
}
</script>

<style lang="css" scoped>
.register {
    min-height: 100vh;
}
</style>s
