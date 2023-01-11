<template>
    <div class="container mt-20 mx-auto">
        <h1>여기는 <span class="text-emerald-500 font-black">{{ $route.params.id }}</span> 이라고 입력된 페이지임</h1>

        <router-view></router-view>
    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->