<template>
    <div class="calendar_main_body">
        <Timeline v-for="n in 7" :key="n"/>
    </div>
</template>

<script setup>
import Timeline from './Timeline.vue';
</script>

<style>
    .calendar_main_body{
        height: 100%;
        border-bottom: 4px solid red;

        box-sizing: border-box;
        font-size: 64px;

        display: flex;
        align-items: center;
    }
</style>