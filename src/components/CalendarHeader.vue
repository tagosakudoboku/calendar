<template>
    <div class="calendar_header">
        カレンダー
        <TodayBtn @click="toToday"/>
        <Prev @click="click(-7)" />
        <Next @click="click(7)"  />
        <ShowModalBtn />
        <Period :base_date="cal_store.base_date"/>
    </div>
</template>

<script setup>
import TodayBtn from './calendar_header/TodayBtn.vue';
import ShowModalBtn from './_shared/ShowModalBtn.vue';
import Prev from './calendar_header/Prev.vue';
import Period from './calendar_header/Period.vue';
import Next from './calendar_header/Next.vue';
import { watch } from 'vue';
import { addDay, getThisWeek } from './function.js';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();

let date = cal_store.base_date;

function click(offset = 1)
{
    cal_store.setBaseDate(addDay(date, offset));
}

const toToday = () =>{
    cal_store.setBaseDate(new Date());
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