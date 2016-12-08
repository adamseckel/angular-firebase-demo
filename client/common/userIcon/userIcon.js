import angular from 'angular';
import userIconComponent from './userIcon.component';

const userIconModule = angular.module('userIcon', [])

.component('userIcon', userIconComponent);

export default userIconModule;
