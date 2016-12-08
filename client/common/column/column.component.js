import template from './column.html';
import controller from './column.controller';
import './column.scss';

const columnComponent = {
  restrict: 'E',
  bindings: {
    column: '<',
    user: '<',
    createNewTask: '<',

    onCreateTask: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default columnComponent;
