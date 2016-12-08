import _ from 'underscore';

module.exports = () => {
  'ngInject';

  let columnTasks;
  let columns;

  const self = {
    init(firebase) {
      columnTasks = firebase.ref('column-tasks');
      columns = firebase.ref('columns');
    },
    getColumnTasks(columnKey, cb) {
      return columnTasks.child(columnKey).orderByChild('priority').on('value', (columnTasks) => {
        const tasks = columnTasks.val();

        if (!tasks) {
          return;
        }
        _.each(Object.keys(tasks), (key) => {
          tasks[key].key = key;
        });
        return cb(tasks);
      });
    },
    addColumn(data) {
      return columns.push(data);
    },
    getColumns() {
      return columns.once('value').then((columns) => {
        const cols = columns.val();
        _.each(Object.keys(cols), (key) => {
          cols[key].key = key;
        });
        return cols;
      });
    },
    addTask(task, columnKey) {
      return columnTasks.child(columnKey).push(task);
    }
  };

  return self;
};
