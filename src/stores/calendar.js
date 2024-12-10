import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {acts}  from "../activities.js";

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

  function setBaseDate(date_obj)
  {
    base_date.value = new Date(date_obj);
  }

  function fetchActivities()
  {
    activities.value = acts;
    return activities.value;
  }

  return { base_date, offset, setOffset, setBaseDate,fetchActivities};
})
