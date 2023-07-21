
<script lang="ts">
    export let closeFuc;
</script>

<div class="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 transition-opacity back-blur svelte-10q0dwl"></div>
    <div class="fixed inset-0 overflow-y-auto">
        <div class="flex w-full h-full">
            <button type="button"
                    class="absolute flex right-6 top-6 bg-black bg-opacity-20 lg:bg-transparent lg:right-14 lg:top-10 h-20 w-20 rounded-full align-center justify-center hover:bg-black hover:bg-opacity-20 z-20"
            on:click={closeFuc}
            >
                <svg class="flex m-auto" width="28" height="28" viewBox="0 0 14 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.28034 0.219668C0.987448 -0.0732225 0.512568 -0.0732225 0.219678 0.219668C-0.0732125 0.512568 -0.0732125 0.987438 0.219678 1.28033L5.6893 6.75002L0.219668 12.2197C-0.0732225 12.5126 -0.0732225 12.9874 0.219668 13.2803C0.512558 13.5732 0.987438 13.5732 1.28033 13.2803L6.75 7.81062L12.2197 13.2803C12.5126 13.5732 12.9875 13.5732 13.2803 13.2803C13.5732 12.9874 13.5732 12.5126 13.2803 12.2197L7.8107 6.75002L13.2803 1.28034C13.5732 0.987448 13.5732 0.512578 13.2803 0.219678C12.9874 -0.0732125 12.5126 -0.0732125 12.2197 0.219678L6.75 5.68932L1.28034 0.219668Z"
                          fill="white"></path>
                </svg>
            </button>
            <div class="relative transform overflow-y-auto rounded-t-3xl px-4 pt-5 pb-4 text-left shadow-xl sm:mx-5 sm:mt-5 transition-all sm:p-20 lg:mx-10 ld:mt-10 form-container svelte-10q0dwl">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</div>
