<template>
    <div class="container mt-20 mx-auto">
        <h1>여기는 포트폴리오 페이지</h1>
        <section id="portfolio-box">
            <div class="portfolio-contents webApp">
                <h3 class="sub-title">WEB / APP 솔루션</h3>
                <article class="portfolio-list">
                    <figure class="portfolio-img-box"><!--반복-->
                        <div class="portfolio-img">
                            <figcaption date-portfolio-text>여기저기 사이트를 돌아다니지 않아도 되는 "전후무후한 사이트" 스킨스쿠버 간편 예약 시스템</figcaption>
                        </div>
                        <div class="portfolio-title">
                            <h4 class="">통합예약 커뮤니티 D사</h4>
                            <span class="pointFont">반응형</span>
                        </div>
                    </figure><!--반복-->
                </article>
            </div>

            <div class="portfolio-contents totalSol">
                <h3 class="sub-title">통합 솔루션</h3>
                <article class="portfolio-list">
                    <figure class="portfolio-img-box"><!--반복-->
                        <div class="portfolio-img">
                            <figcaption date-portfolio-text>여기저기 사이트를 돌아다니지 않아도 되는 "전후무후한 사이트" 스킨스쿠버 간편 예약 시스템</figcaption>
                        </div>
                        <div class="portfolio-title">
                            <h4 class="">통합예약 커뮤니티 D사</h4>
                            <span class="pointFont">반응형</span>
                        </div>
                    </figure><!--반복-->
                </article>
            </div>
        </section><!--portfolio-box-->
    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">



#portfolio-box{ 
    @apply flex flex-col ;
}

.totalSol{
    @apply mt-6
}

.sub-title{
    @apply pb-4 mt-6 font-bold;
}

.portfolio-title{
    @apply flex items-center gap-1 py-2 cursor-pointer;
}

.portfolio-list{
    @apply grid grid-cols-3 gap-2 items-center;
}

.portfolio-img{
    @apply bg-no-repeat bg-cover bg-center w-full h-full rounded-md relative overflow-hidden cursor-pointer;
    background-image: url("/src/assets/images/webapp.jpg");
    aspect-ratio: 16/9;
}

[date-portfolio-text]{
    @apply p-5 absolute bottom-0 backdrop-blur-sm ;
    color: rgb(255,255,255);
}


.pointFont{
    color: rgb(var(--clr-id-main));
}



</style> <!-- Stylesheet Ends -->