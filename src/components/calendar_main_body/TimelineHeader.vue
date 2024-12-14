<template>
    <div class="timeline_header">
        {{ date.getDate() }}
    </div>
</template>
<script setup>
const props = defineProps({
    date: Object
});
</script>

<style scoped>
.timeline_header {
    font-size: 20px;
}
</style>