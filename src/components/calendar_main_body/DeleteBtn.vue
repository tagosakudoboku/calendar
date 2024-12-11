<template>
    <div class="delete_btn">
        <button @click="discard">更新</button>
    </div>
</template>

<script setup>
const emit = defineEmits(["delete"]);

const discard = () => {
    emit('delete', '子コンポーネントからのデータ');
};
</script>


<style scoped>
    .update_btn > *{
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

    .update_btn > *:active{
        background-color: #0E4A9E;
    }

    button {
        all: unset;
    }
</style>