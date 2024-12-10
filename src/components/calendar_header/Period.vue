<template>
    <div class="period">
        {{ base_date.getDate() }}
    </div>
</template>
<script setup>
const props = defineProps({
    base_date: {
        type: Date,
        default: new Date()
    }
});
</script>