<script lang="ts">
    import {imgFile} from "@/store";
    import {onMount} from 'svelte';
    import {imageToBlob, imgToBase64} from "@/util/imgToBase";
    import {push} from "svelte-spa-router";
    import {colorizeImage} from "@/api/colorizeImage.js";

    let isPlak: boolean = false;
    let btnDis: boolean = false;
    let displayImgHeight = 0;
    let displayImgWidth = 0;
    let imgBaseDataUrl;
    let imgBaseData;
    let imgObject;
    let ratio;
    imgFile.subscribe((value) => {
        imgObject = value.imgData;
        ratio = value.ratio;
        imgBaseDataUrl = `url(${value.base64})`;
        imgBaseData = value.base64;
    })

    let isLeft: boolean = false;
    const scorllMove = (direction: number) => {
        const scrollElement = document.querySelector('.smooth_scroll');
        if (direction) { // left
            scrollElement.scrollTo(0, 0);
            isLeft = false;
        } else { // right
            scrollElement.scrollTo(Number(scrollElement.offsetWidth), 0);
            isLeft = true;
        }
    }

    function buttonClick() {
        const buttons = document.querySelectorAll('button[type="button"].svelte-19q468m');
        console.log(buttons)
        // 遍历每个按钮
        buttons.forEach(button => {
            // 监听按钮的点击事件
            button.addEventListener('click', () => {
                // 移除所有具有相同结构的按钮的active类名
                buttons.forEach(btn => {
                    btn.querySelector('p.cream-text')?.classList.remove('active');
                    btn.querySelector('display-thumb')?.classList.remove('active');
                });

                // 给当前按钮的子元素添加active类名
                button.querySelector('p.cream-text')?.classList.add('active');
                button.querySelector('display-thumb')?.classList.add('active');
            });
        });
    }

    const uploadImg = () => {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = "image/webp, image/png, image/jpeg";
        input.click();
        input.onchange = async function (e: any) {
            const imgFileObj = e.target.files[0];
            if (imgFileObj) {
                const url = URL.createObjectURL(imgFileObj);
                const base64 = await imgToBase64(url, imgFileObj.type);
                imgFile.set(base64);
                imgResize();
                await push('/action');
            }
        }
    }

    const openPlak = () => isPlak = !isPlak;

    const postColorizeImage = async () => {
        btnDis = true;
        const blobs: Blob = <Blob>await imageToBlob(imgObject);
        const formData = new FormData();
        formData.append('image', blobs, 'black_and_white.jpg');
        formData.append('resolution', 'SD');
        formData.append('prompt', '');
        formData.append('standard_filter_id', '1');
        formData.append('artistic_filter_id', 'O');
        formData.append('raw_captions', 'false');
        formData.append('pre_fix', '');
        formData.append('post_fix', '');
        formData.append('auto_color', 'true');
        formData.append('white_balance', 'false');
        formData.append('temperature', '-0.1');
        formData.append('saturation', '1.1');
        try {
            const response = await colorizeImage(formData);
            const img = URL.createObjectURL(response);
            imgFile.set(await imgToBase64(img, response.type));
        }catch (err){
            btnDis = false;
        }
    }

    const imgResize = ()=>{
        displayImgHeight = document.querySelector('main-display.svelte-19wee8e').clientHeight;
        displayImgWidth = displayImgHeight * ratio;
        window.addEventListener('resize', function() {
            let F_h =  document.querySelector('main-display.svelte-19wee8e').clientHeight;
            displayImgWidth = F_h * ratio;
            displayImgHeight = F_h;
        });
    }

    onMount(() => {
        buttonClick();
        imgResize();
    });
    // beforeUpdate(() => {
    //     // 确认在 DOM 更新后，我们是否需要自动滚动
    //     imgResize();
    // });


</script>

<main class="svelte-8v4fb7">
    <tool-buttons-div class="svelte-1lx6wu6"
    >
        <wrap-buttons class="svelte-1lx6wu6"
        ><a href=""
        >
            <button class="download-button svelte-1lx6wu6 active"
            >
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-9 w-9 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C12.1114 20.5 12.211 20.4592 12.307 20.3488C12.4137 20.226 12.5 20.026 12.5 19.7866V18C12.5 14.9624 14.9624 12.5 18 12.5H19.7866C20.026 12.5 20.226 12.4137 20.3488 12.307C20.4592 12.211 20.5 12.1114 20.5 12ZM22 12C22 13.1714 20.9581 14 19.7866 14H18C15.7909 14 14 15.7909 14 18V19.7866C14 20.9581 13.1714 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            fill="#F1EDE2"
                    />
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                            fill="#F1EDE2"
                    />
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z"
                            fill="#F1EDE2"
                    />
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 11.5C8.32843 11.5 9 10.8284 9 10C9 9.17157 8.32843 8.5 7.5 8.5C6.67157 8.5 6 9.17157 6 10C6 10.8284 6.67157 11.5 7.5 11.5Z"
                            fill="#F1EDE2"
                    />
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.5 17C9.32843 17 10 16.3284 10 15.5C10 14.6716 9.32843 14 8.5 14C7.67157 14 7 14.6716 7 15.5C7 16.3284 7.67157 17 8.5 17Z"
                            fill="#F1EDE2"
                    />
                </svg
                >
            </button
            >
        </a
        >
            <button class="shuffle-button svelte-1lx6wu6"
            >
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-8 w-8 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5356 3.8076C15.7071 2.63603 17.6066 2.63603 18.7782 3.8076L20.1924 5.22182C21.364 6.39339 21.364 8.29289 20.1924 9.46446L9.7999 19.857C9.6603 19.9966 9.4825 20.0917 9.28891 20.1304L3.98561 21.1911C3.28589 21.331 2.66897 20.7141 2.80892 20.0144L3.86958 14.7111C3.90829 14.5175 4.00345 14.3397 4.14305 14.2001L14.5356 3.8076ZM17.7175 4.86826L19.1318 6.28248C19.7175 6.86826 19.7175 7.81801 19.1318 8.4038L17.5407 9.99482L14.0052 6.45929L15.5962 4.86826C16.182 4.28248 17.1318 4.28248 17.7175 4.86826ZM12.9445 7.51995L5.31076 15.1537L4.42687 19.5731L8.84629 18.6893L16.4801 11.0555L12.9445 7.51995Z"
                            fill="#F1EDE2"
                    />
                </svg
                >
            </button
            >
        </wrap-buttons
        >
    </tool-buttons-div
    >
    <main class="svelte-boubgi">
        <!-- TODO  点击切换class     -->
        <div class="tool-header">
            <div class="filters svelte-19wee8e smooth_scroll">
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m active"
                    >
                        Original
                    </p>
                        <display-thumb class="svelte-19q468m active"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(0deg); opacity: 0.6;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(0px); filter: saturate(0);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 100% 100%, 100%; opacity: 0.0; background-image: linear-gradient(rgba(0, 0, 0, 0.485), rgba(0, 0, 0, 0.485)), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                            on:click={postColorizeImage}
                            disabled={btnDis}
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Base Palette
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(0deg); opacity: 1;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(0px); filter: saturate(1);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 00%, 100%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Lavender Dusk
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(340deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(3);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Colorful Memories
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(0deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(4px); filter: saturate(5);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Vivid Natural
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(40deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(4px); filter: saturate(2);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Warm Glow
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(20deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(1.5);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Royal Vibes
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(30deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(10px); filter: saturate(2.5);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Analog Rainbow
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(90deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(3);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Pastel Notes
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(50deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(4px); filter: saturate(1.5);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Outdoor Vibes
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(0deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(1.5);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Bright Studio
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(270deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(3);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Matte Ruby
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(2);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Cinematic Shades
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(180deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(2);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Radient Rainbow
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(300deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(3);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Playful Pop
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(6);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Faded Elegance
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(6);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Garden Delights
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(6);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Lively Floral
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(6);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Tutti Frutti
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(200deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(6);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Vintage Charm
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(180deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(2);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div
                        class="relative list-none text-gray-800 h-full text-center flex flex-col items-center"
                >
                    <button type="button" class="svelte-19q468m"
                    ><p
                            class="cream-text bottom-0 ml-4 absolute z-10 uppercase text-sm font-bold pb-3 svelte-19q468m"
                    >
                        Ambient Historic
                    </p>
                        <display-thumb class="svelte-19q468m"
                        >
                            <hue-div
                                    class="svelte-19q468m"
                                    style="background-image: {imgBaseDataUrl}; filter: hue-rotate(180deg); opacity: 0.5;"
                            >
                                <blur-div
                                        class="svelte-19q468m"
                                        style="backdrop-filter: blur(5px); filter: saturate(2);"
                                >
                                    <div
                                            class="loading-div svelte-19q468m transition-enabled"
                                            style="background-size: 0%, 0%; opacity: 0.0;"
                                    />
                                </blur-div
                                >
                            </hue-div
                            >
                        </display-thumb
                        >
                    </button
                    >
                </div>
                <div class="arrows svelte-19wee8e">
                    {#if isLeft}
                        <button type="button" class="left-arrow svelte-19wee8e"
                                on:click={()=>{
                                scorllMove(1)
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="h-9 w-9 m-auto"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M15.5303 19.0303C15.8232 18.7374 15.8232 18.2626 15.5303 17.9697L9.73744 12.1768C9.63981 12.0791 9.63981 11.9209 9.73744 11.8232L15.5303 6.03033C15.8232 5.73744 15.8232 5.26256 15.5303 4.96967C15.2374 4.67678 14.7626 4.67678 14.4697 4.96967L8.67678 10.7626C7.99336 11.446 7.99336 12.554 8.67678 13.2374L14.4697 19.0303C14.7626 19.3232 15.2374 19.3232 15.5303 19.0303Z"
                                      fill="white"></path>
                            </svg>
                        </button>
                    {:else}
                        <button type="button" class="right-arrow svelte-19wee8e"
                                on:click={()=>{
                                scorllMove(0)
                            }}
                        >
                            <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    class="h-9 w-9 m-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8.21967 19.0303C7.92678 18.7374 7.92678 18.2626 8.21967 17.9697L14.0126 12.1768C14.1102 12.0791 14.1102 11.9209 14.0126 11.8232L8.21967 6.03033C7.92678 5.73744 7.92678 5.26256 8.21967 4.96967C8.51256 4.67678 8.98744 4.67678 9.28033 4.96967L15.0732 10.7626C15.7566 11.446 15.7566 12.554 15.0732 13.2374L9.28033 19.0303C8.98744 19.3232 8.51256 19.3232 8.21967 19.0303Z"
                                        fill="white"
                                />
                            </svg
                            >
                        </button>
                    {/if}
                </div>
            </div>
        </div>

        <!--                w-full-->
        <div
                class="fixed z-30 h-16 w-16 h-full ml-10 lg:ml-10 lg:mt-[210px] mt-[210px]"
        >
            <div class="relative inline-block text-left">
                <button type="button" class="close-button svelte-1rchqx8"
                        on:click={openPlak}
                >
                    {#if !isPlak}
                        <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                class="h-9 w-9 m-auto pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                                    fill="white"
                            />
                            <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H19C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                                    fill="white"
                            />
                        </svg>
                    {:else}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             class="h-9 w-9 m-auto pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.53034 5.46965C6.23745 5.17676 5.76257 5.17676 5.46968 5.46965C5.17679 5.76255 5.17679 6.23742 5.46968 6.53031L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0606L17.4697 18.5303C17.7626 18.8232 18.2375 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53032C18.8232 6.23743 18.8232 5.76256 18.5303 5.46966C18.2374 5.17677 17.7626 5.17677 17.4697 5.46966L12 10.9393L6.53034 5.46965Z"
                                  fill="white"></path>
                        </svg>
                    {/if}
                </button
                >
                {#if isPlak}
                    <div class="absolute z-10 mt-2 right-[calc(50%-172px)] top-[70px] lg:top-[-30px] lg:right-[-370px] origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none menu-main svelte-1rchqx8"
                         role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"><a
                            href="/#"
                            class="group flex items-center px-4 py-6 mx-2 mt-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl svelte-1rchqx8"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0">
                        <svg class="ml-2 mr-6 h-7 w-7 text-gray-400 group-hover:text-gray-50 " height="20" width="20"
                             viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard-Copy-105" transform="translate(-135.000000, -307.000000)"
                                   fill="#C6C4BC">
                                    <g id="home" transform="translate(135.000000, 307.000000)">
                                        <path d="M4.05,27 C1.8132525,27 0,25.1835375 0,22.9426793 L0,12.5777127 C0,11.4274623 0.487296,10.33135 1.3406985,9.56190623 L10.790685,1.04154634 C12.3309,-0.347179858 14.6691,-0.347179858 16.209315,1.04153281 L25.659315,9.56190623 C26.51265,10.33135 27,11.4274623 27,12.5777127 L27,22.9426793 C27,25.1835375 25.186815,27 22.95,27 L4.05,27 Z M24.975,12.5777127 L24.975,22.9426793 C24.975,24.0630408 24.06834,24.9713397 22.95,24.9713397 L18.9,24.9713397 L18.9,17.5329184 C18.9,15.2920602 17.086815,13.4755978 14.85,13.4755978 L12.15,13.4755978 C9.9132525,13.4755978 8.1,15.2920602 8.1,17.5329184 L8.1,24.9713397 L4.05,24.9713397 C2.9316195,24.9713397 2.025,24.0630408 2.025,22.9426793 L2.025,12.5777127 C2.025,12.0026551 2.268648,11.4545111 2.6953425,11.0697418 L12.14541,2.54943604 C12.91545,1.85506618 14.08455,1.85506618 14.85459,2.54943604 L24.30459,11.0697418 C24.731325,11.4545111 24.975,12.0026551 24.975,12.5777127 Z M10.125,24.9713397 L10.125,17.5329184 C10.125,16.4125569 11.03166,15.5042581 12.15,15.5042581 L14.85,15.5042581 C15.96834,15.5042581 16.875,16.4125569 16.875,17.5329184 L16.875,24.9713397 L10.125,24.9713397 Z"
                                              id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Home</a> <span
                            class="group flex items-center px-4 py-5 mx-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"
                            role="menuitem" tabindex="-1" id="menu-item-1"><svg
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
          Pricing plans</span> <a href="mailto:emil@palette.fm"
                                  class="group flex items-center px-4 py-5 mx-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl svelte-1rchqx8"
                                  role="menuitem" tabindex="-1" id="menu-item-1">
                        <svg class="ml-2 mr-6 h-7 w-7 text-gray-400 group-hover:text-gray-50" width="29px" height="27px"
                             viewBox="0 0 29 27" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"><title>message</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard-Copy-108" transform="translate(-138.000000, -433.000000)"
                                   fill="#C6C4BC">
                                    <g id="message" transform="translate(138.000000, 433.000000)">
                                        <path d="M7.15252569,21.0723127 C7.53512192,20.7534115 8.01737654,20.5788462 8.51538462,20.5788462 L24.1269231,20.5788462 C25.3026138,20.5788462 26.2557692,19.6256908 26.2557692,18.45 L26.2557692,4.25769231 C26.2557692,3.08195896 25.3026138,2.12884615 24.1269231,2.12884615 L4.25769231,2.12884615 C3.08195896,2.12884615 2.12884615,3.08195896 2.12884615,4.25769231 L2.12884615,23.7435888 C2.12884615,24.3452008 2.83055642,24.6738946 3.29274312,24.2887154 L7.15252569,21.0723127 Z M8.51538462,22.7076923 L24.1269231,22.7076923 C26.4784465,22.7076923 28.3846154,20.8015235 28.3846154,18.45 L28.3846154,4.25769231 C28.3846154,1.90623981 26.4784465,0 24.1269231,0 L4.25769231,0 C1.90623981,0 0,1.90623981 0,4.25769231 L0,23.7435888 C0,26.1501785 2.80682688,27.4648119 4.65560204,25.9242369 L8.51538462,22.7076923 Z"
                                              id="Shape"></path>
                                        <path d="M7.45096154,8.51538462 C7.45096154,7.92752504 7.92752504,7.45096154 8.51538462,7.45096154 L19.8692308,7.45096154 C20.4570762,7.45096154 20.9336538,7.92752504 20.9336538,8.51538462 C20.9336538,9.10324419 20.4570762,9.57980769 19.8692308,9.57980769 L8.51538462,9.57980769 C7.92752504,9.57980769 7.45096154,9.10324419 7.45096154,8.51538462 Z"
                                              id="Path"></path>
                                        <path d="M7.45096154,14.1923077 C7.45096154,13.6044623 7.92752504,13.1278846 8.51538462,13.1278846 L14.1923077,13.1278846 C14.7801531,13.1278846 15.2567308,13.6044623 15.2567308,14.1923077 C15.2567308,14.7801531 14.7801531,15.2567308 14.1923077,15.2567308 L8.51538462,15.2567308 C7.92752504,15.2567308 7.45096154,14.7801531 7.45096154,14.1923077 Z"
                                              id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Contact Support</a> <span
                            class="group flex items-center px-4 py-5 mx-2 mb-2 menu-font hover:bg-[rgba(255,255,255,0.04)] rounded-xl cursor-pointer svelte-1rchqx8"
                            role="menuitem" tabindex="-1" id="menu-item-1"><svg
                            class="ml-2 mr-6 h-8 w-8 text-gray-400 group-hover:text-gray-5" width="28px" height="32px"
                            viewBox="0 0 28 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"><title>login</title><g id="Page-1" stroke="none"
                                                                                              stroke-width="1"
                                                                                              fill="none"
                                                                                              fill-rule="evenodd"><g
                            id="Artboard-Copy-108" transform="translate(-138.000000, -296.000000)" fill="#C6C4BC"><g
                            id="login" transform="translate(138.000000, 296.000000)"><path
                            d="M27.6111111,4.66666667 C27.6111111,2.30412 25.6959111,0.388888889 23.3333333,0.388888889 L14,0.388888889 C11.6374222,0.388888889 9.72222222,2.30412 9.72222222,4.66666667 L9.72222222,6.22222222 C9.72222222,6.86654889 10.2445622,7.38888889 10.8888889,7.38888889 C11.5332,7.38888889 12.0555556,6.86654889 12.0555556,6.22222222 L12.0555556,4.66666667 C12.0555556,3.59277333 12.9260444,2.72222222 14,2.72222222 L23.3333333,2.72222222 C24.4072889,2.72222222 25.2777778,3.59277333 25.2777778,4.66666667 L25.2777778,26.4444444 C25.2777778,27.5184 24.4072889,28.3888889 23.3333333,28.3888889 L14,28.3888889 C12.9260444,28.3888889 12.0555556,27.5184 12.0555556,26.4444444 L12.0555556,24.8888889 C12.0555556,24.2445778 11.5332,23.7222222 10.8888889,23.7222222 C10.2445622,23.7222222 9.72222222,24.2445778 9.72222222,24.8888889 L9.72222222,26.4444444 C9.72222222,28.8070222 11.6374222,30.7222222 14,30.7222222 L23.3333333,30.7222222 C25.6959111,30.7222222 27.6111111,28.8070222 27.6111111,26.4444444 L27.6111111,4.66666667 Z"
                            id="Path"></path><path
                            d="M14.8249111,9.28615333 C14.3692889,8.83054667 13.6307111,8.83054667 13.1750889,9.28615333 C12.7194667,9.74176 12.7194667,10.4804622 13.1750889,10.9360689 L16.6278,14.3888889 L1.55555556,14.3888889 C0.911228889,14.3888889 0.388888889,14.9112444 0.388888889,15.5555556 C0.388888889,16.1998667 0.911228889,16.7222222 1.55555556,16.7222222 L16.6278,16.7222222 L13.1750889,20.1750889 C12.7194667,20.6307111 12.7194667,21.3692889 13.1750889,21.8249111 C13.6307111,22.2805333 14.3692889,22.2805333 14.8249111,21.8249111 L19.1694222,17.4804 C20.2324889,16.4173333 20.2324889,14.6937778 19.1694222,13.6307111 L14.8249111,9.28615333 Z"
                            id="Path" fill-rule="nonzero"></path></g></g></g></svg>
            Sign in</span></div>
                {/if}
            </div>
        </div>
        <display class="svelte-19wee8e"
        >
            <main-display class="svelte-19wee8e"
            >
                <image-cont class="svelte-wmeifm"
                ><img
                        src={imgBaseData}
                        alt="Colorized with Palette.fm"
                        class="image-div svelte-wmeifm loading_image"
                        width={displayImgWidth}
                        height={displayImgHeight}
                />
                    <caption
                            class="svelte-wmeifm"
                            style="margin-left: 248px; margin-top: 0px;"
                            width={displayImgWidth}
                            height={displayImgHeight}
                    >
                        <div
                                class="caption-div svelte-wmeifm"
                                style="margin-left: 2.5rem;"
                        >
                            <span class="name-display svelte-wmeifm"
                            >Base Palette</span
                            > — A stock photo of room, student, seat, and headpiece.
                            Small contrasting details in color. In color film.
                        </div>
                    </caption
                    >
                    <iframe
                            style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
                            aria-hidden="true"
                            tabindex="-1"
                            src="about:blank"
                    />
                </image-cont
                >
            </main-display
            >
            <upload-button-div class="svelte-19wee8e"
            >
                <combo-wrapper class="svelte-1hboefi"

                >
                    <combo-button-split class="cursor-pointer svelte-1hboefi"
                    >
                        <upload class="svelte-1hboefi"
                                on:click={uploadImg}
                        >
                            <button-icon class="svelte-1hboefi"
                            ><img
                                    src="/cloud_upload.svg"
                                    class="text-white h-[26px] w-[26px] mt-[20px] ml-4"
                                    alt=""
                            /></button-icon
                            >
                            <upload-button-text class="mr-2 svelte-1hboefi"
                            >New
                            </upload-button-text
                            >
                        </upload
                        >
                        <button-divider class="svelte-1hboefi"/>
                        <button class="download svelte-1hboefi"
                        >
                            <download-button-text class="svelte-1hboefi"
                            >Download
                            </download-button-text
                            >
                        </button
                        >
                        <button-divider class="svelte-1hboefi"/>
                        <button class="hd-button svelte-1hboefi"
                        >
                            <hd-button-text class="ml-2 svelte-1hboefi"
                            >HD
                            </hd-button-text
                            >
                            <button-icon-download class="svelte-1hboefi"
                            ><img
                                    src="/download.svg"
                                    class="text-white h-6 w-6 mr-4 my-auto mt-[18px]"
                                    style=""
                                    alt=""
                            /></button-icon-download
                            >
                        </button
                        >
                    </combo-button-split
                    >
                    <div class="flex flex-row h-[2rem] lg:opacity-0">
                        <div class="@apply flex w-[32%] justify-evenly">
                            <span
                                    class="helper-button-text mt-1 svelte-1hboefi"
                            />
                        </div>
                        <div class="@apply flex w-[38%] justify-evenly">
                            <span class="helper-button-text mt-1 svelte-1hboefi"
                            >398 x 628 (free)</span
                            >
                        </div>
                        <div class="@apply flex w-[30%] justify-evenly">
                            <span class="helper-button-text mt-1 svelte-1hboefi"
                            >420 x 663 ($)</span
                            >
                        </div>
                    </div>
                </combo-wrapper
                >
                <input
                        type="file"
                        accept="[object Object]"
                        style="display: none;"
                /></upload-button-div
            >
        </display
        >
    </main>
</main>
