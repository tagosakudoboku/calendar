<template>
    <div class="use_modal" >
        <button @click="showModal">モーダルを表示する</button>
        <Modal ref="modal"><slot></slot></Modal>
    </div>
</template>

<script setup>
import { onMounted,ref,onBeforeUpdate} from 'vue';
import Modal from './Modal.vue';
const props = defineProps({
    activity: Object|null,
});

const modal = ref(null);

const showModal = () => {
    modal.value.showDialog();
};
</script>