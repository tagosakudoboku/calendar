<template>
    <div class="period_toggle">
        <select @change="change">
            <option value="1">1Day</option>
            <option value="5">5Day</option>
            <option value="7">week</option>
            <option value="31">month</option>
            <option value="365">year</option>
        </select>
    </div>
</template>


<script setup>
const emit  = defineEmits(["change"]);

const change = (event) => {
  emit("change", Number(event.target.value)); // 選択された値を親コンポーネントに送信
};

</script>
<style scoped>
    .period_toggle {

    }

    .period_toggle > select{
        height: 64px;
        width: 196px;
        font-size: 36px;

        border-radius: 32px;
    }

    .period_toggle > select > option{
        font-size: 36px;
    }
</style>