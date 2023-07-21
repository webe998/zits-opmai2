<script lang="ts">
    import {push} from 'svelte-spa-router';
    import PopUp from "@/components/PopUp.svelte";
    import PopUp_price from "@/components/Header/moudle/PopUp_price.svelte";
    import {imgToBase64} from "@/util/imgToBase";
    import {imgFile} from "@/store";
    import empress from "../../assets/img/empress.jpeg"
    import picnic from "../../assets/img/picnic.jpg"
import HeadTop from './HeadTop.svelte';
    export let openNotice;
    // Data
    let isLogin: boolean = false;
    let openLogin: boolean = false;
    let isAbout: boolean = false;
    let isPrice: boolean = false; 
    let loginContext:string = '';

    // method
    const loginOpretion = (opLogin: number) => {
        switch (opLogin) {
            case 0: { // openLogin
                clickLogin(true);
                break;
            }
            case 1: { // doingLogin
                isLogin = true;
                clickLogin(false);
                openNotice(loginContext);
                break;
            }
            case 2: { // loginOut
                isLogin = false;
                break;
            }
        }
    };

    const clickLogin = (login: boolean = false) => openLogin = login;
    const uploadImg = () => {
        let input = document.createElement("input");
        input.type = "file";
        input.accept="image/webp, image/png, image/jpeg";
        input.click();
        input.onchange = async function (e: any) {
            const imgFileObj = e.target.files[0];
            if(imgFileObj) {
                const url = URL.createObjectURL(imgFileObj);
                const base64 = await imgToBase64(url,imgFileObj.type);
                imgFile.set(base64);
                await push('/action')
            }
        }
    }
    const useUpload = async (index)=>{
        if(index == 0) { // first
            imgFile.set(await imgToBase64(empress,empress.type));
        }else { // second
            imgFile.set(await imgToBase64(picnic,picnic.type));
        }
        await push('/action')
    }
    export const openAbout = () => {
        isAbout = !isAbout
    }
    export const openPrice = () => {
        isPrice = !isPrice
    }

    function mouseOver(e) {
  // 鼠标移入事件处理逻辑
  console.log(e.target);
  e.target.classList.add('transition','duration-1000')
  e.target.play();
}

function mouseOut(e) {
  // 鼠标移出事件处理逻辑
 
  e.target.pause();
  e.target.currentTime = 0;
}

</script>

{#if !isLogin && openLogin}
    <div
            class="absolute z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
    >
        <div
                class="fixed inset-0 bg-opacity-75 transition-opacity back-blur svelte-1fj400q"
        />
        <div class="fixed inset-0 z-30 overflow-y-auto">
            <div
                    class="flex min-h-full justify-center p-4 text-center items-center sm:p-0"
            >
                <div
                        class="relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all my-8 w-full max-w-sm p-6 form-container svelte-1fj400q"
                >
                    <button
                            type="button"
                            class="absolute flex right-3 top-3 h-12 w-12 rounded-lg align-center justify-center hover:bg-black"
                            on:click={() => clickLogin(false)}
                    >
                        <svg
                                class="flex m-auto"
                                width="20"
                                height="20"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M1.28034 0.219668C0.987448 -0.0732225 0.512568 -0.0732225 0.219678 0.219668C-0.0732125 0.512568 -0.0732125 0.987438 0.219678 1.28033L5.6893 6.75002L0.219668 12.2197C-0.0732225 12.5126 -0.0732225 12.9874 0.219668 13.2803C0.512558 13.5732 0.987438 13.5732 1.28033 13.2803L6.75 7.81062L12.2197 13.2803C12.5126 13.5732 12.9875 13.5732 13.2803 13.2803C13.5732 12.9874 13.5732 12.5126 13.2803 12.2197L7.8107 6.75002L13.2803 1.28034C13.5732 0.987448 13.5732 0.512578 13.2803 0.219678C12.9874 -0.0732125 12.5126 -0.0732125 12.2197 0.219678L6.75 5.68932L1.28034 0.219668Z"
                                    fill="white"
                            />
                        </svg
                        >
                    </button
                    >
                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div class="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                                <h2
                                        class="text-center sm:text-left font-bold create-account svelte-xb0msn"
                                >
                                    Please Sign in
                                </h2>
                            </div>
                            <div class="mt-2">
                                <div class="flex flex-col">
                                    <div>
                                        <button
                                                class="inline-flex w-full continue-w-google items-center justify-center py-2 px-4 font-medium hover:bg-gray-50 svelte-xb0msn"
                                        ><span class="sr-only"
                                        >Sign in with Google</span
                                        >
                                            <svg
                                                    class="mr-5"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                        d="M0 7.5C0 3.3645 3.3645 0 7.5 0C9.17021 0 10.7511 0.537357 12.0717 1.554L10.3289 3.818C9.51229 3.18943 8.53407 2.85714 7.5 2.85714C4.93993 2.85714 2.85714 4.93993 2.85714 7.5C2.85714 10.0601 4.93993 12.1429 7.5 12.1429C9.56193 12.1429 11.3141 10.7919 11.918 8.92857H7.5V6.07143H15V7.5C15 11.6355 11.6355 15 7.5 15C3.3645 15 0 11.6355 0 7.5Z"
                                                        fill="white"
                                                />
                                            </svg
                                            >
                                            Continue with Google
                                        </button
                                        >
                                    </div>
                                    <div class="flex flex-row h-10">
                                        <div
                                                class="inset-0 flex items-center w-5/12 mx-2"
                                        >
                                            <div
                                                    class="w-full border-t border-white-tran svelte-xb0msn"
                                            />
                                        </div>
                                        <div
                                                class="relative flex items-center justify-center font-bold or-divider w-2/12 h-10 svelte-xb0msn"
                                        >
                                            <span class="px-2">or</span>
                                        </div>
                                        <div
                                                class="inset-0 flex items-center w-5/12 mx-2"
                                        >
                                            <div
                                                    class="w-full border-t border-white-tran svelte-xb0msn"
                                            />
                                        </div>
                                    </div>
                                    <form class="space-y-3">
                                        <div>
                                            <div class="mt-1">
                                                <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        aria-label="email"
                                                        autocomplete="email"
                                                        bind:value={loginContext}
                                                        required
                                                        class="block w-full appearance-none px-3 py-2 placeholder-gray-500 email-placeholder email-form focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm svelte-xb0msn"
                                                        placeholder="emil@palette.fm"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                    type="submit"
                                                    class="flex w-full justify-center rounded-md border-transparent py-2 px-4 font-medium sign-on-button items-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 svelte-xb0msn"
                                                    on:click={()=>loginOpretion(1)}
                                            >Get a sign-in link by email
                                            </button
                                            >
                                        </div>
                                    </form>
                                    <p
                                            class="mt-1 text-center or-sign-in mt-10 font-normal svelte-xb0msn"
                                    >
                                        or
                                        <button class="underline cursor-pointer"
                                        >create account
                                        </button
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<div class="flex w-full flex-col">

    <landing-wrapper class=" svelte-1ccwnz8"
    >
  
        <!-- <landing-left class=" svelte-1ccwnz8"
        >
        
          
        </landing-left
        > -->
        <landing-right class=" svelte-1ccwnz8"
        >
            <!-- <landing-square class="svelte-1ccwnz8"
            >
                <landing-drag-n-drop class=" svelte-slfu3l"
                >
                    <dnd-area class="svelte-slfu3l"
                    >
                        <button-text-wrapper class="svelte-slfu3l"
                        >
                            <drop-a-file class="svelte-slfu3l"
                            >拖拽文件 或
                            </drop-a-file
                            >
                            <button
                                    class="upload-button-fresh svelte-slfu3l"
                                    type="button"
                                    on:click={uploadImg}
                            >
                                <button-text class="svelte-slfu3l"
                                >上传图片
                                </button-text
                                >
                            </button
                            >
                        </button-text-wrapper
                        >
                        <input
                                style="display:none"
                                type="file"
                                accept="image/webp, image/png, image/jpeg"
                        />
                        <example-wrapper class="svelte-slfu3l"
                        >
                            <example-images class="svelte-slfu3l"
                            >
                                <example-text class="svelte-slfu3l"
                                >或者使用一个 例子
                                </example-text
                                >
                                <button
                                        type="button"
                                        class="first-image svelte-slfu3l"
                                        on:click={()=>{
                                        useUpload(0)
                                        }}
                                ></button>
                                <button
                                        type="button"
                                        class="second-image svelte-slfu3l"
                                        on:click={()=>{
                                        useUpload(1)
                                        }}
                                />
                            </example-images
                            >
                        </example-wrapper
                        >
                    </dnd-area
                    >
                    <user-numbers-wrapper class="svelte-slfu3l"
                    >
                        <profile-pics
                        ><img
                                src="/profile_pics.png"
                                alt=""
                                class="tw-xs:w-[140px] h-[auto] md:w-[190px]"
                        /></profile-pics
                        >
                        <user-and-stars class="flex flex-col ml-[10px]"
                        >
                            <user-stars
                            ><img
                                    src="../src/assets/svg/five_stars.svg"
                                    alt=""
                                    class="tw-xs:w-[100px] h-[auto] md:w-[140px] mt-[8px]"
                            />
                                <user-numbers
                                        class="mr-[4px] font-normal tw-xs:text-[0.65rem] md:text-[0.8rem]"
                                >受到 1,842,914 人的信任
                                </user-numbers
                                >
                            </user-stars
                            >
                        </user-and-stars
                        >
                    </user-numbers-wrapper
                    >
                </landing-drag-n-drop
                >
            </landing-square
            > -->
            <made-by class="svelte-1ccwnz8"
            >
                <div class="flex mr-[40px] my-auto">
                    <button on:click={openAbout}>关于
                    </button>
                </div>
                <div class="flex my-auto mr-[30px]">
                    <button
                    on:click={openPrice}
                    >价格</button>
                </div>
                <div class="flex my-auto mr-[30px]">
                    <!-- <a
                        href="https://platform.palette.fm/home"
                        target="noreferrer"
                        >工具 &amp; API</a> -->
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="">工具 &amp; API</a>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                {#if isLogin}
                    <span
                        class="group flex items-center px-5 pr-8 py-3 text-white hover:bg-[rgba(255,255,255,0.04)] app-button cursor-pointer svelte-1ccwnz8"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        on:click={()=>loginOpretion(2)}
                ><svg
                        class="mt-[3px] mr-5 h-8 w-8 text-white"
                        width="28px"
                        height="23px"
                        viewBox="0 0 28 23"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                ><title>arrow_forward</title><g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                ><g
                        id="arrow_forward"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                ><path
                        d="M16.2717882,20.9692151 C15.8054334,21.433816 15.8054334,22.1869485 16.2717882,22.6515493 C16.7381431,23.1161502 17.4941188,23.1161502 17.9604737,22.6515493 L27.1839188,13.462794 C28.2720271,12.3787781 28.2720271,10.6212576 27.1839188,9.53724171 L17.9604737,0.348438764 C17.4941188,-0.116146255 16.7381431,-0.116146255 16.2717882,0.348438764 C15.8054334,0.813023783 15.8054334,1.56628314 16.2717882,2.03086816 L24.5824261,10.3103604 L1.19414867,10.3103604 C0.534644243,10.3103604 0,10.8430097 0,11.5000178 C0,12.157026 0.534644243,12.6896753 1.19414867,12.6896753 L24.5824261,12.6896753 L16.2717882,20.9692151 Z"
                        id="Path"
                /></g
                ></g
                ></svg
                >
                        App</span
                >
                {:else}
                    <span
                            class="group flex items-center px-5 pr-8 py-3 text-white hover:bg-[rgba(255,255,255,0.04)] login-button cursor-pointer svelte-1ccwnz8"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-1"
                            on:click={()=>loginOpretion(0)}
                    ><svg
                            class="mt-[3px] mr-5 h-8 w-8 text-white"
                            width="28px"
                            height="32px"
                            viewBox="0 0 28 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                    ><title>login</title><g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="#ffffff"
                            fill-rule="evenodd"
                    ><g
                            id="Artboard-Copy-108"
                            transform="translate(-138.000000, -296.000000)"
                            fill="#ffffff"
                    ><g
                            id="login"
                            transform="translate(138.000000, 296.000000)"
                    ><path
                            d="M27.6111111,4.66666667 C27.6111111,2.30412 25.6959111,0.388888889 23.3333333,0.388888889 L14,0.388888889 C11.6374222,0.388888889 9.72222222,2.30412 9.72222222,4.66666667 L9.72222222,6.22222222 C9.72222222,6.86654889 10.2445622,7.38888889 10.8888889,7.38888889 C11.5332,7.38888889 12.0555556,6.86654889 12.0555556,6.22222222 L12.0555556,4.66666667 C12.0555556,3.59277333 12.9260444,2.72222222 14,2.72222222 L23.3333333,2.72222222 C24.4072889,2.72222222 25.2777778,3.59277333 25.2777778,4.66666667 L25.2777778,26.4444444 C25.2777778,27.5184 24.4072889,28.3888889 23.3333333,28.3888889 L14,28.3888889 C12.9260444,28.3888889 12.0555556,27.5184 12.0555556,26.4444444 L12.0555556,24.8888889 C12.0555556,24.2445778 11.5332,23.7222222 10.8888889,23.7222222 C10.2445622,23.7222222 9.72222222,24.2445778 9.72222222,24.8888889 L9.72222222,26.4444444 C9.72222222,28.8070222 11.6374222,30.7222222 14,30.7222222 L23.3333333,30.7222222 C25.6959111,30.7222222 27.6111111,28.8070222 27.6111111,26.4444444 L27.6111111,4.66666667 Z"
                            id="Path"
                    /><path
                            d="M14.8249111,9.28615333 C14.3692889,8.83054667 13.6307111,8.83054667 13.1750889,9.28615333 C12.7194667,9.74176 12.7194667,10.4804622 13.1750889,10.9360689 L16.6278,14.3888889 L1.55555556,14.3888889 C0.911228889,14.3888889 0.388888889,14.9112444 0.388888889,15.5555556 C0.388888889,16.1998667 0.911228889,16.7222222 1.55555556,16.7222222 L16.6278,16.7222222 L13.1750889,20.1750889 C12.7194667,20.6307111 12.7194667,21.3692889 13.1750889,21.8249111 C13.6307111,22.2805333 14.3692889,22.2805333 14.8249111,21.8249111 L19.1694222,17.4804 C20.2324889,16.4173333 20.2324889,14.6937778 19.1694222,13.6307111 L14.8249111,9.28615333 Z"
                            id="Path"
                            fill-rule="nonzero"
                    /></g
                    ></g
                    ></g
                    ></svg
                    >
                        Log in</span
                    >
                {/if}
            </made-by>
        </landing-right
        >
        
    </landing-wrapper
    >
    <HeadTop></HeadTop>
    <div class=" bg-[var(--button-color)] w-full flex justify-center flex-col items-center">
        <div class="tw-xs:text-3xl md:text-[55px] md:leading-[65px] w-full text-large-header text-white text-[#fff] text-center font-bold mt-10">
            拖拽文件或上传图片
        </div>
        <div class="flex h-[auto] p-2 justify-center flex-wrap max-w-[1400px]  m-auto w-full items-center">
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[300px] max-w-[400px]">
              
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30" muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/01.webm" type="video/webm">
                  </video>
               
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">ASTABLE DIFFUSION XL</div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">使用AI生成高分辨率逼真图像 </div>
            </div>
        
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/02.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">UNCROP</div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">将照片取消剪切为任何图像格式 </div>
            </div> 
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/03.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">REIMAGINE XL
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">使用稳定扩散创建图像的多个变体</div>
            </div>
        
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/04.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">CLEANUP
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">自动删除图片中的文字和缺陷。</div>
            </div>
        
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/05.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">REMOVE BACKGROUND
                   </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">以令人难以置信的准确性从图片中提取主要主题。</div>
            </div> 
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/06.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">RELIGHT
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px] ">Relight your images with beautiful lights. </div>
            </div>

            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/07.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">IMAGE UPSCALER
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">Upscale your images by 2x or 4x in seconds.It
                    can also remove noise and recover beautiful...</div>
            </div>
        
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/08.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">REPLACE BACKGROUND
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">Teleport anything,anywhere with Al </div>
            </div> 
            <div class=" ms:h-[260px]  md:h-[22rem] bg-[#dcdcdc] m-5 rounded-2xl overflow-hidden relative md:w-[32%] flexVideoList min-w-[280px] max-w-[400px]">
                <video class="rounded-2xl object-cover md:h-[17rem] videoChild transition-all w-full duration-500 absolute hover:h-[22rem] z-30 " muted playsinline loop   on:mouseover="{mouseOver}" on:mouseout="{mouseOut}" on:focus="{mouseOver}" on:blur="{mouseOut}" on:click="{uploadImg}" on:keydown="{uploadImg}">
                    <source src="./src/assets/video/09.webm" type="video/webm">
                  </video>
                  <div class="text-gray-700 text-xl md:text-5xl font-semibold leading-8 pl-10 absolute bottom-7 z-10">PTEXT REMOVER
                    </div>
                  <div class="text-base text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis  font-medium leading-[140%] text-left  absolute bottom-2 z-10 pl-10 w-[95%] min-w-[280px] max-w-[400px]">Remove text from any image </div>
            </div>
          </div>
    </div>
</div>
{#if isAbout}
    <PopUp closeFuc={openAbout}>
        <div class="mx-auto max-w-[700px] sm:px-6 text-xl text-white mt-[0px] bg-[#00000028] border-[#00000050] drop-shadow-xl rounded">
            <div class="mx-auto max-w-3xl p-[40px] pt-[80px]"><p class="svelte-vsubk9">Hey there!</p> <br>
                <p class="svelte-vsubk9">I'm <u><a href="https://twitter.com/emilwallner">Emil</a></u> and I
                    created Palette, a tool for colorizing photos. I'm an independent AI
                    researcher from Sweden and I have been featured in
                    <u><a href="https://www.wsj.com/story/ai-digitally-restored-a-lost-trio-of-gustav-klimt-paintings-not-everyone-is-happy-about-it-d75f54f8">the
                        Wall Street Journal</a></u>,
                    <u><a href="https://www.washingtonpost.com/entertainment/museums/gustav-klimt-google-digital-reconstructions/2021/12/28/4a18f61e-36a5-11ec-8be3-e14aaacfa8ac_story.html">the
                        Washington Post</a></u>, and
                    <u><a href="https://www.wired.com/story/artificial-intelligence-reviving-lost-art/">Wired</a></u>
                    for my work on colorization.</p> <br>
                <p class="svelte-vsubk9">Palette is used by millions of people worldwide and has a wide range of
                    users, from Japanese pensioners looking to bring their old memories to
                    life to professionals working on Netflix Originals. It's a simple tool
                    that delivers high quality results.</p> <br>
                <p class="svelte-vsubk9">I started Palette as a side project while at <u><a
                        href="https://www.youtube.com/watch?v=xKPk7tG2upc">Google</a></u>, but it has since
                    become my full-time passion. I am constantly working
                    to improve Palette. I'm adding new features such as increased speed, an
                    API, bulk colorization, and video colorization. I'm also developing a new
                    AI model that significantly improves the quality of the colorizations.</p> <br>
                <p class="svelte-vsubk9">I am always amazed by the beautiful and unique colorizations that
                    people
                    create with Palette. Seeing old photos come to life with vibrant colors is
                    a wonderful reminder of the creativity and passion of people like you.</p> <br>
                <p class="svelte-vsubk9">Thank you for being a part of the Palette community. If you have any
                    questions or comments, please don't hesitate to reach out at
                    emil@palette.fm. I'd love to hear from you.</p> <br> <img src="sign_emil.png" alt="My Image"
                                                                              width="250" height="76"
                                                                              class="mt-6 mb-2">
                <div class="flex">
                    <div class="mb-4 flex-shrink-0 mr-4"><img src="emil_photo.jpeg" alt="My Image" width="75"
                                                              height="75" class="rounded-full"></div>
                    <div><p class="text-2xl font-bold tight-text mt-3 svelte-vsubk9">Emil Wallner</p>
                        <p class="mt-1 text-2xl tight-text svelte-vsubk9">Founder &amp; CEO</p></div>
                </div>
            </div>
        </div>
    </PopUp>
{/if}
{#if isPrice}
    <PopUp closeFuc={openPrice}>
        <PopUp_price />
    </PopUp>
{/if}

