class BoardController {
  constructor(firebaseService, $scope) {
    this.name = 'board';
    const _this = this;

    this.$onInit = () => {
      firebaseService.getColumns().then((columns) => {
        _this.columns = columns;
        $scope.$apply();
      });
    };

    this.addColumns = () => {
      const columnData = {
        name: 'foo'
      }
      firebaseService.addColumn(columnData);
    };

    this.createTask = (task, columnKey) => {
      firebaseService.addTask(task, columnKey);
    };
  }
}

export default BoardController;
