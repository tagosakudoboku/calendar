<template>
    <div class="period">
        <span>
            {{ base_date.getMonth()+1}} - {{ base_date.getDate() }}
                ~
            {{ base_date.getMonth()+1 }} - {{ base_date.getDate() }}
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