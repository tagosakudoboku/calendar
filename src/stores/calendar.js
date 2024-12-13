import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {acts,acts2}  from "../activities.js";
import { editActs, calcActivityID, runCalendar,convert2ActivityObj,deleteActivity,calcTop, addDay } from '@/components/function.js';
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
   * @param {*} num
   */
  function setOffset(num) {
    offset.value = num;
    notify();
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

  /**
   * 
   */
  const copied_activity= ref(null);

  /**
   * 
   */
  function copyActivity(activity)
  {
    copied_activity.value = activity;
  }

  function pasteActivity(obj = {})
  {
    if (copied_activity.value === null) {
      return;
    }

    // const num = Math.floor(obj.x/250);
    
    const rtn = copied_activity.value;
    copied_activity.value = null;
    const s = new Date(rtn.start_time);
    s.setDate(obj.date.getDate());

    const e = new Date(rtn.end_time);
    e.setDate(obj.date.getDate());
    
    const act = convert2ActivityObj(rtn, 
      {id: calcActivityID(),
        start_time :s,
        end_time:e,
    });

    activities.value.push(act);
    notify();
    return rtn; 
  }

  return { base_date, notify,target_activities ,
    offset, setOffset, setBaseDate,fetchActivities,
    addActivity,discardActivity, copyActivity,pasteActivity
  };
})
