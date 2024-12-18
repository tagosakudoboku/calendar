<template>
    <div class="close_btn" @click="click">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 40px; height: 40px; opacity: 1;" xml:space="preserve">
            <g>
            <polygon class="st0" points="511.998,70.682 441.315,0 256.002,185.313 70.685,0 0.002,70.692 185.316,256.006 0.002,441.318 
                        70.69,512 256.002,326.688 441.315,512 511.998,441.318 326.684,256.006 	" style="fill: rgb(75, 75, 75);"></polygon>
            </g>
        </svg>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit  = defineEmits(['close']);

const click = () => {
    emit('close');
    console.log('close event');
};
</script>

<style scoped>
.close_btn{
    height: 64px;
    width: 64px;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
}

.close_btn:hover{
    background-color: #ccc;
}
</style>