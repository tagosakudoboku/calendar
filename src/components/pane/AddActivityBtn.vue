<template>
    <div class="add_activity_btn">
        <!-- <button @click="showModal">新規作成</button>
        <ModalLogic ref="modal" /> -->
        <button @click="showModal">新規作成</button>
    </div>
</template>

<script setup>
import { onMounted,ref,defineEmits } from 'vue';
import ModalLogic from './ModalLogic.vue';
const modal = ref(null);
const emit=defineEmits(['add']);

onMounted(() => {});

const showModal = () => {
    modal.value?.showModal();
    emit('add');
    console.log('add event');
};

</script>


<style scoped>
    .add_activity_btn > *{
        height: 64px;
        width: 256px;
        background-color: #1A67D2;

        font-size: 36px;
        color: white;
        text-align: center;
        border-radius: 8px;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add_activity_btn > *:active{
        background-color: #0E4A9E;
    }

    button {
        all: unset;
    }
    @media screen and (max-width: 479px) {
        .add_activity_btn {
            position: fixed;
            z-index: 1000;
            bottom: 80px;
            right: 16px;
        }
        

    }

</style>