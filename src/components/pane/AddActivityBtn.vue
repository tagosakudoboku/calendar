<template>
    <div class="add_activity_btn">
        <button @click="showModal">新規作成</button>
        <ModalLogic ref="modal" />
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import ModalLogic from './ModalLogic.vue';
const modal = ref(null);

onMounted(() => {});

const showModal = () => {
    modal.value.showModal();
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
</style>