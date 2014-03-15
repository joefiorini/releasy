import ajax from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    var owner = transition.params.releases.owner,
        repo = transition.params.releases.repo;
    var url = 'https://api.github.com/repos/' + owner + '/' + repo + '/releases' + '/' + params.release_id;
    return ajax({
      url: url,
      type: 'get'
    });
  }
});

