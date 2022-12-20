<template>
    <header id="headPrimary">
        <div class="container flex justify-between items-center px-2">
            <h1 id="mainLogo" class="hover:text-emerald-500">
                <router-link to="/">Devoist</router-link>
            </h1>

            <nav id="navPrimary" class="flex items-center gap-2">
                <button type="button" class="nav-item">
                    <router-link to="/projects">프로젝트별 일정</router-link>
                </button>
                <button type="button" class="nav-item">
                    <router-link to="/workflow">개인별 업무일정표</router-link>
                </button>
                <button type="button" class="nav-item">
                    <router-link to="/storage">자료실</router-link>
                </button>
            </nav>
        </div>
    </header>

    <!-- Template Ends -->
</template>

<script setup>
    /* Logic Ends */
</script>

<style lang="scss" scoped>
    #mainLogo {
        font-family: 'Fredericka the Great', cursive;
        font-size: 1.8rem;
    }

    #headPrimary {
        @apply flex justify-center items-center sticky top-0 h-16 bg-white/[.05] backdrop-blur-lg;
    }

    .nav-item {
        @apply px-3 py-1 rounded bg-white/[.05] shadow-lg text-[.6rem]; // Tailwind CSS의 유틸리티 스타일을 하나의 클래스 등에 포함시키는 방법
        @apply hover:bg-blue-300/[.3];
        @apply focus:bg-blue-300/[.15] focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-emerald-500;
        @apply active:bg-blue-300/[.5];
    }

    .nav-item:has(.router-link-active) {
        @apply bg-emerald-500;
    }

    // Stylesheet Ends
</style>