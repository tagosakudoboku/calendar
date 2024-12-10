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