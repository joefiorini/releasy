import ajax from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases';
    return ajax({
      url: url,
      type: 'get'
    });
  }
});
