import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    var owner = transition.params.releases.owner,
        repo = transition.params.releases.repo;

    this.set('owner', owner).set('repo', repo);
    return Ember.Object.create({
      isNew: true
    });
  },
  afterModel: function(model) {
    return ghAjax('tags', null, {
      repo: this.get('repo'),
      owner: this.get('owner')
    }).then(function(tags) {
      model.set('allTags', tags);
    });
  },
  actions: {
    save: function() {
      var model = this.currentModel;
      var _this = this;

      ghAjax('releases', model, {
        owner: this.get('owner'),
        repo: this.get('repo')
      }).then(function(release) {
        _this.transitionTo('releases.show', release);
      });
    }
  }
});
