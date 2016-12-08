class TaskController {
  constructor() {
    this.name = 'task';

    this.toDateString = (date) => {
      return new Date(date).toDateString();
    };
  }
}

export default TaskController;
