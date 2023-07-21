<script lang="ts">
    import Header from "@/components/Header/Header.svelte";

    import Price from "@/components/Price.svelte";

    import Main from "@/components/Main.svelte";

    import Notice from "@/components/Notice.svelte";
    import {push} from "svelte-spa-router";
    import {imgFile} from "@/store/index.js";
    import {onMount} from "svelte";

    let isOpenNotice: boolean = false;
    let headerChild;
    let loginContext;
    let isMiniNav:boolean = true;

    const openNotice = (text) => {
        isOpenNotice = true;
        loginContext = text;
        setTimeout(() => {
            isOpenNotice = false;
        }, 3600)
    }
    const openIsMiniNav = ()=> {
        isMiniNav = !isMiniNav
    }
    onMount(() => {
        loginContext = headerChild?.loginContext;
    })

</script>

{#if isOpenNotice}
    <Notice loginContext="{loginContext}"></Notice>
{/if}


<main class="svelte-8v4fb7">
    <div class="flex w-full flex-col">
        {#if isMiniNav}
            <div class="fixed z-30 h-16 w-16 h-full w-full ml-10 lg:ml-10 lg:hidden tw-xs:mt-[30px] mt-[210px]">
                <div class="relative inline-block text-left">
                    <button type="button" class="close-button svelte-1rchqx8" on:click={openIsMiniNav}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             class="h-9 w-9 m-auto pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                                  fill="white"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H19C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                                  fill="white"></path>
                        </svg>
                    </button>
                </div>
            </div>
        {:else }
            <div class="fixed z-30 h-16 w-16 h-full w-full ml-10 lg:ml-10 lg:hidden tw-xs:mt-[30px] ml-[calc(50%-32px)] mt-[50px]">
                <div class="relative inline-block text-left">
                    <button type="button" class="close-button svelte-1rchqx8"  on:click={openIsMiniNav}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             class="h-9 w-9 m-auto pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.53034 5.46965C6.23745 5.17676 5.76257 5.17676 5.46968 5.46965C5.17679 5.76255 5.17679 6.23742 5.46968 6.53031L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0606L17.4697 18.5303C17.7626 18.8232 18.2375 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53032C18.8232 6.23743 18.8232 5.76256 18.5303 5.46966C18.2374 5.17677 17.7626 5.17677 17.4697 5.46966L12 10.9393L6.53034 5.46965Z"
                                  fill="white"></path>
                        </svg>
                    </button>
                    <div class="absolute z-10 mt-2 right-[calc(50%-172px)] top-[70px] lg:top-[-30px] lg:right-[-370px] origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none menu-main svelte-1rchqx8"
                         role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <span
                            class="group flex items-center px-4 py-5 mx-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"
                            role="menuitem" tabindex="-1" id="menu-item-1"
                            on:click={headerChild?.openAbout}

                        ><svg
                            class="ml-2 mr-6 h-7 w-7 text-gray-400 group-hover:text-gray-50" width="24.5px"
                            height="27.65px"
                            viewBox="0 0 24.5 27.65" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1"
                                                                          fill="none" fill-rule="evenodd"><g
                            id="Artboard-Copy-162" transform="translate(-136.321048, -508.071047)" fill="#C6C4BC"><g
                            id="person" transform="translate(136.321048, 508.071048)"><path
                            d="M12.25,11.9 C14.9562,11.9 17.15,9.7062 17.15,7 C17.15,4.2938 14.9562,2.1 12.25,2.1 C9.5438,2.1 7.35,4.2938 7.35,7 C7.35,9.7062 9.5438,11.9 12.25,11.9 Z M12.25,14 C16.11596,14 19.25,10.865988 19.25,7 C19.25,3.134012 16.11596,0 12.25,0 C8.384012,0 5.25,3.134012 5.25,7 C5.25,10.865988 8.384012,14 12.25,14 Z"
                            id="Shape"></path><path
                            d="M8.05,19.25 C4.763906,19.25 2.1,21.91392 2.1,25.2 L2.1,26.6 C2.1,27.17988 1.629894,27.65 1.05,27.65 C0.470106,27.65 0,27.17988 0,26.6 L0,25.2 C0,20.75416 3.604104,17.15 8.05,17.15 L16.45,17.15 C20.89584,17.15 24.5,20.75416 24.5,25.2 L24.5,26.6 C24.5,27.17988 24.02988,27.65 23.45,27.65 C22.87012,27.65 22.4,27.17988 22.4,26.6 L22.4,25.2 C22.4,21.91392 19.73608,19.25 16.45,19.25 L8.05,19.25 Z"
                            id="Path"></path></g></g></g></svg>
          关于</span>
                        <span
                            class="group flex items-center px-4 py-5 mx-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-1"
                            on:click={headerChild?.openPrice}
                        ><svg
                            class="ml-2 mr-6 h-7 w-7 text-gray-400 group-hover:text-gray-50" width="24px" height="30px"
                            viewBox="0 0 24 30" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"><title>arrow_up</title><g id="Page-1"
                                                                                                 stroke="none"
                                                                                                 stroke-width="1"
                                                                                                 fill="none"
                                                                                                 fill-rule="evenodd"><g
                            id="Artboard-Copy-105" transform="translate(-137.000000, -372.000000)" fill="#C6C4BC"
                            fill-rule="nonzero"><g id="arrow_up" transform="translate(137.000000, 372.464286)"><path
                            d="M2.63277279,12.0734297 C2.16530215,12.5409163 1.40736416,12.5409163 0.939893516,12.0734297 C0.472422876,11.6059431 0.472422876,10.848069 0.939893516,10.3805984 L10.1857698,1.13478595 C11.2765186,0.0440051602 13.0449555,0.0440051602 14.1357044,1.13478595 L23.3815327,10.3805984 C23.8490193,10.848069 23.8490193,11.6059431 23.3815327,12.0734297 C22.9140461,12.5409163 22.1562358,12.5409163 21.6887492,12.0734297 L13.3577837,3.74255996 L13.3577837,27.1876594 C13.3577837,27.8487483 12.821826,28.384706 12.1607371,28.384706 C11.4996481,28.384706 10.9636905,27.8487483 10.9636905,27.1876594 L10.9636905,3.74255996 L2.63277279,12.0734297 Z"
                            id="Path"></path></g></g></g></svg>
          价格</span>
                        <a href="https://docs.palette.fm/"
                        class="group flex items-center px-4 py-5 mx-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"
                        role="menuitem" tabindex="-1" id="menu-item-1">
                        <svg class="ml-2 mr-6 h-7 w-7 text-gray-400 group-hover:text-gray-50" width="28.142148px"
                             height="28.142148px" viewBox="0 0 28.142148 28.142148" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard-Copy-162" transform="translate(-136.000000, -375.000000)"
                                   fill="#C6C4BC">
                                    <g id="design" transform="translate(136.000000, 375.000000)">
                                        <path d="M1.22766811,5.17948585 C-0.409222705,6.81637667 -0.409222705,9.47031464 1.22766811,11.1072055 L5.20853316,15.0880426 L6.69046306,13.6061965 L5.42653471,12.3421703 L7.8963946,9.87235236 C8.30562778,9.46313315 8.30562778,8.79965564 7.8963946,8.39042246 C7.48717538,7.98120325 6.8236839,7.98120325 6.41446469,8.39042246 L3.94460481,10.8602823 L2.70959802,9.62527556 C1.89115959,8.80683713 1.89115959,7.47986815 2.70959802,6.66141575 L6.66141575,2.70959802 C7.47986815,1.89115959 8.80683713,1.89115959 9.62527556,2.70959802 L13.6061965,6.69046306 L15.0880426,5.20853316 L11.1072055,1.22766811 C9.47031464,-0.409222705 6.81637667,-0.409222705 5.17948585,1.22766811 L1.22766811,5.17948585 Z"
                                              id="Path" fill-rule="nonzero"></path>
                                        <path d="M13.1121547,22.9917339 L10.0382671,26.0656633 C9.84320725,26.2607093 9.59478915,26.3937205 9.32430963,26.4477913 L1.91466011,27.9297771 C0.937027327,28.1252422 0.0750808065,27.2633236 0.270615747,26.2857187 L1.75254565,18.8760692 C1.80663038,18.6055757 1.93958575,18.3571576 2.13463168,18.1621117 L18.6307249,1.6660045 C20.2676576,0.0290997068 22.9215956,0.0290997068 24.5583886,1.6660045 L26.5342765,3.64190638 C28.1712093,5.2787972 28.1712093,7.93273517 26.5342765,9.56962599 L22.9917339,13.1121547 L26.9144484,17.0348692 C28.5513812,18.6718019 28.5513812,21.3257399 26.9144484,22.9626726 L22.9626726,26.9144484 C21.3257399,28.5513812 18.6718019,28.5513812 17.0348692,26.9144484 L13.1121547,22.9917339 Z M21.5098878,14.5941404 L25.4326024,18.516855 C26.250929,19.3353213 26.250929,20.6622205 25.4326024,21.4806868 L21.4806868,25.4326024 C20.6622205,26.250929 19.3353213,26.250929 18.516855,25.4326024 L17.2818901,24.1976375 L18.7638759,22.7156517 C19.1729694,22.3064185 19.1729694,21.6430388 18.7638759,21.2338056 C18.3546427,20.8245725 17.6911233,20.8245725 17.2818901,21.2338056 L15.800044,22.7156517 L14.5941404,21.5098878 L21.5098878,14.5941404 Z M25.0524305,5.12383628 L23.0765426,3.1479344 C22.2580762,2.32948201 20.9310374,2.32948201 20.1127107,3.1479344 L17.8896622,5.37087117 L22.8295216,10.3106329 L25.0524305,8.08769609 C25.8708968,7.26924369 25.8708968,5.94228868 25.0524305,5.12383628 Z M3.7661294,19.4944598 L16.4078161,6.85280108 L21.3475359,11.7925208 L8.70589109,24.4341796 L2.53119247,25.6691445 L3.7661294,19.4944598 Z"
                                              id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Tools &amp; API</a>
<!--                        <span-->
<!--                            class="group flex items-center px-4 py-5 mx-2 mb-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"-->
<!--                            role="menuitem" tabindex="-1" id="menu-item-1"><svg-->
<!--                            class="ml-2 mr-6 h-8 w-8 text-gray-400 group-hover:text-gray-5" width="28px" height="32px"-->
<!--                            viewBox="0 0 28 32" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
<!--                            xmlns:xlink="http://www.w3.org/1999/xlink"><title>login</title><g id="Page-1" stroke="none"-->
<!--                                                                                              stroke-width="1"-->
<!--                                                                                              fill="none"-->
<!--                                                                                              fill-rule="evenodd"><g-->
<!--                            id="Artboard-Copy-108" transform="translate(-138.000000, -296.000000)" fill="#C6C4BC"><g-->
<!--                            id="login" transform="translate(138.000000, 296.000000)"><path-->
<!--                            d="M27.6111111,4.66666667 C27.6111111,2.30412 25.6959111,0.388888889 23.3333333,0.388888889 L14,0.388888889 C11.6374222,0.388888889 9.72222222,2.30412 9.72222222,4.66666667 L9.72222222,6.22222222 C9.72222222,6.86654889 10.2445622,7.38888889 10.8888889,7.38888889 C11.5332,7.38888889 12.0555556,6.86654889 12.0555556,6.22222222 L12.0555556,4.66666667 C12.0555556,3.59277333 12.9260444,2.72222222 14,2.72222222 L23.3333333,2.72222222 C24.4072889,2.72222222 25.2777778,3.59277333 25.2777778,4.66666667 L25.2777778,26.4444444 C25.2777778,27.5184 24.4072889,28.3888889 23.3333333,28.3888889 L14,28.3888889 C12.9260444,28.3888889 12.0555556,27.5184 12.0555556,26.4444444 L12.0555556,24.8888889 C12.0555556,24.2445778 11.5332,23.7222222 10.8888889,23.7222222 C10.2445622,23.7222222 9.72222222,24.2445778 9.72222222,24.8888889 L9.72222222,26.4444444 C9.72222222,28.8070222 11.6374222,30.7222222 14,30.7222222 L23.3333333,30.7222222 C25.6959111,30.7222222 27.6111111,28.8070222 27.6111111,26.4444444 L27.6111111,4.66666667 Z"-->
<!--                            id="Path"></path><path-->
<!--                            d="M14.8249111,9.28615333 C14.3692889,8.83054667 13.6307111,8.83054667 13.1750889,9.28615333 C12.7194667,9.74176 12.7194667,10.4804622 13.1750889,10.9360689 L16.6278,14.3888889 L1.55555556,14.3888889 C0.911228889,14.3888889 0.388888889,14.9112444 0.388888889,15.5555556 C0.388888889,16.1998667 0.911228889,16.7222222 1.55555556,16.7222222 L16.6278,16.7222222 L13.1750889,20.1750889 C12.7194667,20.6307111 12.7194667,21.3692889 13.1750889,21.8249111 C13.6307111,22.2805333 14.3692889,22.2805333 14.8249111,21.8249111 L19.1694222,17.4804 C20.2324889,16.4173333 20.2324889,14.6937778 19.1694222,13.6307111 L14.8249111,9.28615333 Z"-->
<!--                            id="Path" fill-rule="nonzero"></path></g></g></g></svg>-->
<!--            Sign in</span>-->
                    </div>
                </div>
            </div>
        {/if}
        <logo class="svelte-1ccwnz8"
        ><a on:click={()=>{
                imgFile.subscribe(value=>{
                    if (value.base64) {
                        push('/action')
                    }
                })
            }}
        ><img src="./src/assets/svg/P.svg" alt=""/></a
        ></logo
        >
        <Header openNotice={openNotice} bind:this={headerChild}/>
        <!-- TODO 配置颜色     -->
        <Main/>

        <!-- svelte-ignore a11y-missing-attribute -->
        <div
                class="bg-[var(--button-color)"
                style="-webkit-touch-callout: none;"
        >
            <iframe
                    title=""
                    id="testimonialto-palette-dark-animated"
                    style="z-index: 1; pointer-events: none; overflow: hidden; position: relative; width: 100%; height: 800px;"
                    frameborder="0"
                    scrolling="no"
                    width="100%"
                    height="1200px"
                    src="../../public/photoWall/palette.svelte"
                    class="svelte-1ccwnz8"
            />
        </div>

        <testimonial-show-more class="bg-[var(--button-color)] flex"
        >
            <button class="button-show-more svelte-1ccwnz8">展示更多
            </button
            >
        </testimonial-show-more
        >

        <demo-wrapper
                class="w-full tw-xs:h-[620px] lg:h-[1000px] bg-[var(--button-color)] flex flex-col justify-between items-center svelte-1ccwnz8"
        >
            <title-demo
                    class="tw-xs:text-[28px] lg:text-[44px] lg:leading-[44px] w-full text-large-header text-white text-[#fff] text-center font-extrabold tw-xs:mt-[80px] lg:mt-[90px]"
            >
                3 秒教程
            </title-demo
            >
            <sub-title-demo
                    class="tw-xs:text-[20px] lg:text-[28px] tw-xs:leading-[25px] lg:leading-[32px] w-full text-large-header text-white text-[#EEEEEE] text-center font-semibold tw-xs:mt-[20px] lg:mt-[30px]"
            >1.选择你心仪的滤镜 💅 <br/>
                <!-- svelte-ignore a11y-media-has-caption -->
                2. 用文本编辑您的着色
            </sub-title-demo
            >
            <screen-wrapper class=" svelte-1ccwnz8"
            >
                <mac-screen-shadow class="svelte-1ccwnz8"
                >
                    <screen-shadow class="svelte-1ccwnz8"
                    >
                        <dim-video
                        >
                            <screen-top class="svelte-1ccwnz8"
                            ><img
                                    style="width: 40px; height: 10px; margin: 12px;"
                                    src="landing_images/traffic_dots.svg"
                                    alt=""
                            /></screen-top
                            >
                            <screen-main class="svelte-1ccwnz8"
                            >
                                <video
                                        width="960"
                                        height="540"
                                        poster="./src/assets/demo/01.jpeg"
                                        class="svelte-1ccwnz8"
                                        autoplay
                                        playsinline
                                        loop
                                >
                                    <source
                                            src="./src/assets/demo/demo_tiny2.mp4"
                                            type="video/mp4"
                                    />
                                </video
                                >
                            </screen-main
                            >
                        </dim-video
                        >
                    </screen-shadow
                    >
                </mac-screen-shadow
                >
            </screen-wrapper>
            <div class="flex w-full tw-xs:h-[200px] lg:h-[250px]">
                <button class="button-show-more svelte-1ccwnz8"
                >3 分钟演示
                </button
                >
            </div>
        </demo-wrapper
        >

        <Price openHeadPrice={headerChild?.openPrice}/>

        <faq-wrapper
                class="w-full bg-[var(--button-color)] flex flex-col justify-between items-center svelte-1ccwnz8"
        >
            <div class="mt-[100px]">
                <div class="flex mx-auto lg:w-[650px] tw-xs:w-[90%]">
                    <div class="mx-auto lg:w-[650px] tw-xs:w-[90%]">
                        <h1
                                class="text-center tw-xs:text-[28px] tw-xs:mt-[20px] lg:mt-0 lg:text-[44px] font-extrabold text-white"
                        >
                            FAQ
                        </h1>
                        <h2
                                class="text-center tw-xs:text-[20px] lg:text-[28px] font-semibold text-[#C6C4BC]"
                        >
                            经常问的问题
                        </h2>
                        <dl class="mt-10 space-y-6">
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >着色的准确度如何？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >这与其他有何不同
                                            调色服务？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >什么是学分以及付款是如何运作？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >订阅和一次性购买相比有何不同？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >有什么我应该注意的限制吗？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="pt-8"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <dt class="text-lg">
                                    <button
                                            type="button"
                                            class="flex w-full items-start justify-between text-left text-main-color font-bold"
                                            aria-controls="faq-0"
                                            aria-expanded="false"
                                    ><span
                                            class="question-faq leading-[20px] mb-[8px] font-medium svelte-dsyou8"
                                    >我遇到了问题。我应该怎么办？</span
                                    >
                                        <span
                                                class="ml-6 flex h-[20px] items-center"
                                        ><svg
                                                width="30px"
                                                height="30px"
                                                class="mt-[1px]"
                                                viewBox="0 0 39 39"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                        ><g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                        ><g
                                                id="Artboard-Copy-91"
                                                transform="translate(-1114.000000, -2376.000000)"
                                        ><g
                                                id="add_circled"
                                                opacity="0.796386719"
                                                transform="translate(1114.000000, 2376.000000)"
                                                fill="#EAE6DA"
                                        ><path
                                                d="M20.9661654,11.6804511 C20.9661654,10.8707173 20.3097143,10.2142857 19.5,10.2142857 C18.6902857,10.2142857 18.0338346,10.8707173 18.0338346,11.6804511 L18.0338346,18.0338346 L11.6804511,18.0338346 C10.8707173,18.0338346 10.2142857,18.6902857 10.2142857,19.5 C10.2142857,20.3097143 10.8707173,20.9661654 11.6804511,20.9661654 L18.0338346,20.9661654 L18.0338346,27.3195489 C18.0338346,28.1292632 18.6902857,28.7857143 19.5,28.7857143 C20.3097143,28.7857143 20.9661654,28.1292632 20.9661654,27.3195489 L20.9661654,20.9661654 L27.3195489,20.9661654 C28.1292632,20.9661654 28.7857143,20.3097143 28.7857143,19.5 C28.7857143,18.6902857 28.1292632,18.0338346 27.3195489,18.0338346 L20.9661654,18.0338346 L20.9661654,11.6804511 Z"
                                                id="Path"
                                                fill-rule="nonzero"
                                        /><path
                                                d="M19.5,36.075 C28.65408,36.075 36.075,28.65408 36.075,19.5 C36.075,10.345881 28.65408,2.925 19.5,2.925 C10.345881,2.925 2.925,10.345881 2.925,19.5 C2.925,28.65408 10.345881,36.075 19.5,36.075 Z M19.5,39 C30.26946,39 39,30.26946 39,19.5 C39,8.7304425 30.26946,0 19.5,0 C8.7304425,0 0,8.7304425 0,19.5 C0,30.26946 8.7304425,39 19.5,39 Z"
                                                id="Shape"
                                        /></g
                                        ></g
                                        ></g
                                        ></svg
                                        ></span
                                        ></button
                                    >
                                </dt>
                            </div>
                            <div
                                    class="border-t-2 h-50 flex justify-center items-center mb-10 p-10"
                                    style="border-top-width: 2px; border-color: rgb(30, 26, 26);"
                            >
                                <button
                                        type="button"
                                        class="button-show-more svelte-zmc5z1"
                                >了解更多
                                </button
                                >
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </faq-wrapper
        >

        <div class="md:flex w-full h-[500px] bg-[var(--button-color)">
            <div
                    class="bg-[var(--button-color)] w-full px-14 pb-14"
                    aria-labelledby="footer-heading"
            >
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="w-full py-12 md:py-16">
                    <div class="grid grid-cols-2 gap-8">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-base font-medium text-white">
                                    Palette
                                </h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <button
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >About
                                        </button
                                        >
                                    </li>
                                    <li>
                                        <button
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Pricing
                                        </button
                                        >
                                    </li>
                                    <li>
                                        <button
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >FAQ
                                        </button
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://platform.palette.fm/home"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >API &amp; Tools</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-base font-medium text-white">
                                    Engage
                                </h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a
                                                href="mailto:emil@palette.fm"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Contact Us</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://palette.getrewardful.com/signup"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Affiliate Program</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://forms.gle/6sANyKczjGeCCWaEA"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Jobs</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://testimonial.to/palette/all"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Testimonials</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-base font-medium text-white">
                                    Social
                                </h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a
                                                href="https://twitter.com/palettefm_bot"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Twitter</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://github.com/emilwallner/Coloring-greyscale-images"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >GitHub</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="https://www.youtube.com/watch?v=xKPk7tG2upc"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >YouTube</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-base font-medium text-white">
                                    Legal
                                </h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a
                                                href="/privacy"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Privacy</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                                href="/tos"
                                                target="noreferrer"
                                                class="text-base text-[var(--accent-color)] hover:text-white"
                                        >Terms</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                            class="mt-8 border-opacity-10 pt-8 md:flex md:items-center md:justify-between"
                    >
                        <div class="flex space-x-6 md:order-2">
                            <a
                                    href="https://twitter.com/palettefm_bot"
                                    target="noreferrer"
                                    class="text-[var(--accent-color)] hover:text-gray-300"
                            ><span class="sr-only">Twitter</span>
                                <svg
                                        class="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                >
                                    <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg
                                >
                            </a
                            >
                            <a
                                    href="https://github.com/emilwallner/Coloring-greyscale-images"
                                    target="noreferrer"
                                    class="text-[var(--accent-color)] hover:text-gray-300"
                            ><span class="sr-only">GitHub</span>
                                <svg
                                        class="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                >
                                    <path
                                            fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"
                                    />
                                </svg
                                >
                            </a
                            >
                        </div>
                        <p
                                class="mt-8 text-base text-[var(--accent-color)] md:order-1 md:mt-0"
                        >
                            <!--                            © 2023 Palette. All rights reserved.-->
                            © 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    @import '@/style/nav.css';
</style>
