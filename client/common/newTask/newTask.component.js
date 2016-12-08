import template from './newTask.html';
import controller from './newTask.controller';
import './newTask.scss';

const newTaskComponent = {
  restrict: 'E',
  bindings: {
    onCreate: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default newTaskComponent;
