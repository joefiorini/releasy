import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    return ghAjax('releases', null, {
      owner: this.get('currentRepo.owner'),
      repo: this.get('currentRepo.name'),
      id: params.release_id
    });
  },
  actions: {
    save: function() {
      var model = this.currentModel;
      var _this = this;

      ghAjax('releases', model, {
        owner: this.get('currentRepo.owner'),
        repo: this.get('currentRepo.name'),
        id: model.id
      }).then(function(release) {
        _this.transitionTo('releases.show', release);
      });
    }
  }
});
