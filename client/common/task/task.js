import angular from 'angular';
import taskComponent from './task.component';

const taskModule = angular.module('task', [])

.component('task', taskComponent);

export default taskModule;
