export default Ember.Route.extend({
  skipsAuthentication: true,
  beforeModel: function() {
    var controller = this.controllerFor('session');

    if(!controller.get('isSignedIn')) {
      controller.signIn();
    }
  }
});
