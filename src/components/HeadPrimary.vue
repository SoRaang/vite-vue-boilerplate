<template>
    <header id="headPrimary" class="flex justify-center items-center sticky top-0 h-16 bg-white/[.05] backdrop-blur-lg">
        <div class="container flex justify-between items-center">
            <h1 id="mainLogo" class="hover:text-emerald-500">
                <a href="#">Devoist</a>
            </h1>

            <nav id="navPrimary" class="flex items-center gap-2">
                <button type="button" class="nav-item">프로젝트별 일정</button>
                <button type="button" class="nav-item">개인별 업무일정표</button>
                <button type="button" class="nav-item">자료실</button>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #mainLogo {
        font-family: 'Fredericka the Great', cursive;
        font-size: 1.8rem;
        font-weight: 900;
    }

    #headPrimary {

    }

    .nav-item {
        @apply py-1 px-3 rounded bg-white/[.05] shadow-lg text-[.6rem]; // Tailwind CSS의 유틸리티 스타일을 하나의 클래스 등에 포함시키는 방법
        @apply hover:bg-blue-300/[.3];
        @apply focus:bg-blue-300/[.15] focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-emerald-500;
        @apply active:bg-blue-300/[.5];
    }
</style>