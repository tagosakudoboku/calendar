<!-- <template>
    <div class="update_btn">
        <button @click="update">更新</button>
    </div>
</template>

<script setup>
const emit = defineEmits(["update"]);

const update = () => {
    emit('update', '子コンポーネントからのデータ');
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
</style> -->

<template>
    <div class="update_btn">
        <button @click="click">
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 48px; height: 48px; opacity: 1;" xml:space="preserve">
                <g>
                    <polygon class="st0" points="374.107,448.835 34.01,448.835 34.01,194.102 164.947,194.102 164.947,63.165 374.107,63.165 
                        374.107,96.698 408.117,64.049 408.117,29.155 164.947,29.155 34.01,160.092 0,194.102 0,482.845 408.117,482.845 408.117,282.596 
                        374.107,318.034 	" style="fill: #000000;"></polygon>
                    <path class="st0" d="M508.609,118.774l-51.325-51.325c-4.521-4.522-11.852-4.522-16.372,0L224.216,275.561
                        c-1.344,1.344-2.336,2.998-2.889,4.815l-26.21,86.117c-2.697,8.861,5.586,17.144,14.447,14.447l88.886-27.052l210.159-218.741
                        C513.13,130.626,513.13,123.295,508.609,118.774z M243.986,349.323l-16.877-18.447l11.698-38.447l29.139,15.678l15.682,29.145
                        L243.986,349.323z M476.036,110.577L291.414,296.372l-11.728-11.728l185.804-184.631l10.547,10.546
                        C476.036,110.567,476.036,110.571,476.036,110.577z" style="fill: #000000;"></path>
                </g>
            </svg>
            <span>Update</span>
        </button>
        
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit  = defineEmits(['update']);

const click = () => {
    emit('update');
    console.log('update event');
};
</script>

<style scoped>
.update_btn {
    color: white;
    display: flex;
    
    border: none;
    user-select: none;
    height: 64px;
    width: 256px;
}

.update_btn >button{
    /*
    height: 50rem;
    width: 50rem;*/

    height: 64px;
    width: 256px;

    border: none;
    font-size: 2rem;
    
    background-color: #55C500;
    color: white;
    border-radius: 6px;

    display: flex;

    align-items: center;
    /* justify-content: center; */
    padding-left: 32px;
}
.update_btn > button >svg {
    margin-right: 12px;
}

.update_btn >button > span {
    font-weight: 950;
}

.update_btn>button:hover {
    background-color: #25A000;
}


    
@media screen and (max-width: 479px) {
    .update_btn {
        height: 64px;
        width: 64px;
    }

    .update_btn >button {
        width: 64px;
        justify-content: center;
        padding: 0px 0px 0px 0px;
    }

    .update_btn > button >svg {
        margin-right: 0px;
    }
    .update_btn >button > span{
        display: none;
    }
}
</style>