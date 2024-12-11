<template>
    <div class="calendar_main_body">
        <div class="timeline_headers">
            <TimelineHeader v-for="(day, index) in week" :key="index" 
            :date="day" />
        </div>
        <div class="timelines">
            <TimelineScale />
            <Timeline v-for="n in 7" :key="n"
                :activities="activities[n-1]"
            />
        </div>
    </div>
</template>

<script setup>
import TimelineHeader from './calendar_main_body/TimelineHeader.vue';
import Timeline from './calendar_main_body/Timeline.vue';
import TimelineScale from './calendar_main_body/TimelineScale.vue';
import { watch,ref, onMounted } from 'vue';
import { addDay, getThisWeek,runCalendar } from './function.js';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();




let date = cal_store.base_date;
let week = ref(getThisWeek(date));
const activities = ref(runCalendar(cal_store.fetchActivities()));

onMounted(() => {
    cal_store.notify();
});

watch(() =>cal_store.base_date, ()=>{
    date = cal_store.base_date;
    week.value = getThisWeek(date);
});

watch(() =>cal_store.target_activities, ()=>{
    activities.value = cal_store.target_activities;
});
</script>

<style>
    .calendar_main_body{
        height: 100%;
        border-bottom: 4px solid red;

        box-sizing: border-box;
        font-size: 64px;

        
        /* align-items: center; */
    }

    .timeline_headers {
        display: flex;
        height: 16%;
    }
    .timelines {
        display: flex;
        /**
         *heightを%にすると画面より要素が大きくなる、が%にしたい
         */
        height: 700px;

        overflow-y: scroll;
        overflow-x: hidden;

        background: linear-gradient(#ccc 1.5px, transparent 0px) #fff;
        line-height: 30px;
        background-size: 100% 60px;
        background-attachment: local;
    }
</style>