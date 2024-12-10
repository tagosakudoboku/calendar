<template>
    <Teleport to="body">
         <div class="modal">
            <dialog ref="dialog">
                ダイアログです
                <button @click="closeDialog">閉じる</button>
            </dialog>
        </div> 
    </Teleport>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['close']);

const dialog= ref(null);

const showDialog = () => {
    dialog.value?.showModal();
};

const closeDialog = () => {
    dialog.value?.close();
    emit("close", []);
};

defineExpose({
    showDialog,
    closeDialog,
});
</script>

<style scoped>
dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            border: none;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
</style>