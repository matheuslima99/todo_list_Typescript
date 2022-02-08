import * as C from "./App.styles";
import { useEffect, useState, useRef } from "react";

import { ListItem } from "./components/ListItem";

import { TaskItem } from "./types/TaskItem";
import {
  getSavedTask,
  saveTask,
  deleteAllTasks,
  deleteTask,
} from "./services/tasksStorage";

const App = () => {
  const [myTasks, setMyTasks] = useState<TaskItem[]>([]);
  const [inputTask, setInputTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadTasks = () => {
      const tasks = getSavedTask("@Todo-list");
      setMyTasks(tasks);
    };

    loadTasks();
  }, []);

  useEffect(() => {
    saveTask("@Todo-list", myTasks);
    setInputTask("");
  }, [myTasks]);

  const handleAddTask = (taskName: string) => {
    if (taskName.trim() === "") {
      alert("Você precisa digitar o nome da tarefa");
      setInputTask("");
      inputRef.current?.focus();
      return;
    }
    const newTask: TaskItem = {
      id: myTasks.length + 1,
      task: taskName,
      done: true,
    };

    setMyTasks([...myTasks, newTask]);
    inputRef.current?.focus();
  };

  const handleDelTask = (taskList: TaskItem[], task: TaskItem) => {
    const newList = deleteTask(taskList, task);
    setMyTasks(newList);
    inputRef.current?.focus();
  };

  const handleDelAllTasks = () => {
    deleteAllTasks("@Todo-list");
    setMyTasks([]);
    inputRef.current?.focus();
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Todo list</C.Header>
        <C.InputArea>
          <C.InputField
            type="text"
            placeholder="Adicione uma tarefa..."
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            autoFocus={true}
            ref={inputRef}
          />
          <C.AddButton onClick={() => handleAddTask(inputTask)}>+</C.AddButton>
        </C.InputArea>

        <C.TasksArea>
          {myTasks.map((item) => {
            return (
              <ListItem
                key={item.id}
                data={item}
                delTask={() => handleDelTask(myTasks, item)}
              />
            );
          })}
        </C.TasksArea>

        <C.FooterArea>
          <C.Description>
            Você tem <span>{myTasks.length}</span> tarefas pentendes
          </C.Description>
          <C.ClearButton onClick={handleDelAllTasks}>Limpar tudo</C.ClearButton>
        </C.FooterArea>
      </C.Area>
    </C.Container>
  );
};

export default App;
