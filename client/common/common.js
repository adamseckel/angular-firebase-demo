import angular from 'angular';
import Column from './column/column';
import Task from './task/task';
import NewTask from './newTask/newTask';

const commonModule = angular.module('app.common', [
  Column.name,
  Task.name,
  NewTask.name
]);

export default commonModule;
