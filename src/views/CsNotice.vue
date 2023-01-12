<template>
    <div id="tempSubPageHero">

    </div>

    <section id="notice" class="cs-container">
        <div class="total-search-line">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>

            <input data-totalsearch-input type="text">
        </div>

        <div id="noticeTexts">
            <div class="notice-table-title">
                <div>번호</div>
                <div>제목</div>
                <div>등록일</div>
            </div>

            <div class="notice-table-text">
                <div>3</div>
                <div>소나무정보기술 공휴일 휴무안내</div>
                <div>등록일</div>
            </div>
        </div>
    </section>
</template>

<script setup>
    //import SubPageHero from '@/components/SubPageHero.vue'
</script>

<style lang="scss" scoped>
    #notice {
        @apply flex flex-col;
    }

    .cs-container {
        @apply container max-w-screen-xl mx-auto;
    }

    #tempSubPageHero {
        @apply relative w-full h-96;
    }

    #noticeTexts {
        @apply w-full py-6 border-black border-t-2;
        > * {
            @apply flex;
        }
    }

    .notice-table-title {

    }

    .notice-table-text {

    }

    .total-search-line {
        @apply border-gray-100 w-full h-8 mb-4 flex justify-end;

        > * {
            @apply h-full;
        }
    }

    [data-totalsearch-select] {
        @apply w-24;
    }

    [data-totalsearch-input] {
        @apply w-80;
    }
</style>
