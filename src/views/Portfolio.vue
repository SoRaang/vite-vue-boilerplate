<template>
    <div class="container mt-20 mx-auto">
        <h1>여기는 구축사례 입니당</h1>
        <h3 class="">WEB / APP 솔루션</h3>
        <section id="portfolio-box">
            <article class="portfolio-list">
                <div class="portfolio-text-box">
                    <p date-portfolio-text>여기저기 사이트를 돌아가니지 않아도 되는 "전후무후한 사이트" 스킨스쿠버 간편 예약 시스템</p>
                </div>
                <div>
                    <h4 class="">통합예약 커뮤니티 D사</h4>
                    <span class="pointFont">반응형</span>
                </div>
            </article>

        </section>
    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">

#portfolio-box{
    @apply grid grid-cols-3 gap-2
}
.portfolio-text-box{
    @apply bg-no-repeat bg-cover bg-center w-full h-full rounded-md relative;
    background-image: url("/src/assets/images/webapp.jpg");
    aspect-ratio: 2/1;
}

[date-portfolio-text]{
    @apply p-5 absolute bottom-0 
}


</style> <!-- Stylesheet Ends -->