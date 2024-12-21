<template>
    <div class="mini_calendar">
        <div class="mini_calendar_header">
            <Period :base_date="date"/>
            <Prev @click="move(-30)"></Prev>
            <Next @click="move(30)"></Next>
        </div>
        <div class="row" v-for="n in 6">
            <span v-for="j in 7" @click="click(dates[7*(n-1) + (j-1)])">
                {{ dates[7*(n-1) + (j-1)].getDate()}}
            </span>
        </div>
    </div>
</template>
<script setup>
import { getThisMonth,getThisMonthFirstDate,addDay} from '../function.js';
import { useCalendarStore } from '@/stores/calendar.js';
import { defineEmits,watch,ref } from 'vue';
import Next from './mini_calendar/Next.vue';
import Prev from './mini_calendar/Prev.vue';
import Period from './mini_calendar/Period.vue';
import { off } from 'hammerjs';
const cal_store = useCalendarStore();

const emit = defineEmits(['date-selected']);
let date = ref(cal_store.base_date);
let dates = ref(getThisBoard(date.value));

const click = (d) => {
    emit('date-selected', d);
};

function move(offset = 1)
{
    date.value = addDay(date.value, offset);
    dates.value =getThisBoard(date.value);
}

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
.mini_calendar > *{
    user-select: none;
}
.mini_calendar_header {
    display: flex;
}

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