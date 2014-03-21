import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params) {
    this.set('owner', params.owner);
    this.set('repo', params.repo);
    return ghAjax('releases', null, {
      owner: params.owner,
      repo: params.repo
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
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('allTags', model.get('allTags'));
  }
});
