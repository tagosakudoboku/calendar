<template>
    <div class="activity">
        {{ activity.title }}
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const props = defineProps({
    activity: Object
});


onMounted(() => {
    // console.log(props.activity);  
});

const height = props.activity.height + "px";
const top= props.activity.top + "px";
const width = props.activity.width + "%";
const left =  props.activity.left+ "%";
</script>

<style scoped>
.activity{
    position: absolute;
    top: v-bind(top);
    height: v-bind(height);
    width :v-bind(width);
    left: v-bind(left);
    border-radius: 4px;
    background-color: v-bind(props.activity.color);

    font-size: 20px;
    overflow: hidden;

    
}
</style>