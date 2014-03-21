import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    var owner = transition.params.releases.owner,
        repo = transition.params.releases.repo;
    this.set("owner", owner);
    this.set("repo", repo);
    var url = 'https://api.github.com/repos/' + owner + '/' + repo + '/releases' + '/' + params.release_id;
    return ghAjax('releases', null, {
      owner: owner,
      repo: repo,
      id: params.release_id
    });
  },
  actions: {
    save: function() {
      var model = this.currentModel;
      var _this = this;

      ghAjax('releases', model, {
        owner: this.get('owner'),
        repo: this.get('repo'),
        id: model.id
      }).then(function(release) {
        _this.transitionTo('releases.show', release);
      });
    }
  }
});
