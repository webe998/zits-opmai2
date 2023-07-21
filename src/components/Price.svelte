<script lang="ts">
    export let openHeadPrice;
</script>
<div
    class="w-full lg:h-[1000px] tw-xs:h-[1800px] bg-[var(--button-color)] flex flex-col justify-between items-center text-white"
>
    <div
        class="lg:h-[130px] tw-xs:h-[180px] w-full flex flex-col lg:mt-[100px]"
    >
        <h1
            class="text-center tw-xs:text-[28px] tw-xs:mt-[100px] lg:mt-0 lg:text-[44px] font-extrabold text-white"
        >
            灵活的定价
        </h1>
        <h2
            class="text-center tw-xs:text-[20px] lg:text-[28px] font-semibold text-[#C6C4BC]"
        >
            着色越多，节省的就越多。
        </h2>
    </div>
    <div class="flex flex-row lg:flex-row items-center lg:h-[500px] mt-[50px]">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <edge-cards
                class="w-[295px] h-[405px] p-4 rounded-lg text-left my-auto flex flex-col tw-xs:mx-auto svelte-1b0tp3n"
                ><h3 class="font-semibold text-[#C6C4BC] text-[30px] ml-[13px]">
                    免费
                </h3>
                <div class="flex h-[80px] mx-auto flex-row mt-[20px] mb-[10px]">
                    <h4
                        class="text-[20px] leading-[20px] font-semibold my-auto mr-[3px]"
                    >
                        $
                    </h4>
                    <h4
                        class="text-[60px] leading-[60px] font-semibold my-auto mr-[13px]"
                    >
                        0
                    </h4>
                </div>
                <button
                    class="edge-buttons text-white font-semibold py-2 px-4 w-full mb-4 mx-auto svelte-1b0tp3n"
                    >开始使用</button
                >
                <div
                    class="w-full pl-[35px] mt-[15px] text-[#C6C4BC] font-medium text-[15px]"
                >
                    <ul class="list-none">
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >1次免费高清下载
                        </li>
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >最大500x500像素结果
                        </li>
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >无限预览
                        </li>
                    </ul>
                </div></edge-cards
            >
            <subscribe-wrapper class="h-[459px] mt-[20px]"
                ><card-subscribe
                    class="w-[320px] h-[439px] p-4 border rounded-lg text-left my-auto flex flex-col tw-xs:mx-auto svelte-1b0tp3n"
                    ><h3 class="text-[35px] font-semibold ml-[13px]">
                        订阅
                    </h3>
                    <div
                        class="flex h-[80px] mx-auto flex-row mb-[10px] mt-[30px]"
                    >
                        <h4 class="text-[26px] font-semibold my-auto ml-[5px]">
                            $
                        </h4>
                        <h4
                            class="text-[75px] leading-[75px] font-semibold mt-auto"
                        >
                            39
                        </h4>
                        <h4
                            class="text-[25px] font-bold mt-auto mb-[4px] text-[#C6C4BC]"
                        >
                            /月
                        </h4>
                    </div>
                    <button
                        class="subscribe-button text-[#212121] text-[22px] font-bold mx-auto flex svelte-1b0tp3n"
                        ><div class="m-auto">立即订阅</div></button
                    >
                    <div
                        class="w-full pl-[30px] mt-[15px] text-[#C6C4BC] font-medium text-[15px]"
                    >
                        <ul class="list-none">
                            <li class="flex items-center mb-[4px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 flex-shrink-0 mr-2"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 200张高清上色图像
                            </li>
                            <li class="flex items-center mb-[4px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 flex-shrink-0 mr-2"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 随时取消订阅
                            </li>
                            <li class="flex items-center mb-[4px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 flex-shrink-0 mr-2"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 积分累积（5个月）
                            </li>
                            <li class="flex items-center mb-[4px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 flex-shrink-0 mr-2"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                > 无广告
                            </li>
                        </ul>
                    </div></card-subscribe
                >
                <div
                    class="text-[12px] text-[#222] font-medium mt-[5px] w-[320px] h-[15px] px-[40px]"
                /></subscribe-wrapper
            >
            <edge-cards
                class="w-[295px] h-[405px] p-4 rounded-lg text-left my-auto flex flex-col ml-[20px] tw-xs:mx-auto svelte-1b0tp3n"
                ><h3 class="font-semibold text-[#C6C4BC] text-[30px] ml-[13px]">
                    一次性付款
                </h3>
                <div class="flex h-[80px] mx-auto flex-row mt-[20px] mb-[10px]">
                    <h4
                        class="text-[20px] leading-[20px] font-semibold my-auto mr-[3px]"
                    >
                        $
                    </h4>
                    <h4
                        class="text-[60px] leading-[60px] font-semibold my-auto mr-[13px]"
                    >
                        49
                    </h4>
                </div>
                <button
                    class="edge-buttons text-white font-semibold py-2 px-4 w-full mb-4 mx-auto flex svelte-1b0tp3n"
                    ><div class="m-auto">购买</div></button
                >
                <div
                    class="w-full pl-[35px] mt-[15px] text-[#C6C4BC] font-medium text-[15px]"
                >
                    <ul class="list-none">
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >75张高清上色图像
                        </li>
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >积分有效期为2年
                        </li>
                        <li class="flex items-center mb-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 flex-shrink-0 mr-2"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >有限广告
                        </li>
                    </ul>
                </div></edge-cards
            >
        </div>
    </div>


    <div class="w-full h-[250px] flex">
        <button class="button-show-more svelte-1b0tp3n" on:click={openHeadPrice}>更多优惠计划</button>
    </div>
</div>
