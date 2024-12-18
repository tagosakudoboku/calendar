<template>
    <div class="copy_btn">
        <button @click="copied">コピーする</button>
    </div>
</template>

<script setup>
const emit = defineEmits(["copied"]);

const copied = () => {
    emit('copied', '子コンポーネントからのデータ');
};
</script>

<style scoped>
.copy_btn {
        height: 64px;
        width: 200px;
        background-color: #1A67D2;

        font-size: 36px;
        color: white;
        text-align: center;
        border-radius: 8px;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
}

</style>