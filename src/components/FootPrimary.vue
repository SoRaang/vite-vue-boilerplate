<template>
    <div class="py-5">
        <div class="container mx-auto">
            어쩌고 저쩌고 하신가요? 이러쿵 저러쿵 해드리겠습니다.

            <button type="button">사업 문의하기</button>
        </div>
    </div>

    <footer id="footPrimary">
        <div class="container mx-auto">
            <span class="text-[.6rem] opacity-75">Copyright © {{ currentYear }} 소나무정보기술, All Rights Reserved.</span>

            <div class="flex justify-end gap-2 m-5">
                <div class="color-chip" style="background-color: rgb(var(--clr-id-main))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-id-sub))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-id-01))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-id-02))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-inter-neutral))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-inter-agree))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-inter-warn))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-inter-error))"></div>
                <div class="color-chip" style="background-color: rgb(var(--clr-inter-disable))"></div>
                <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(16, 27, 110), rgb(0, 78, 255))"></div>
                <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(66, 0, 255), rgb(0, 255, 108))"></div>
                <div class="color-chip" style="background-image: linear-gradient(to top left, rgb(40, 65, 255), rgb(202, 255, 247))"></div>
            </div>
        </div>
    </footer>
</template> <!-- Template Ends -->

<script setup>
    const currentYear = ref(new Date().getFullYear())
</script> <!-- Logic Ends -->

<style lang="scss">
    #footPrimary {
        @apply mt-auto px-2 py-4;
    }

    .color-chip {
        width: 2rem;
        height: 2rem;
        border-radius: .15rem;
    }
</style> <!-- Stylesheet Ends -->