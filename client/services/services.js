module.exports = angular.module('app.services', [])
  .service('firebaseService', require('./firebaseService'))
  .service('safeApply', require('./safeApply'));
