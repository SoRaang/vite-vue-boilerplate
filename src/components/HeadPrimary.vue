<template>
    <header id="headPrimary">
        <div class="container flex justify-between items-center px-2 h-full">
            <h1 id="mainLogo">
                <router-link to="/">소나무정보기술</router-link>
            </h1>

            <nav id="navPrimary" class="contents">
                <ul class="nav-list">
                    <li v-for="navItem in navGroup" class="nav-item">
                        <router-link :to="navItem.linkTo">
                            <span>{{ navItem.navText }}</span>
                        </router-link>

                        <ul v-if="navItem.childrens" class="sub-list">
                            <li v-for="subItem in navItem.childrens" class="sub-item">
                                <router-link :to="subItem.subTo">
                                    <span>{{ subItem.subName }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <button type="button" id="toggleMode" title="화면 모드 전환" @click="">
                            <i class="ri-contrast-2-fill"></i>
                        </button>
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
                { subTo: '인사의 글 001', subName: '인사의 글' },
                { subTo: '연혁 002', subName: '연혁' },
                { subTo: '관련 인증 및 자격 003', subName: '인증 및 자격' },
                { subTo: '보도자료 004', subName: '보도자료' },
                { subTo: '오시는 길 005', subName: '오시는 길' }
            ]
        },
        {
            bindIndex: 1,
            linkTo: '/details/512',
            navText: '사업분야',
            childrens: [
                { subTo: '솔루션 개발 001', subName: '솔루션 개발' },
                { subTo: '기업 사이트 구축 002', subName: '기업 사이트 구축' },
                { subTo: '서비스 구축 003', subName: '서비스 구축' },
                { subTo: '정부사업 004', subName: '정부사업' }
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
                { subTo: '공지사항 001', subName: '공지사항' },
                { subTo: '자료실 002', subName: '자료실' },
                { subTo: '소나무 소식 003', subName: '소나무 소식' },
                { subTo: '사업문의 004', subName: '사업문의' }
            ]
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss">
    #mainLogo {
        color: rgb(var(--clr-text-highlight));
        font-family: 'NS-Neo', sans-serif;
        font-size: 1.8rem;
        font-weight: 900;
    }

    #headPrimary {
        @apply flex justify-center items-center fixed top-0 left-0 right-0 h-16 z-50;

        border-block-end: 1px solid rgba(var(--clr-inter-shade), .25);

        &::before {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 0;
            background-color: transparent;
            content: '';
        }

        &:hover {
            background-color: rgb(var(--clr-inter-pane));
            box-shadow: 0 0 0 10000vmax rgba(0, 0, 0, .5);
            color: rgba(var(--clr-text-highlight), .75);

            &::before {
                background-color: rgba(var(--clr-inter-pane), .75);
                height: 12rem;
            }

            .sub-list {
                top: 100%;
            }
        }
    }

    .nav-list {
        @apply flex items-center gap-2 h-full;
    }

    .nav-item {
        @apply flex items-center relative px-8 h-full;

        &:hover {
            background-image: linear-gradient(to top, rgb(var(--clr-inter-shade)) .1rem, transparent .1rem);

            > .sub-list {
                background-color: rgb(var(--clr-inter-pane));
            }
        }

        &:has(.router-link-active) {
            background-image: linear-gradient(to top, rgb(var(--clr-inter-shade)) .1rem, transparent .1rem);
        }
    }

    .sub-list {
        @apply absolute left-0 right-0;

        top: -500%;
        height: 12rem;
    }

    .sub-item {
        @apply py-3;

        text-align: center;
    }

    #toggleMode {
        display: block;
    }
</style> <!-- Stylesheet Ends -->