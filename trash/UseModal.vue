<template>
    <div class="use_modal" >
        <slot name="modal_display" :onShowModal="showModal">
            <button @click="showModal">モーダルを表示する</button>
        </slot>
        <!-- <Modal ref="modal" v-if="visible" @close="closeModal" >
            <template #content="{onClose}" @close="onClose">
                <slot name="content" :closeModal="closeModal"></slot>
            </template>
        </Modal> -->
        <Modal ref="modal" v-if="visible" >
            <template #content>
                <slot name="content" :closeModal="closeModal"></slot>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import { onMounted,ref,onBeforeUpdate,defineExpose,nextTick} from 'vue';
import Modal from './Modal.vue';
const props = defineProps({
    activity: Object|null,
});

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
defineExpose({showModal})
</script>