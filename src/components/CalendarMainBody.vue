<template>
    <div class="calendar_main_body">
        <div class="timeline_headers">
            <TimelineHeader v-for="(day, index) in week" :key="index" 
            :date="day" />
        </div>
        
            <div class="timelines" :key="activities" >
                <TimelineScale />
                <Timeline v-for="n in offset" :key="n"
                    :activities="activities[n-1]"
                    ref="timelines"
                    @dblclick="keydown($event, week[n-1])"
                />
            </div>
        
    </div>
</template>

<script setup>
import TimelineHeader from './calendar_main_body/TimelineHeader.vue';
import Timeline from './calendar_main_body/Timeline.vue';
import TimelineScale from './calendar_main_body/TimelineScale.vue';
import { watch,ref, onMounted,nextTick } from 'vue';
import { addDay, getThisWeek,runCalendar,getThatDates } from './function.js';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();




let date = cal_store.base_date;
let week = ref(getThisWeek(date));
const activities = ref(runCalendar(cal_store.fetchActivities()));
const offset = ref(cal_store.offset);

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

watch(
    ()=>cal_store.offset, 
    ()=> {
        offset.value = cal_store.offset;
    }
);


const keydown = (e,date) => {
    cal_store.pasteActivity({
        x:e.clientX,
        first_date:week.value[0],
        date: date,
    });
};

const timelines = ref([]);
</script>

<style>
    .calendar_main_body{
        height: 100%;
        width: 100%;
        

        box-sizing: border-box;
        font-size: 64px;
        max-height: 100%;
        
        /* align-items: center; */
        /* overflow: hidden; */
    }

    .timeline_headers {
        display: flex;
        height: 16%;
        width: 100%;
    }
    .timelines {
        
        /**
         *heightを%にすると画面より要素が大きくなる、が%にしたい
         */
        /*height: 836px;*/
        height: calc(100% - 16%); 
        width: calc(100% - 15px);
        display: flex;
        overflow-y: scroll !important;;
        overflow-x: hidden;

        background: linear-gradient(#ccc 1.5px, transparent 0px) #fff;
        line-height: 30px;
        background-size: 100% 60px;
        background-attachment: local; 
    }

    @media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  

  .calendar_main_body{
        height: 100%;
        width: 100%;
        

        box-sizing: border-box;
        font-size: 64px;
        max-height: 100%;
        
        /* align-items: center; */
        /* overflow: hidden; */
    }
}
</style>