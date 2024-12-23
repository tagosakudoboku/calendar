<template>
    <div class="add_act_btn">
        <UseModal ref="use_modal">
            <template #content="{ closeModal }">
                <ActivityForm @close="closeModal" />
            </template>
        </UseModal>
        <AddActivityBtn @add="showModal" />
    </div>
</template>

<script setup>
import UseModal from './modal/UseModal.vue';
import AddActivityBtn from './../pane/AddActivityBtn.vue';
import ActivityForm from "./../pane/ActivityForm.vue"; 
import { ref } from 'vue';

const use_modal = ref(null);

const showModal = () => {
    use_modal.value.showModal();
};
</script>


<style scoped>
.add_act_btn  >.add_activity_btn{
    width: 128px;
    font-size: 16px;
}
.add_act_btn  >.add_activity_btn > *{
    
    font-size: 16px;
    width: 128px;
}
</style>