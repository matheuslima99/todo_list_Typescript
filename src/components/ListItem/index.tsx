import * as C from "./styles";

import { FiTrash } from "react-icons/fi";

import { TaskItem } from "../../types/TaskItem";

type Props = {
  data: TaskItem;
  delTask: () => void;
};

export const ListItem = ({ data, delTask }: Props) => {
  return (
    <C.Container>
      <C.TaskName>{data.task}</C.TaskName>
      <C.DeleteButton onClick={delTask}>
        <FiTrash color="#fff" size={23} />
      </C.DeleteButton>
    </C.Container>
  );
};
