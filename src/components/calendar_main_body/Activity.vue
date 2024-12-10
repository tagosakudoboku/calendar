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
    //console.log(props.activity);  
    // コンポーネントがマウントされた後にログを出力
});
</script>

<style scoped>
.activity{

}
</style>