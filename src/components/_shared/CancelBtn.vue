<template>
    <div class="cancel_btn">
        <button @click="click">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 48px; height: 48px; opacity: 1;" xml:space="preserve">

<g>
	<polygon class="st0" points="326.253,147.826 256,218.08 185.747,147.826 147.819,185.747 218.072,256 147.819,326.253 
		185.747,364.182 256,293.929 326.262,364.182 364.19,326.253 293.928,256 364.19,185.738 	" style="fill: #000000;"></polygon>
	<path class="st0" d="M437.018,74.99C390.76,28.699,326.624-0.008,256,0.009C185.385-0.008,121.24,28.699,74.982,74.99
		C28.699,121.231-0.008,185.385,0,256c-0.008,70.615,28.699,134.76,74.982,181.01C121.24,483.301,185.385,512.009,256,511.991
		c70.624,0.017,134.76-28.69,181.018-74.982C483.301,390.76,512.008,326.615,512,256C512.016,185.385,483.301,121.231,437.018,74.99
		z M405.071,405.071c-38.222,38.181-90.774,61.739-149.071,61.739c-58.289,0-110.849-23.558-149.071-61.739
		C68.747,366.84,45.198,314.281,45.181,256c0.016-58.28,23.566-110.848,61.748-149.071C145.151,68.739,197.711,45.19,256,45.19
		c58.298,0,110.849,23.55,149.071,61.739c38.182,38.223,61.74,90.791,61.748,149.071
		C466.811,314.281,443.253,366.84,405.071,405.071z" style="fill: #000000;"></path>
</g>
</svg>
            <span>Cancel</span>
        </button>
        
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit  = defineEmits(['cancel']);

const click = () => {
    emit('cancel');
    console.log('cancel event');
};
</script>

<style scoped>
.cancel_btn {
    color: white;
    display: flex;
    
    border: none;
    user-select: none;
    height: 64px;
    width: 256px;
}

.cancel_btn >button{
    /*
    height: 50rem;
    width: 50rem;*/

    height: 64px;
    width: 256px;

    border: none;
    font-size: 2rem;
    
    background-color:  #7d7d7d;
    color: white;
    border-radius: 6px;

    display: flex;

    align-items: center;
    /* justify-content: center; */
    padding-left: 32px;
}
.cancel_btn > button >svg {
    margin-right: 12px;
}
.cancel_btn >button > span {
    font-weight: 950;
}

.cancel_btn>button:hover {
    background-color: #4d4d4d;
}


    
@media screen and (max-width: 479px) {
    .cancel_btn {
        height: 64px;
        width: 64px;
    }

    .cancel_btn >button {
        width: 64px;
        justify-content: center;
        padding: 0px 0px 0px 0px;
    }
    
    .cancel_btn > button >svg {
        margin-right: 0px;
    }

    .cancel_btn >button > span{
        display: none;
    }
}
</style>