<template>
    <main id="contentView">
        <div class="container mx-auto my-4">
            <button @click="numb ++">
                버튼 : {{ numb }}
            </button>
        </div>
    </main>
</template>

<script setup>
    const numb = ref(0)
</script>

<style lang="scss" scoped>

</style>