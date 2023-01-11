<template>
    <footer id="footPrimary">
        <div class="container mx-auto">
            <span class="text-[.6rem] opacity-50">© {{ currentYear }} SoRaang</span>
        </div>
    </footer>
</template> <!-- Template Ends -->

<script setup>
    const currentYear = ref(new Date().getFullYear())
</script> <!-- Logic Ends -->

<style lang="scss">
    #footPrimary {
        @apply mt-auto px-2 py-4;
    }
</style> <!-- Stylesheet Ends -->