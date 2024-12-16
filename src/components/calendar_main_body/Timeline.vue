<template>
    <div class="timeline">
        <Activity 
            v-for="(act, index) in activities" 
            :key="act.id" 
            :activity="act"
        />
    </div>
</template>

<script setup>
import Activity from './Activity.vue';

const props = defineProps({
    activities: Array,
});

</script>
<style>
    .timeline {
        width: calc((100% - 50px)/7);
        border-left: #ccc 2px solid;

        box-sizing: border-box;
        height: 1440px;

        position:relative;
        top: 0px;
    }

@media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  .timeline {
        width: calc((100% - 8%)/7);
    }
}
</style>