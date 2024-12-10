<template>
    <div class="today_btn">
        <span>Today</span>
       
    </div>
</template>

<script setup>



const emit  = defineEmits(["close"]);

const click = () => {
    emit("close", []);
};

</script>

<style>
.today_btn {
    width: 196px;
    height: 64px;
    border: 1.5px solid #ccc;
        
    border-radius: 32px;
    align-items: center;
    display: flex;
    justify-content: center;
    user-select: none;
}

.today_btn:hover {
    background-color: #ccc;
}
</style>