
function lookupTargetRoute(transition, container) {
  var key = "route:" + transition.targetName;
  return container.lookup(key);
}

export default Ember.Route.extend({
  beforeModel: function(transition) {
    var token = window.localStorage.getItem('releasy_access_token'),
        leafNode = lookupTargetRoute(transition, this.container);

    if(!leafNode.skipsAuthentication && token) {
      this.controllerFor('application').
        set('isSignedIn', true).
        set('accessToken', token);
    }
  },
  actions: {
    signOut: function() {
      this.controllerFor('application').
        set('isSignedIn', false).
        set('accessToken', null);
      window.localStorage.removeItem('releasy_access_token');
    }
  }
});
