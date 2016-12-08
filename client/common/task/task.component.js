import template from './task.html';
import controller from './task.controller';
import './task.scss';

const taskComponent = {
  restrict: 'E',
  bindings: {
    task: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default taskComponent;
