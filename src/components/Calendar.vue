<script setup>
import CalendarHeader from './CalendarHeader.vue'
import CalendarMain from './CalendarMain.vue';
import { watch,ref } from 'vue';
import { useCalendarStore } from '@/stores/calendar';
const calendar_store = useCalendarStore();

/*
const sampleProps = () => {
  watch(()=>{calendar_store.base_date},
    (
      
    )=>{
      console.log("calendar_store.base_date is changed");
  });
};*/
</script>

<template>
    <div class="calendar">
        <CalendarHeader  />
        <CalendarMain />
    </div>
</template>

<style scoped>
.calendar {
  width:100%;
  height: 100%;
  display: grid;

  grid-template-rows: 72px calc(100% - 72px);
}


@media (min-width: 1024px) {
  
}

@media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  .calendar {
      width:100%;
      height: 100%;
      display: grid;

      grid-template-rows: 72px calc(100% - (72px + 72px)) 72px;
      grid-template-columns: 100%;
    }
}
</style>
