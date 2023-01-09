<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary />

        <main id="contentView">
            <router-view></router-view>
        </main>

        <FootPrimary />

        <LoadSpinner />
    </div>
</template> <!-- Template Ends -->

<script setup>
    import LoadSpinner from './components/LoadSpinner.vue'
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->