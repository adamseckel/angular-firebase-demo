module.exports = () => {
  'ngInject';

  let tasks;

  const self = {
    init(firebase) {
      tasks = firebase.ref('tasks');
    },
    getTasks() {

    }
  };

  return self;
};
