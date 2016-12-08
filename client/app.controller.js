import firebase from 'firebase';

class AppController {
  constructor($scope,
    firebaseService
  ) {
    firebaseService.init(firebase.database());
  }
}

export default AppController;
