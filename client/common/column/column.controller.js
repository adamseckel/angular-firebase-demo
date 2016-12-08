class ColumnController {
  constructor($scope, firebaseService, safeApply) {
    const _this = this;
    this.name = 'column';
    this.$onInit = () => {
      firebaseService.getColumnTasks(this.column.key, (tasks) => {
        this.columnTasks = tasks;
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
  }
}

export default ColumnController;
