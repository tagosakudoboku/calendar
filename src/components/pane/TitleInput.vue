<template>
    <div class="title_input" >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="width: 64px; height: 64px; opacity: 1;" xml:space="preserve">
            <g>
                <path class="st0" d="M384.164,290.844c9.641-13.688,12.75-30.953,8.469-47.141l-43.734-135.516H163.117l-43.75,135.516
                    c-4.281,16.188-1.172,33.453,8.469,47.141l104.609,148.344v23.688c-6.359,5.031-10.422,12.813-10.422,21.563
                    c0,15.219,12.328,27.563,27.563,27.563v-48.844v-6.281V264.266c-10.375-2.828-18-12.297-18-23.563
                    c0-13.484,10.922-24.422,24.422-24.422c13.484,0,24.422,10.938,24.422,24.422c0,11.266-7.641,20.734-18,23.547v192.625v6.281V512
                    c15.219,0,27.563-12.344,27.563-27.563c0-8.75-4.078-16.531-10.438-21.563v-23.688L384.164,290.844z" style="fill: #000000;"></path>
                <rect x="157.086" class="st0" width="197.844" height="88.047" style="fill: #000000;"></rect>
            </g>
        </svg>
        <input 
            type="text" 
            placeholder="タイトルを追加" 
            @change="change"
            v-model="title"
            required
        >
    </div>
</template>

<script setup>
import { defineEmits ,ref} from 'vue';
const props = defineProps({title: String|null});
const emit  = defineEmits(['change']);

const title = ref(props?.title);

const change = () => {
    emit('change', title.value);
    console.log('input change event', title.value);
};
</script>

<style scoped>
.title_input{
    height: 64px;
    width: 256px;
    
    align-items: center;
    display: flex;
    justify-content: center;
}

.title_input:hover{
    
}

input[type="text"]{
    height: 48px;
    width: 256px;border: none;border-bottom: 4px blue solid;
}

        input[type="text"]:focus {
            outline: none;
            border-bottom: 4px blue solid;
        }
</style>