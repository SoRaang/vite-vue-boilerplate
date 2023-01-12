<template>
    <div class="container mt-20 mx-auto">
        <h1>이곳은 솔루션 개발 페이지 입니다</h1>
        <section id="solution-box">
            <div class="solution-top-img">
                <article class="basis-3/6">
                    <img src="/src/assets/images/webapp.jpg" class="solution-in-img"/>
                </article>
                <article class="basis-3/6">
                    <span>솔루션 개발</span>
                    <h3 class="font-bold pb-6 pt-1">Solution Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus perferendis laborum odio vitae dolorem vel quia necessitatibus nostrum, totam rem doloremque obcaecati praesentium aliquam delectus sit nobis ducimus aliquid!
                    </p>
                </article>
            </div>
            <div class="solution-mid-result">
                <h4 class="font-bold ">도입효과</h4>
                <div class="solution-result-list">
                    <p class="solution-result-text"><span class="dot"></span> Lorem ipsum dolor .</p>
                    <p class="solution-result-text"><span class="dot"></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p class="solution-result-text"><span class="dot"></span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="solution-bottom-portfolio">

            </div>
        </section><!--Solution-box-->

    </div>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">


.solution-top-img{
    @apply flex gap-10 items-start;

}

.solution-in-img{
    @apply rounded-md object-cover;
    aspect-ratio: 16/9;

}
.solution-mid-result{
    @apply my-20
}
.solution-result-list{
    @apply flex justify-between
}

.solution-result-text{
    @apply p-5 rounded-sm;
    background-color: rgba(var(--clr-id-01), .6);
}
.dot{
    @apply rounded-full w-1 h-1 inline-block ;
    background-color: rgb(var(--clr-id-02));
}

</style> <!-- Stylesheet Ends -->