import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Pages from './pages/pages';
import Common from './common/common';
import Services from './services/services';
import firebase from 'firebase';
import 'normalize.css';
import './common/tools.scss';
import './common/common.scss';

angular.module('app', [
  uiRouter,
  Common.name,
  Pages.name,
  Services.name,
  ngAnimate
])
.config(($locationProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
})
.run(($rootScope, $firebaseObject, $state) => {

  const config = {
    apiKey: 'AIzaSyBzgXb0cOxkryHoIrvJUwpPiT0-jNnHWgs',
    authDomain: 'angular-firebase-starter.firebaseapp.com',
    databaseURL: 'https://angular-firebase-starter.firebaseio.com',
    storageBucket: 'angular-firebase-starter.appspot.com',
    messagingSenderId: '924143469447'
  };
  
  firebase.initializeApp(config);
})
.component('app', AppComponent);
