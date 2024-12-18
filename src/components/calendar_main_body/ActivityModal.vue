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
                    <tr>
                        <td>top</td>
                        <td>{{ activity.top }}</td>
                    </tr>
                </table>
                <div class="buttons">
                    <CopyBtn @copy="copy"/>
                    <DiscardBtn @click="discard" />
                    <EditBtn />
                    <CancelBtn @cancel="closeDialog" />
                </div>
                
            </dialog>
        </div> 
    </Teleport>
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
  dialog {
      width:100%;
      height: 100%;
      /* display: grid;

      grid-template-rows: 76px calc(100% - (76px + 76px)) 76px;
      grid-template-columns: 100%; */
    }

    dialog > * {
        font-size: 20px;
    }
}
</style>