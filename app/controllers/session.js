export default Ember.Controller.extend({
  signIn: function() {
    var clientId = config.github.clientId;
    var params = [["client_id", clientId], ["scope", ["repo", "read:org"].join(",")], ["state", "abcd1234"]];

    var query = params.map(function(pair) {
      return pair.join("=");
    }).join("&");

    window.location.href = 'https://github.com/login/oauth/authorize?' + query;
  }
});
