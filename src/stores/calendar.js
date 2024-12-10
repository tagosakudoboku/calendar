import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {acts}  from "../activities.js";
import { runCalendar } from '@/components/function.js';

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

  /**
   * 
   */
  const target_activities = ref([]);

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
    notify();
  }

  function fetchActivities()
  {
    activities.value = acts;
    return activities.value;
  }

  function setTargetActivities(activities)
  {
    target_activities.value = activities;
  }

  function notify()
  {
    target_activities.value = runCalendar(activities.value, base_date.value);
  }

  return { base_date, target_activities ,offset, setOffset, setBaseDate,fetchActivities};
})
