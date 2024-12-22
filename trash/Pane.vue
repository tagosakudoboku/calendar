<template>
    <div class="pane" :class="{'none': isActive}">
        <UseModal ref="use_modal">
            <template #content="{ closeModal }">
                <!-- <ActivityForm @close="closeModal" /> -->
            </template>
            <template #modal_display="{ onShowModal }">
                <AddActivityBtn @click="onShowModal" />
            </template>
        </UseModal>
        <AddActivityBtn @add="showModal" />
        <MiniCalendar @date-selected="select" />
    </div>
</template>

<script setup>
import UseModal from './_shared/modal/UseModal.vue';
import AddActivityBtn from './pane/AddActivityBtn.vue';
import ActivityForm from './pane/ActivityForm.vue';
import MiniCalendar from './pane/MiniCalendar.vue';
import { useCalendarStore } from '@/stores/calendar';
import { ref } from 'vue';
const cal_store = useCalendarStore();
const select = ($event) => {
    cal_store.setBaseDate($event);
};
const props = defineProps({
    active: {
        type: Boolean,
        default: true,
    }
});
const isActive = props.active;

const use_modal = ref(null);

const showModal = () => {
    use_modal.value.showModal();
};
</script>


<style scoped>
.pane{
    width:100%;
    height: 100%;
}
/*
.none {
    display: none;
}*/
</style>