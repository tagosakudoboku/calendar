<template>
    <div class="calendar_main">
        <Pane />
        <CalendarMainBody />
    </div>
</template>


<script setup>
import CalendarMainBody from './CalendarMainBody.vue';
import Pane from './Pane.vue';
</script>
<style>
    .calendar_main{
        box-sizing: border-box;

        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 20% 80%;
        /* height: 100%;
        border-bottom: 2px solid #ccc;

        
        font-size: 64px;

        display: flex;
        align-items: center; */
    }
</style>