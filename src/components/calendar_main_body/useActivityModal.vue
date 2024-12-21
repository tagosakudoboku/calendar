<template>
    <ActivityModal ref="dialog" v-if="visible" 
    
    @close="closeModal" /> 
</template>

<script setup>
import { ref,nextTick } from "vue";
import ActivityModal from './ActivityModal.vue';

const props =defineProps({
activity: Object|null
});

const visible = ref(false);
const dialog = ref(null);
const showModal = async () => {
visible.value = true; 
await nextTick(); 
dialog.value?.showDialog(); 
}

const closeModal = () => {
visible.value = false;
};

defineExpose({
showModal,
closeModal,
});
</script>