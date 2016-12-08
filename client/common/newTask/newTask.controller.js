class NewTaskController {
  constructor() {
    const _this = this;
    this.name = 'newTask';

    this.$onInit = () => {
      _this.task = {
        name: undefined,
        createdAt: new Date().getTime(),
        priority: - new Date().getTime(),
        completed: false
      };
    };

    this.toDateString = (date) => {
      return new Date(date).toDateString();
    };
  }
}

export default NewTaskController;
