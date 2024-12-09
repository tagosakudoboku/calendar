import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCalendarStore = defineStore('calendar', () => {
  /**
   * 
   */
  const base_date = ref(new Date());

  /**
   * 
   */
  const offset = ref(7);

  /**
   * 
   */
  const activities = ref([]);

  //const doubleCount = computed(() => count.value * 2);

  /**
   * 
   * @param {*} offset 
   */
  function setOffset(offset) {
    offset.value = offset;
  }

  function fetchActivities()
  {

  }

  return { base_date, offset, setOffset, };
})
