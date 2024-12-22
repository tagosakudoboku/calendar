<template>
    <div class="activity" @click="showModal">
        {{ activity.title }}
        <ModalLogic ref="modal" :activity="activity" />

        <UseModal>
            <template #content="{ closeModal }">
                <ActivityForm @close="closeModal" />
            </template>
        </UseModal> 
    </div>
</template>

<script setup>
import { onMounted,ref,onBeforeUpdate} from 'vue';
import UseModal from '../_shared/modal/UseModal.vue';
import ModalLogic from './ModalLogic.vue';
const props = defineProps({
    activity: Object
});

const modal = ref(null);

onMounted(() => {
    // console.log(props.activity);  
});

onBeforeUpdate(() => {
    //console.log(props.activity);
});
const showModal = () => {
    modal.value.showModal();
};

const height = props.activity.height + "px";
const top= props.activity.top + "px";
const width = props.activity.width + "%";
const left =  props.activity.left+ "%";
</script>

<style scoped>
.activity{
    position: absolute;
    top: v-bind(top);
    height: v-bind(height);
    width :v-bind(width);
    left: v-bind(left);
    border-radius: 4px;
    background-color: v-bind(props.activity.color);

    font-size: 20px;
    overflow: hidden;

    user-select: none;
    cursor: pointer;
}
</style>