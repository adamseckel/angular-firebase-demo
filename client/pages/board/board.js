import angular from 'angular';
import boardComponent from './board.component';

const boardModule = angular.module('board', [])

.component('board', boardComponent);

export default boardModule;
