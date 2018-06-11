function Test () {
  this.username = 'kengres';
  this.login = () => {
    console.log(this.username, ' just logged in!');
  };
  this.logout = () => {
    console.log(this.username, ' just logged out!');
  }
}