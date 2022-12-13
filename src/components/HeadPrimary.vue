<template>
    <header id="headPrimary" class="flex justify-center items-center sticky top-0 h-16 bg-white/[.05] backdrop-blur-lg">
        <div class="container">
            <h1 id="mainLogo">
                <a href="#">Devoist</a>
            </h1>

            <nav id="navPrimary">
                <button type="button" class="nav-item">업무일정표</button>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #headPrimary {

    }
    .nav-item {
        @apply py-1 px-3 rounded bg-white/[.05] hover:bg-blue-300/[.3]; // Tailwind CSS의 유틸리티 스타일을 하나의 클래스 등에 포함시키는 방법
    }
</style>