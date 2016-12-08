'use strict';

module.exports = () => {
  'ngInject';

  return function(scope, fn) {
    const phase = scope.$root.$$phase;
    if (phase == '$apply' || phase == '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      scope.$apply(fn);
    }
  };
};
