import angular from 'angular';
import columnComponent from './column.component';

const columnModule = angular.module('column', [])

.component('column', columnComponent);

export default columnModule;
