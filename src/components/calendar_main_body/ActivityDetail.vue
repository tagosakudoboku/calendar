<template>
    <div class="activity_detail">
        <div class="dialog_nav">
                    <CloseBtn @close="closeDialog" />
                </div>
            
                
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
                <div class="buttons">
                    <CopyBtn @copy="copy"/>
                    <DiscardBtn @click="discard" />
                    <EditBtn @edit="edit" />
                    <CancelBtn @cancel="closeDialog" />
                </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CopyBtn from "./CopyBtn.vue";
import UpdateBtn from './UpdateBtn.vue';
import DiscardBtn from './DiscardBtn.vue';
import EditBtn from './EditBtn.vue';
import CloseBtn from '../_shared/CloseBtn.vue';
import CancelBtn from '../_shared/CancelBtn.vue';
import { useCalendarStore } from '@/stores/calendar';

const cal_store = useCalendarStore();

const emit = defineEmits(['close', "edit"]);

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

const discard = () => {
    cal_store.discardActivity(props.activity);
    closeDialog();
};

const copy = () => {
    cal_store.copyActivity(props.activity);
    closeDialog();
};

const paste = () => {
    cal_store.pasteActivity();
};

//const useModal = ref(null);
const edit = () => {
    emit("edit", []);
}
</script>

<style scoped>

    .activity_detail > * {
            font-size: 40px;    
            color: v-bind(props.activity.color);
        }
    

        .buttons {
            display: flex;
        }

        .dialog_nav {
            height: 64px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
        @media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  

    
}
</style>