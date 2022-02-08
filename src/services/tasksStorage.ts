import { TaskItem } from "../types/TaskItem";

export const getSavedTask = (key: string): TaskItem[] => {
  const myTasks: any = localStorage.getItem(key);
  const savedTasks = JSON.parse(myTasks) || [];
  return savedTasks;
};

export const saveTask = (key: string, newTask: any): void => {
  let myTasks = getSavedTask(key);
  const equalTasks = myTasks.some(
    (task: TaskItem) => task.task === newTask.task
  );

  if (equalTasks) {
    alert("Você já adicionou essa tarefa!");
  }
  myTasks = [];
  myTasks.push(...newTask);
  localStorage.setItem(key, JSON.stringify(myTasks));
};

export const deleteAllTasks = (key: string) => {
  localStorage.removeItem(key);
};

export const deleteTask = (taskList: TaskItem[], task: TaskItem) => {
  const newList = taskList.filter((element) => {
    return element.id !== task.id;
  });

  localStorage.setItem("@Todo-list", JSON.stringify(newList));
  return newList;
};
