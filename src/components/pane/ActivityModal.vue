<template>
    <Teleport to="body">
         <div class="modal">
            <dialog ref="dialog">
                <div class="dialog_nav">
                    <CloseBtn @close="closeDialog" />
                </div>
                <table>
                    <tr>
                        <td><span>タイトル</span></td>
                        <td><input type="text" v-model="title"></td>
                    </tr>
                    <tr>
                        <td>色</td>
                        <td><input type="text" v-model="color"></td>
                    </tr>
                    <tr>
                        <td>開始時刻</td>
                        <td><input type="datetime-local" v-model="start_time" /></td>
                    </tr>
                    <tr>
                        <td>終了時刻</td>
                        <td><input type="datetime-local" v-model="end_time" /></td>
                    </tr>
                    <tr>
                        <td>説明</td>
                        <td></td>
                    </tr>
                </table>
                
                
                <SaveBtn @save="submit"/>
                <CancelBtn @cancel="closeDialog" />
                
            </dialog>
        </div> 
    </Teleport>
</template>

<script setup>
import SaveBtn from './SaveBtn.vue';
import { ref } from 'vue';
import { useCalendarStore } from '@/stores/calendar';
import CloseBtn from '../_shared/CloseBtn.vue';
import CancelBtn from '../_shared/CancelBtn.vue';
const cal_store = useCalendarStore();

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

const title = ref('');
const start_time = ref('');
const end_time = ref('');
const color = ref('');

const submit = () => {
    cal_store.addActivity({
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
    });
    closeDialog();
};
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
            
        }

        .dialog_nav {
            height: 64px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
</style>