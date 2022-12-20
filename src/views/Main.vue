<template>
    <div id="mainPage" class="flex flex-col gap-4">
        <section id="mainFeaturedSlider">
            <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="15"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div class="slide-item">
                        Slide 1
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide-item">
                        Slide 2
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide-item">
                        Slide 3
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide-item">
                        Slide 4
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slide-item">
                        Slide 5
                    </div>
                </swiper-slide>
            </swiper>
        </section>

        <section id="mainNewArticles">
            <article class="new-article-item">
                <h1>최근 게시물</h1>
            </article>
        </section>
    </div>

    <!-- Template Ends -->
</template>

<script setup>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/scss'
    import 'swiper/scss/navigation'
    import 'swiper/scss/pagination'
    import 'swiper/scss/scrollbar'

    /* Logic Ends */
</script>

<style lang="scss" scoped>
    .slide-item {
        @apply p-4 rounded-lg bg-slate-400/[.025];
    }

    .new-article-item {
        @apply p-4 rounded-lg bg-white text-slate-700;
    }
    // Stylesheet Ends
</style>