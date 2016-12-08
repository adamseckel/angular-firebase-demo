import template from './board.html';
import controller from './board.controller';
import './board.scss';

const boardComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default boardComponent;
