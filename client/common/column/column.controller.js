class ColumnController {
  constructor($scope, firebaseService, safeApply) {
    const _this = this;
    const taskHeight = 37;
    const taskPadding = 40;

    this.name = 'column';
    this.$onInit = () => {
      firebaseService.getColumnTasks(this.column.key, (tasks) => {
        _this.columnTasks = tasks;
        calculateOffset();
        safeApply($scope);
      });
    };

    this.addTask = () => {
      _this.addingTask = true;
    };

    this.createTask = (task) => {
      this.onCreateTask(task, this.column.key);
      _this.addingTask = false;
    };

    function calculateOffset() {
      let counter = 0;
      Object.keys(_this.columnTasks).forEach((taskKey) => {
        _this.columnTasks[taskKey].offset = counter * (taskHeight + taskPadding);
        counter += 1;
      });
    }
  }
}

export default ColumnController;
