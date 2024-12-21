<template>
    <div class="mini_calendar">
        <div class="mini_calendar_header">
            <Prev></Prev>
            <Next></Next>
        </div>
        <div class="row" v-for="n in 6">
            <span v-for="j in 7" @click="click(dates[7*(n-1) + (j-1)])">
                {{ dates[7*(n-1) + (j-1)].getDate()}}
            </span>
        </div>
    </div>
</template>
<script setup>
import { getThisMonth,getThisMonthFirstDate} from '../function.js';
import { useCalendarStore } from '@/stores/calendar.js';
import { defineEmits,watch,ref } from 'vue';
import Next from '../calendar_header/Next.vue';
import Prev from '../calendar_header/Prev.vue';
const cal_store = useCalendarStore();

const emit = defineEmits(['date-selected']);

let dates = ref(getThisBoard(cal_store.base_date));

const click = (date) => {
    emit('date-selected', date);
};

watch(
    () =>cal_store.base_date,
    ()=>{
       dates.value =getThisBoard(cal_store.base_date);
    }
);

function getThisBoard(base_date = new Date())
{
    const board = [];
    const d = getThisMonthFirstDate(base_date);
    d.setDate(d.getDate()-d.getDay());
    for (let i=0;i<42;++i) {
        board.push(new Date(d));
        d.setDate(d.getDate()+1);
    }
    return board;
}
</script>


<style scoped>
.row {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.row > span {
    display: flex;
    justify-content: center; /* コンテンツを水平方向で中央揃え */
    font-size: 28px;
    align-items: center;
    width: calc(100%/7);
    border-radius: 50%;
}

.row > span:hover{
    background-color: darkgray;
}
</style>