<template>
    <div class="calendar_main" :class="{'wide': isActive}">
        <Pane v-if="!isActive" />
        <CalendarMainBody />
        <AddActBtn />
    </div>
</template>


<script setup>
import CalendarMainBody from './CalendarMainBody.vue';
import Pane from './Pane.vue';
import { ref,watch } from 'vue';
import { useCalendarStore } from '@/stores/calendar';
import AddActBtn from './_shared/AddActBtn.vue';
const cal_store = useCalendarStore();
const isActive = ref(cal_store.wide);
watch(()=>cal_store.wide, ()=>{
    isActive.value = cal_store.getWide();
});
</script>
<style>

    .calendar_main{
        box-sizing: border-box;

        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 20% 80%;
        grid-template-rows: 100%;
        height: 100%;
        width: 100%;
        /*
        border-bottom: 2px solid #ccc;

        
        font-size: 64px;

        display: flex;
        align-items: center; */
    }

    .wide {
        
        grid-template-columns:100%;
    }

    .calendar_main >.add_act_btn{
        display: none;
    }

    @media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  .calendar_main {
      width:100%;
      height: 100%;
    
      /* display: none;
        align-items: center; */
        display: unset;
    }

    .calendar_main > .pane{
        display: none;
    }

    .calendar_main > .add_act_btn{
        display: unset;
    }

    /* .calendar_main > .calendar_main_body{
        width:100%;
    } */
}
</style>