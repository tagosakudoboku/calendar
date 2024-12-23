<template>
    <div class="timeline_header" :style="style">
        {{ date.getDate() }}
    </div>
</template>
<script setup>
const props = defineProps({
    date: Object,
    offset: {
        type: Number,
        default: 7
    },
});

const day = props.date.getDay();
const color = day===0?'red':day===6?'blue':'black';

const style = {
    width: `calc((100% - 50px)/${props.offset})`,
};

</script>

<style scoped>
.timeline_header {
    font-size: 32px;
    font-weight: 600;
    color: v-bind(color);
    /* width: calc(100%/7); 
    width: calc((100% - 50px)/7);*/
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border-left: 1.5px solid #ccc;
}

@media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  .timeline_header {
        width: calc((100% - 8%)/7);
    }
}
</style>