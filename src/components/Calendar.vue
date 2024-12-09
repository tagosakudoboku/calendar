<script setup>
import CalendarHeader from './CalendarHeader.vue'
import CalendarMain from './CalendarMain.vue';
</script>

<template>
    <div class="calendar">
        <CalendarHeader />
        <CalendarMain />
    </div>
</template>

<style scoped>
.calendar {
  width:100%;
  height: 100%;
  display: grid;

  grid-template-rows: 76px auto;
}


@media (min-width: 1024px) {
  
}
</style>
