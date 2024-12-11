import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {acts,acts2}  from "../activities.js";
import { editActs, runCalendar,convert2ActivityObj,deleteActivity,calcTop } from '@/components/function.js';

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
    
    activities.value = editActs(acts);
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

  function addActivity(param)
  {
    const act = convert2ActivityObj(param);
    activities.value.push(act);
    notify();
  }

  function discardActivity(act)
  {
    const acts = deleteActivity(activities.value, act);
    
    // 配列を直接書き換える（リアクティブ性維持）
    //target_activities.value.splice(0, target_activities.value.length, ...acts);
    activities.value.splice(0, activities.value.length, ...acts);
    notify();
  }

  function updateActivity()
  {
    notify();
  }

  return { base_date, notify,target_activities ,offset, setOffset, setBaseDate,fetchActivities,addActivity,discardActivity};
})
