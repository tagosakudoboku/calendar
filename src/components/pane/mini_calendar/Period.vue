<template>
    <div class="period">
        <span>
            {{ base_date.getFullYear() }} - {{ base_date.getMonth()+1}}
        </span>
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

<style scoped>
.period {
    font-size: 32px;
}
</style>