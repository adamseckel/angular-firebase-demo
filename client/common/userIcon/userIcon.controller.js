class UserIconController {
  constructor($element) {
    const _this = this;
    this.name = 'userIcon';
    this.$onChanges = () => {
      $element.css('background-image', `url(${_this.user.avatar})`);
    };
  }
}

export default UserIconController;
