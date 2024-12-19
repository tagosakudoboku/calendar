<template>
    <div class="calendar_header">
        カレンダー
        <TodayBtn @click="toToday"/>
        <Prev @click="click(-local_offset)" />
        <Next @click="click(local_offset)"  />
        <ShowModalBtn />
        <Period :base_date="cal_store.base_date"/>
        
        <PeriodToggle @change="change" />
    </div>
</template>

<script setup>
import TodayBtn from './calendar_header/TodayBtn.vue';
import ShowModalBtn from './_shared/ShowModalBtn.vue';
import Prev from './calendar_header/Prev.vue';
import Period from './calendar_header/Period.vue';
import Next from './calendar_header/Next.vue';
import PeriodToggle from './calendar_header/PeriodToggle.vue';
import { watch,ref } from 'vue';
import { addDay, getThisWeek } from './function.js';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();

let date = cal_store.base_date;
const local_offset = ref(cal_store.offset);

function click(offset = 1)
{
    cal_store.setBaseDate(addDay(date, offset));
}

const toToday = () =>{
    cal_store.setBaseDate(new Date());
}

const change = (e) => {
    cal_store.setOffset(e);
};

watch(() =>cal_store.base_date, ()=>{
    date = cal_store.base_date;
});

watch(() =>cal_store.offset, ()=>{
    local_offset.value = cal_store.offset;
    
});

</script>
<style>
    .calendar_header{
        height: 72px;
        width: 100%;
        border-bottom: 2px solid #ccc;

        box-sizing: border-box;
        font-size: 40px;

        display: flex;
        align-items: center;
    }

@media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
    .calendar_header {
      width:100%;
      height: 100%;
    
      display: flex;
        align-items: center;
    }

    .calendar_header > .today_btn, .next, .prev, .period_toggle{
        display: none;
    }
}
</style>