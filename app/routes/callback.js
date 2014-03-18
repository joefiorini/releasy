import ajax from 'releasy/utils/ajax';

export default Ember.Route.extend({
  skipsAuthentication: true,
  beforeModel: function(transition) {

    var code = transition.queryParams.code;

    if(!code) {
      this.transitionTo('index');
    }

    var _this = this;

    return ajax({
      url: 'http://releasy-api.herokuapp.com/access-code',
      type: 'post',
      data: {
        client_id: config.github.clientId,
        code: code,
        accept: 'json'
      }
    }).then(function(result) {
      window.localStorage.setItem('releasy_access_token', result);
      _this.controllerFor('application').
        set('isSignedIn', true).
        set('accessToken', result);

      _this.transitionTo('index');
    });
  }
});
