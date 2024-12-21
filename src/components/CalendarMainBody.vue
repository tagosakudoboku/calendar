<template>
    <div class="calendar_main_body">
        <div class="timeline_headers" :key="offset" >
            <!-- <TimelineHeader v-for="(day, index) in week" :key="index" 
            :date="day" /> -->
            <TimelineHeader 
                v-for="n in activities.length" :key="n" 
                :date="week[n-1]" 
                :offset = "activities.length"
            /> 
        </div>
        
            <div class="timelines" :key="activities" >
                <TimelineScale />
                <Timeline v-for="n in activities.length" :key="n"
                    :activities="activities[n-1]"
                    ref="timelines"
                    @dblclick="keydown($event, week[n-1])"
                    :offset = "activities.length"
                />
            </div>
    </div>
</template>

<script setup>
import TimelineHeader from './calendar_main_body/TimelineHeader.vue';
import Timeline from './calendar_main_body/Timeline.vue';
import TimelineScale from './calendar_main_body/TimelineScale.vue';
import { watch,ref, onMounted,nextTick } from 'vue';
import { addDay, getThisWeek,runCalendar,getThatDates,getDateSeq } from './function.js';
import Hammer from 'hammerjs';
import { useCalendarStore } from '@/stores/calendar';
const cal_store = useCalendarStore();




let date = cal_store.base_date;
const offset = ref(cal_store.offset);
const activities = ref(runCalendar(cal_store.fetchActivities()));
// let week = ref(getThisWeek(date));
let week = ref(getDateSeq(date, offset.value));



const swipe = (e) => {
    if (e.direction === 4) {
            cal_store.setBaseDate(addDay(date, -7));
        } else if(e.direction === 2) {
            cal_store.setBaseDate(addDay(date, 7));
        }
};

onMounted(() => {
    adjustHammer(document.querySelector('.calendar_main_body'), swipe);
    cal_store.notify();
});

watch(() =>cal_store.base_date, ()=>{
    date = cal_store.base_date;
    //week.value = getThisWeek(date);
    week.value = getDateSeq(date, offset.value);
});

watch(() =>cal_store.target_activities, ()=>{
    activities.value = cal_store.target_activities;
});

watch(
    ()=>cal_store.offset, 
    ()=> {
        offset.value = cal_store.offset;
        week.value = getDateSeq(date, offset.value);
    }
);


const keydown = (e,date) => {
    cal_store.pasteActivity({
        x:e.clientX,
        y: e.offsetY,
        first_date:week.value[0],
        date: date,
    });
};

const timelines = ref([]);

const adjustHammer = (el, func) => {
    const manager = new Hammer.Manager(el);
    manager.add(new Hammer.Swipe());
    manager.on('swipe', func);
}
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
        /*width: calc(100% - 15px);*/
        width: 100%;
    }

    .timeline_headers > .timeline_header:first-child {
        margin-left: 50px;
    }
    .timelines {
        
        /**
         *heightを%にすると画面より要素が大きくなる、が%にしたい
         */
        /*height: 836px;*/
        height: calc(100% - 16%); 
        /** width: calc(100% - 15px);*/
        width:100%;
        display: flex;
        overflow-y: scroll !important;;
        overflow-x: hidden;

        background: linear-gradient(#ccc 1.5px, transparent 0px) #fff;
        line-height: 30px;
        background-size: 100% 60px;
        background-attachment: local; 
    }

    .timelines::-webkit-scrollbar {
        display: none;
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

    .timeline_headers > .timeline_header:first-child {
        margin-left: 8%;
    }
}
</style>