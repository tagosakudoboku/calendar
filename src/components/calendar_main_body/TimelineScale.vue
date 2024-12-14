<script setup>

</script>

<template>
    <div class="time_scale">
        <span v-for="n in 23" :key="n">{{ n }}:00</span>
    </div>
</template>

<style  scoped>
    .time_scale {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 1440px;
        width: 50px;
        background-color: white;
    }

    .time_scale >span:first-child {
        margin-top: 45px;
    }

    .time_scale >span:last-child {
        margin-bottom: 45px;
    }

    .time_scale > span {
        text-align: right;
    }

    .time_scale > span {
        font-size: 32px;
    }

    @media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  

    .time_scale > span{
            font-size: 20px;
        }
    }
</style>