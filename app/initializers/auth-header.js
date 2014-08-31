export default {
  name: 'auth-header',
  initialize: function() {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      var token = window.localStorage.getItem('releasy_access_token');
      if(token) {
        return jqXHR.setRequestHeader('Authorization', 'token ' + token);
      }
    });
  }
};
