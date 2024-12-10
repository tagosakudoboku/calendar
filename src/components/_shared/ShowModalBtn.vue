<template>
    <div>
        <button @click="showModal">モーダルを表示する</button>
        <Modal ref="dialog" v-if="visible" @close="close" />
    </div>
</template>

<script setup>
import { ref,nextTick } from "vue";
import Modal from './Modal.vue';

const visible = ref(false);
const dialog = ref(null);
const showModal = async () => {
    visible.value = true; 
    await nextTick(); 
    dialog.value?.showDialog(); 
}

const close = () => {
    visible.value = false;
};
</script>