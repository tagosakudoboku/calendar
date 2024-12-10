<template>
    <div class="calendar_main_body">
        <div class="timeline_headers">

        </div>
        <div class="timelines">
            <TimelineScale />
            <Timeline v-for="n in 7" :key="n"/>
        </div>
    </div>
</template>

<script setup>
import Timeline from './calendar_main_body/Timeline.vue';
import TimelineScale from './calendar_main_body/TimelineScale.vue';
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