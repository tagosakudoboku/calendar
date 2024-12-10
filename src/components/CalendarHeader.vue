<template>
    <div class="calendar_header">
        カレンダー
        <TodayBtn @click="click"/>
        <ShowModalBtn />
        <Period :base_date="cal_store.base_date"/>
    </div>
</template>

<script setup>
import TodayBtn from './calendar_header/TodayBtn.vue';
import ShowModalBtn from './_shared/ShowModalBtn.vue';
import Period from './calendar_header/Period.vue';
import { watch } from 'vue';
import { addDay, getThisWeek } from './function.js';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();

let date = cal_store.base_date;
const click =()=>{
    cal_store.setBaseDate(addDay(date));
}

watch(() =>cal_store.base_date, ()=>{
    date = cal_store.base_date;
});



</script>
<style>
    .calendar_header{
        height: 72px;
        border-bottom: 2px solid #ccc;

        box-sizing: border-box;
        font-size: 40px;

        display: flex;
        align-items: center;
    }
</style>