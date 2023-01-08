<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary></HeadPrimary>

        <main id="contentView">
            <div class="container mx-auto my-4 px-2">
                <router-view></router-view>
            </div>
        </main>

        <FootPrimary></FootPrimary>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    { // Meta Data Settings
        metaInfo: {
            meta: [
                { charset: 'UTF-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
            ]
        }
    }
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->