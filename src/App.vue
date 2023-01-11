<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary />

        <main id="contentView">
            <router-view></router-view>
        </main>

        <FootPrimary />
    </div>

    <aside id="floatButtons">
        <button type="button" @click="gotoTop">
            <i class="ri-arrow-up-s-line"></i>
        </button>
    </aside>
</template> <!-- Template Ends -->

<script setup>
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'

    const gotoTop = function() {
        window.scrollTo(0, 0)
    }
</script> <!-- Logic Ends -->

<style lang="scss">
    #floatButtons {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
    }
</style> <!-- Stylesheet Ends -->