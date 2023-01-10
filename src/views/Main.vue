<template>
    <div class="slide">
        <div class="overlay">
            <div>
                <span><span style="color: slateblue;">소</span>나무</span><br>
                <span>정보기<span style="color: goldenrod;">술</span></span>
            </div>
        </div>
        <video class="video" autoplay loop muted>
            <source src="../assets/misc/office.mp4" type="video/mp4">
        </video>
    </div>

    <div id="mainPage" class="flex flex-col gap-4 container mx-auto my-4 px-2">

    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    .slide {
        position: relative;
    }

    .overlay {
        display: grid;
        place-items: center;
        position: absolute;
        inset: 0;
        color: white;
        background-color: black;
        font-size: 25vw;
        font-weight: 900;
        text-align: center;
        // letter-spacing: -80px;
        line-height: .8;
        mix-blend-mode: multiply;
        backdrop-filter: grayscale(1);
    }

    .video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
</style> <!-- Stylesheet Ends -->