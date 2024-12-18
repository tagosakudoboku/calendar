<template>
    <div class="discard_btn">
        <button @click="discard">削除する</button>
    </div>
</template>

<script setup>
const emit = defineEmits(["discard"]);

const discard = () => {
    emit('discard', '子コンポーネントからのデータ');
};
</script>


<style scoped>
    .discard_btn > *{
        height: 64px;
        width: 200px;
        background-color: #ccc;

        font-size: 36px;
        color: white;
        text-align: center;
        border-radius: 8px;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .discard_btn > *:active{
        background-color: #0E4A9E;
    }

    button {
        all: unset;
    }
</style>