<template>
    <div class="pane" :class="{'none': isActive}">
        <AddActivityBtn />
        <MiniCalendar @date-selected="select" />
    </div>
</template>

<script setup>
import AddActivityBtn from './pane/AddActivityBtn.vue';
import MiniCalendar from './pane/MiniCalendar.vue';
import { useCalendarStore } from '@/stores/calendar';
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