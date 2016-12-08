import template from './userIcon.html';
import controller from './userIcon.controller';
import './userIcon.scss';

const userIconComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default userIconComponent;
