<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary></HeadPrimary>

        <main id="contentView">
            <div class="container mx-auto my-4 px-2">
                <router-view></router-view>
            </div>

            <div @click="aniThis" id="helloworld">
                김헬로월드
            </div>
        </main>

        <FootPrimary></FootPrimary>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import anime from 'animejs'
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    const aniThis = () => anime({
        targets: '#helloworld',
        translateX: 250,
        rotate: '1turn',
        duration: 800
    })
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->