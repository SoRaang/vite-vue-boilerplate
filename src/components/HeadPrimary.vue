<template>
    <header id="headPrimary">
        <div class="container flex justify-between items-center px-2">
            <h1 id="mainLogo" class="hover:text-emerald-500">
                <router-link to="/">소나무정보기술</router-link>
            </h1>

            <nav id="navPrimary">
                <ul class="flex items-center gap-2">
                    <li v-for="navItem in navGroup">
                        <router-link to="/details/" class="nav-item">{{ navItem.navText }}</router-link>

                        <ul v-if="navItem.childrens" class="absolute">
                            <li v-for="subItem in navItem.childrens">
                                {{ subItem.subName }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template> <!-- Template Ends -->

<script setup>
    const navGroup = ref([
        {
            bindIndex: 0,
            linkTo: '/details/123',
            navText: '회사소개',
            childrens: [
                { subTo: '001', subName: '인사의 글' },
                { subTo: '002', subName: '연혁' },
                { subTo: '003', subName: '인증 및 자격' },
                { subTo: '004', subName: '보도자료' },
                { subTo: '005', subName: '오시는 길' }
            ]
        },
        {
            bindIndex: 1,
            linkTo: '/details/512',
            navText: '사업분야',
            childrens: [
                { subTo: '001', subName: '솔루션 개발' },
                { subTo: '002', subName: '기업 사이트 구축' },
                { subTo: '003', subName: '서비스 구축' },
                { subTo: '004', subName: '정부사업' }
            ]
        },
        {
            bindIndex: 2,
            linkTo: '/details/345',
            navText: '구축사례'
        },
        {
            bindIndex: 3,
            linkTo: '/details/733',
            navText: '고객센터',
            childrens: [
                { subTo: '001', subName: '공지사항' },
                { subTo: '002', subName: '자료실' },
                { subTo: '003', subName: '소나무 소식' },
                { subTo: '004', subName: '사업문의' }
            ]
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainLogo {
        font-size: 1.8rem;
        font-weight: 900;
    }

    #headPrimary {
        @apply flex justify-center items-center fixed top-0 left-0 right-0 h-16 bg-white/[.05] backdrop-blur-lg z-50;
    }

    .nav-item {
        @apply px-3 py-2 rounded bg-white/[.05] shadow-lg text-[.6rem]; // Tailwind CSS의 유틸리티 스타일을 하나의 클래스 등에 포함시키는 방법
        @apply hover:bg-blue-300/[.3];
        @apply focus:bg-blue-300/[.15] focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-emerald-500;
        @apply active:bg-blue-300/[.5];
    }

    .nav-item:is(.router-link-active) {
        @apply bg-emerald-500;
    }
</style> <!-- Stylesheet Ends -->