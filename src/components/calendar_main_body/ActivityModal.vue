<template>
    <Teleport to="body">
         <div class="modal">
            <dialog ref="dialog">
                <table>
                    <tr>
                        <td><span>タイトル</span></td>
                        <td><span>{{ activity.title }}</span></td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>{{ activity.id}}</td>
                    </tr>
                    <tr>
                        <td>開始時刻</td>
                        <td>{{ activity.start_time }}</td>
                    </tr>
                    <tr>
                        <td>終了時刻</td>
                        <td>{{ activity.end_time }}</td>
                    </tr>
                    <tr>
                        <td>説明</td>
                        <td>{{ activity.description }}</td>
                    </tr>
                </table>
                
                <button @click="closeDialog">閉じる</button>
            </dialog>
        </div> 
    </Teleport>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['close']);

const dialog= ref(null);

const props =defineProps({
    activity: Object
});

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

            height: 80%;
            width: 64%;
        }

        dialog > * {
            font-size: 40px;    
            color: v-bind(props.activity.color);
        }
</style>