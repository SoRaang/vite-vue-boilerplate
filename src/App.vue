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
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->