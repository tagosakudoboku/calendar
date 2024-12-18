<template>
    <div class="save_btn">
        <button>Save</button>
    </div>
</template>

<script setup>

</script>


<style scoped>
    .save_btn > *{
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

    .save_btn > *:active{
        background-color: #0E4A9E;
    }

    button {
        all: unset;
    }
</style>