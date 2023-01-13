<template>
    <div id="tempSubPageHero">
        <div id="divHeroSubline">
            <ul id="ulHeroSub">
                <li>공지사항</li>
                <li>자료실</li>
                <li>소식</li>
            </ul>
            <ul id="ulBreadCrumbs">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" fill="rgba(255,255,255,1)"/></svg>
                </li>
                <li>고객센터</li>
                <li>공지사항</li>
            </ul>
        </div>
    </div>
    <section id="secNotice" class="cs-container">
        <div id="divSearchLine">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>
            <input data-totalsearch-input type="text">
        </div>
        <div id="divNotice">
            <div class="table-title">
                <div>번호</div>
                <div>제목</div>
                <div>등록일</div>
            </div>
            <div id="divTextLines">
                <div class="table-text">
                    <div>4</div>
                    <div class="board-titles-div">소나무정보기술 공휴일 휴무안내</div>
                    <div>2023.01.13</div>
                </div>
                <div class="table-text">
                    <div>3</div>
                    <div class="board-titles-div">소나무정보기술 공휴일 휴무안내</div>
                    <div>2023.01.12</div>
                </div>
                <div class="table-text">
                    <div>2</div>
                    <div class="board-titles-div">소나무정보기술 공휴일 휴무안내</div>
                    <div>2023.01.11</div>
                </div>
                <div class="table-text">
                    <div>1</div>
                    <div class="board-titles-div">소나무정보기술 공휴일 휴무안내</div>
                    <div>2023.01.10</div>
                </div>
            </div>
            
        </div>
    </section>
    
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

 

    #secNotice{
        @apply flex flex-col pt-10;
    }
    .cs-container{
        @apply container max-w-screen-xl mx-auto;
    }

/* subPageHero */

    #tempSubPageHero{
        @apply relative w-full h-96 flex items-end;
        background:url(@/assets/images/subHeroBack.png) no-repeat;
        
    }

    #divHeroSubline{
        @apply flex container max-w-screen-xl mx-auto;
        > ul{
            @apply flex;
        }
    }

    #ulHeroSub{
        > li{
            @apply w-48 h-10 text-base flex justify-center items-center hover:opacity-100 hover:text-black cursor-pointer opacity-50;
            // background:rgba(255,255,255, .5);
            background-color: rgb(var(--clr-base));
            font-family:'NS-Neo';
        }
    }

    #ulBreadCrumbs{
        @apply items-center ml-auto drop-shadow-lg;
        > li{
            @apply text-white text-base;
            & + li:before{
                content:'>';
                @apply pr-2 pl-2;
            }
        }
    }

/* divNotice */    

    #divNotice{
        @apply w-full border-black border-t-2 px-1.5;
        
    }

    .table-title{
        @apply grid text-center text-base text-black border-b border-black py-2;
        grid-template-columns:6rem 1fr 10rem;        
    }

    .table-text{
        @apply grid text-center cursor-pointer;
        grid-template-columns:6rem 1fr 10rem; 
        border-bottom:1px solid rgba(0,0,0, .15);
        > div{
            @apply text-black py-3;
            font-size:var(--fnt-title-sm);
        }
    }

    .board-titles-div{
        @apply text-start px-2;
    }

    #divSearchLine{
        @apply border-gray-100 w-full h-8 mb-4 flex justify-end;
        > * {
            @apply h-full;
        }
    }

    [data-totalsearch-select]{
        @apply w-24;
    }

    [data-totalsearch-input]{
        @apply w-80;
    }

</style>
