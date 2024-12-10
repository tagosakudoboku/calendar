<template>
    <div class="calendar_header">
        カレンダー
        <TodayBtn />
        <ShowModalBtn />
    </div>
</template>

<script setup>
import TodayBtn from './calendar_header/TodayBtn.vue';
import ShowModalBtn from './_shared/ShowModalBtn.vue';
const click =()=>{
    
}



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