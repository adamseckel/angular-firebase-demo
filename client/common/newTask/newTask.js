import angular from 'angular';
import newTaskComponent from './newTask.component';

const newTaskModule = angular.module('newTask', [])

.component('newTask', newTaskComponent);

export default newTaskModule;
