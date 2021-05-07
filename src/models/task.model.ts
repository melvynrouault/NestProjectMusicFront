export enum TaskStatus {
  OPEN = 'open',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
};

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

export default Task;