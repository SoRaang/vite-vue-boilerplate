<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary></HeadPrimary>

        <main id="contentView">
            <div class="container mx-auto my-4">
                <router-view></router-view>
            </div>
        </main>

        <FootPrimary></FootPrimary>
    </div>

    <!-- Template Ends -->
</template>

<script setup>
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    /* Logic Ends */
</script>

<style lang="scss" scoped>
    // Stylesheet Ends
</style>