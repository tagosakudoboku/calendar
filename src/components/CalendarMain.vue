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
        height: 100%;
        max-height: 100%;
        
        /*
        border-bottom: 2px solid #ccc;

        
        font-size: 64px;

        display: flex;
        align-items: center; */
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

    .calendar_main > .calendar_main_body{
        width:100%;
    }
}
</style>