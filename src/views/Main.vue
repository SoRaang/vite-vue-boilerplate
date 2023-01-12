<template>
    <section id="mainHero">
        <div class="hero-overlay">
            <div>
                <span>소나무</span><br>
                <span>정보기술</span>
            </div>
        </div>
        <video class="hero-video" autoplay loop muted playsinline>
            <source src="../assets/misc/office.mp4" type="video/mp4">
        </video>
    </section>

    <section id="mainCatchPhrase" class="grid place-items-center h-64">
        <div class="container">
            소나무 정보기술은 어쩌고 저쩌고하여 미래에 어쩌고하고
        </div>
    </section>

    <section id="mainPortfolio">
        <article class="portfolio-category">
            <dl class="portfolio-description">
                <dd data-pf-category-subtext>어쩌고</dd>
                <dt data-pf-category-name>
                    <h2>저쩌고</h2>
                </dt>
                <dd data-pf-category-maintext>이랬다가 저랬다가 왔다갔다</dd>
                <dd data-pf-category-tag>
                    <p class="portfolio-tag">김철강</p>
                    <p class="portfolio-tag">박공장</p>
                    <p class="portfolio-tag">최자동화</p>
                </dd>
            </dl>

            <div class="portfolio-picture">
                <img src="../assets/images/main-bg.jpg" alt="" data-pf-category-image>
            </div>
        </article> <!-- 사업분야 아이템 -->

        <article class="portfolio-category">
            <dl class="portfolio-description">
                <dd data-pf-category-subtext>어쩌고</dd>
                <dt data-pf-category-name>
                    <h2>저쩌고</h2>
                </dt>
                <dd data-pf-category-maintext>이랬다가 저랬다가 왔다갔다</dd>
                <dd data-pf-category-tag>
                    <p class="portfolio-tag">김철강</p>
                    <p class="portfolio-tag">박공장</p>
                    <p class="portfolio-tag">최자동화</p>
                </dd>
            </dl>

            <div class="portfolio-picture">
                <img src="../assets/images/main-bg.jpg" alt="" data-pf-category-image>
            </div>
        </article> <!-- 사업분야 아이템 -->

        <article class="portfolio-category">
            <dl class="portfolio-description">
                <dd data-pf-category-subtext>어쩌고</dd>
                <dt data-pf-category-name>
                    <h2>저쩌고</h2>
                </dt>
                <dd data-pf-category-maintext>이랬다가 저랬다가 왔다갔다</dd>
                <dd data-pf-category-tag>
                    <p class="portfolio-tag">김철강</p>
                    <p class="portfolio-tag">박공장</p>
                    <p class="portfolio-tag">최자동화</p>
                </dd>
            </dl>

            <div class="portfolio-picture">
                <img src="../assets/images/main-bg.jpg" alt="" data-pf-category-image>
            </div>
        </article> <!-- 사업분야 아이템 -->
    </section>

    <section id="mainIntro" class="container mx-auto h-64">
        소개의 글
    </section>

    <section id="mainNews" class="container mx-auto">
        <div class="recent-article">
            <div class="recent-article-header flex flex-col justify-between">
                <div>
                    <span>PINEIT</span>
                    <h2>NEWS</h2>
                </div>

                <div class="recent-article-pagination">
                    <button type="button">
                        <i class="ri-arrow-left-s-line"></i>
                    </button>

                    <button type="button">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>

            <div class="recent-article-slider">
                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=1" alt="">
                    </div>

                    <dl>
                        <dt>김제목</dt>
                        <dd>김뉴스사 | 2023. 01. 01</dd>
                    </dl>
                </article>

                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=2" alt="">
                    </div>

                    <dl>
                        <dt>김제목</dt>
                        <dd>김뉴스사 | 2023. 01. 01</dd>
                    </dl>
                </article>

                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=3" alt="">
                    </div>

                    <dl>
                        <dt>김제목</dt>
                        <dd>김뉴스사 | 2023. 01. 01</dd>
                    </dl>
                </article>
            </div>
        </div>
    </section>

    <section id="mainGallery" class="container mx-auto">
        <div class="recent-article">
            <div class="recent-article-header flex flex-col justify-between">
                <div>
                    <span>PINEIT</span>
                    <h2>소나무 소식</h2>
                </div>

                <div class="recent-article-pagination">
                    <button type="button">
                        <i class="ri-arrow-left-s-line"></i>
                    </button>

                    <button type="button">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>

            <div class="recent-article-slider">
                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=4" alt="">
                    </div>

                    <dl>
                        <dt>김워크샵</dt>
                        <dd>2023. 01. 01</dd>
                    </dl>
                </article>

                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=5" alt="">
                    </div>

                    <dl>
                        <dt>박창립기념일</dt>
                        <dd>2023. 01. 01</dd>
                    </dl>
                </article>

                <article>
                    <div>
                        <img src="https://picsum.photos/400/300?random=6" alt="">
                    </div>

                    <dl>
                        <dt>정신년회</dt>
                        <dd>2023. 01. 01</dd>
                    </dl>
                </article>
            </div>
        </div>
    </section>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

</style> <!-- Stylesheet Ends -->