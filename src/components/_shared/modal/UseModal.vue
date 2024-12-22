<template>
    <div class="use_modal" >
        <Modal ref="modal" v-if="visible" >
            <template #content>
                <slot name="content" :closeModal="closeModal"></slot>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import { ref, defineExpose, nextTick} from 'vue';
import Modal from './Modal.vue';

const modal = ref(null);
const visible = ref(false);

const showModal = async () => {
    visible.value = true; 
    await nextTick(); 
    modal.value?.showDialog();
};

const closeModal = () => {
    visible.value = false;
};

defineExpose({showModal,closeModal});
</script>