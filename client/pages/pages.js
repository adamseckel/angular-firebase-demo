import angular from 'angular';
import Board from './board/board';

const pagesModule = angular.module('app.pages', [
  Board.name
]);

export default pagesModule;
