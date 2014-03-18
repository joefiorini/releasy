import {ghAjax} from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params) {
    return ghAjax('releases', null, {
      owner: params.owner,
      repo: params.repo
    });
  }
});
