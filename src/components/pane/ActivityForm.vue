<template>
    
         <div class="activity_form">
            
                <div class="dialog_nav">
                    <CloseBtn @close="closeDialog" />
                </div>
                <table>
                    <tr>
                        <!-- <td><span>タイトル</span></td>
                        <td><input type="text" v-model="title"></td> -->
                        <TitleInput :title="title" @change="change_title($event)" />
                    </tr>
                    <tr>
                        <!-- <td>色</td>
                        <td><input type="text" v-model="color"></td> -->
                        <ColorInput :colors ="colors" @change="change_color($event)" />
                    </tr>
                    <!-- <tr>
                        <td>開始時刻</td>
                        <td><input type="datetime-local" v-model="start_time" /></td>
                    </tr>
                    <tr>
                        <td>終了時刻</td>
                        <td><input type="datetime-local" v-model="end_time" /></td>
                        <td><TimeInput /></td>
                    </tr> -->
                    <tr>
                        <td><TimeInput :start_time="start_time" :end_time="end_time" @change="change($event)" /></td>
                        
                    </tr>
                    <tr>
                        <!-- <td>説明</td>
                        <td></td> -->
                        <DescriptionInput @change="change_description($event)" :description="description"/>
                    </tr>
                    
                </table>
                
                
                <SaveBtn @save="add" v-if="mode==='add'" />
                <UpdateBtn @update="update" v-if="mode==='update'" />
                <CancelBtn @cancel="closeDialog" />
                
            
        </div> 
    
</template>

<script setup>
import SaveBtn from './SaveBtn.vue';
import { ref } from 'vue';
import { useCalendarStore } from '@/stores/calendar';
import CloseBtn from '../_shared/CloseBtn.vue';
import CancelBtn from '../_shared/CancelBtn.vue';
import TimeInput from './TimeInput.vue';
import UpdateBtn from '../calendar_main_body/UpdateBtn.vue';
import TitleInput from './TitleInput.vue';
import ColorInput from "./ColorInput.vue";
import DescriptionInput from './DescriptionInput.vue';
const cal_store = useCalendarStore();

const emit = defineEmits(['close']);

const props =defineProps({
    activity: Object|null,
    mode: {
        type: String,
        default: 'add',
    }
});
/*
const dialog= ref(null);
const showDialog = () => {
    dialog.value?.showModal();
};
defineExpose({
    showDialog,
    closeDialog,
});
*/
const closeDialog = () => {
    //dialog.value?.close();
    emit("close", []);
};



const title = ref(props.activity?.title);
const start_time = ref(props.activity?.start_time);
const end_time = ref(initEndTime());
const color = ref(props.activity?.color);
const description = ref(props.activity?.description);

let colors = ref(['#FF0000', '#00FF00', '#0000FF']);
const initColors = () => {
    
    if(typeof props.activity !== "undefined") {
        colors.value.push(props.activity.color);
    }
};
initColors();
function initEndTime(d)
{
    if (props.activity?.end_time === null) {
        return "";
    }
    return props.activity?.end_time;
}

const change=(event) => {
    start_time.value = event.start_time;
    end_time.value = event.end_time;
};
const change_title = (event) => {
    title.value = event;
};
const change_description = (event) => {
    description.value = event;
};
const change_color = (event) => {
    color.value = event;
};
const update = () => {
    cal_store.updateActivity(props.activity, {
        id: props.activity.id,
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
        description: description.value,
    });/*
    console.log({
        id: props.activity.id,
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
        description: description.value,
    });*/
    closeDialog();
};
const add = () => {
    if (validate()) {
        return 0;
    }
    cal_store.addActivity({
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
        description: description.value,
    });
    closeDialog();
};
const validate = () => {
    if (typeof start_time.value === "undefined") {
        window.alert("start_time is empty");
        return true;
    }
    if (typeof end_time.value  === "undefined"|| end_time.value ==="") {
        window.alert("end_time is empty");
        return true;
    }/*
    if (typeof end_time.value === "undefined" || end_time.value ==="") {
        window.alert("end_time is empty");
        return true;
    }*/
};

const submit = () => {
    /*
    cal_store.addActivity({
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
    });
    cal_store.updateActivity(props.activity, {
        id: props.activity.id | null,
        title: title.value,
        start_time: start_time.value,
        end_time: end_time.value,
        color: color.value,
    });*/
    cal_store.updateActivity(props.activity, updatedActivity);
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