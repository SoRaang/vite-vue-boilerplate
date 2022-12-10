<template>
    <header id="headPrimary" class="flex justify-center h-16 bg-white/[.05]">
        <div class="container">
            <h1 id="mainLogo">
                <a href="#">사실 이것은 헤더가 아니다</a>
            </h1>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #headPrimary {
        display: flex;
        align-items: center;
        backdrop-filter: blur(5px);
    }
</style>