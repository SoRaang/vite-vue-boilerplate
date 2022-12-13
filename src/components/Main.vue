<template>
    <main id="contentView">
        <div class="container mx-auto my-4">
            뭔가 심상치 않은 일이 생긴거야
            어둠 속에 숨어있는 적의 무리
            아름다운 녹색의 별 지구를 침범하려 해

            <img src="src/assets/images/img.gif" alt="">

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