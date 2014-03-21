import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params) {
    this.set('currentRepo.name', params.repo)
        .set('currentRepo.owner', params.owner);

    return ghAjax('releases', null, {
      owner: params.owner,
      repo: params.repo
    });
  },
  afterModel: function(model) {
    return ghAjax('tags', null, {
      repo: this.get('currentRepo.name'),
      owner: this.get('currentRepo.owner')
    }).then(function(tags) {
      model.set('allTags', tags);
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
