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
</script>

<style scoped>
.activity{
    position: absolute;
    top: v-bind(top);
    height: v-bind(height);
    background-color: v-bind(props.activity.color);

    font-size: 20px;
}
</style>