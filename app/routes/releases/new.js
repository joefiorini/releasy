import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    return Ember.Object.create({
      isNew: true
    });
  },
  actions: {
    save: function() {
      var model = this.currentModel;
      var _this = this;

      ghAjax('releases', model, {
        owner: this.get('currentRepo.owner'),
        repo: this.get('currentRepo.name')
      }).then(function(release) {
        _this.transitionTo('releases.show', release);
      });
    }
  }
});
