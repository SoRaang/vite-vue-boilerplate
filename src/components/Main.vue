<template>
    <main id="contentView">
        <div class="container mx-auto my-4">
            <swiper
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
        </div>
    </main>

    <!-- Template Ends -->
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'

    /* Logic Ends */
</script>

<style lang="scss" scoped>
    .slide-item {
        @apply p-4 rounded-lg bg-slate-400/[.025];
    }

    // Stylesheet Ends
</style>