import ajax from 'releasy/utils/ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    var owner = transition.params.releases.owner,
        repo = transition.params.releases.repo;
    this.set("owner", owner);
    this.set("repo", repo);
    var url = 'https://api.github.com/repos/' + owner + '/' + repo + '/releases' + '/' + params.release_id;
    return ajax({
      url: url,
      type: 'get'
    });
  },
  actions: {
    save: function() {
      var model = this.currentModel;

      ajax({
        url: 'https://api.github.com/repos/' + this.get("owner") + "/" + this.get("repo") + "/releases/" + model.id,
        type: 'patch',
        headers: {
          Authorization: 'token ' + this.controllerFor('application').get('accessToken')
        },
        data: JSON.stringify({
          tag_name: model.tag_name,
          target_committish: model.target_committish,
          name: model.name,
          body: model.body,
          draft: model.draft,
          prerelease: model.prerelease
        })
      });
    }
  }
});
