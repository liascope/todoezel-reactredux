import { createSlice } from "@reduxjs/toolkit";
import { todayISO} from "../../lib/hooks/config";

const savedTasks = JSON.parse(localStorage.getItem("doLater")) || [];

const initialState = {
  allSavedTasks: savedTasks,
  savedDate:''
};

  export const selectTodaysTasks = (state) => {
  const todaysTasks = state.doLater.allSavedTasks.find(
    e => e.date === todayISO
  )?.tasks;
  if (!todaysTasks) return;
  return todaysTasks || [];
};
const doLaterSlice = createSlice({
  name: 'doLater',
  initialState,
  reducers: {
    addTasks: {
      prepare({ tasks, date }) {
        return { payload: { tasks, date } };
      },
      reducer(state, action) {
        const { tasks, date } = action.payload;
         state.savedDate = date
        const existing = state.allSavedTasks.find(e => e.date === date);
        if (existing) {
          existing.tasks.push(...tasks);
        } else {
          state.allSavedTasks.push({ date, tasks });
         
        }
      }
    },
    deleteTask(state, action) {
      state.allSavedTasks = state.allSavedTasks.filter(t => t.date !== action.payload);
    },
    
checkTask(state, action) {
  const taskId = action.payload;

  const entry = state.allSavedTasks.find(e => e.date === todayISO);
  if (!entry) return;

  const task = entry.tasks.find(t => t.id === taskId);
  if (task) task.done = !task.done;
},

markDeleted(state, action) {
  const taskId = action.payload;
 
  const entry = state.allSavedTasks.find(e => e.date === todayISO);
  if (!entry) return;

  const task = entry.tasks.find(t => t.id === taskId);
  if (task) task.delete = true;
},
  }
});


export const { addTasks, deleteTask, markDeleted, checkTask } = doLaterSlice.actions;
export default doLaterSlice.reducer;
