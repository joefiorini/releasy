import {ghAjax} from 'releasy/utils/ajax';

export default Ember.ObjectController.extend({
  // tag_name: Ember.computed.alias('parentController.nextTag.name'),
  needs: ['releases'],
  releases: Ember.computed.alias('controllers.releases'),
  previousRelease: function() {
    if(this.get('isNew')) {
      return this.get('releases.latest');
    } else {
      var originalRelease = this.get('releases').findBy('tag_name', this.get('tag_name'));
      var index = this.get('releases.model').indexOf(originalRelease.get('model'));
      if(index === -1) { return; }
      return this.get('releases').objectAt(index + 1);
    }
  }.property('published_at'),
  contentDidChange: function() {
    if(Ember.isNone(this.get('model'))) { return; }
    this.set('loadingCommits', true);

    var _this = this;
    var compareRelease;

    if(this.get('isNew')) {
      var nextTag = this.get('controllers.releases.nextTag');
      this.set('tag_name', nextTag.name);
    }

    ghAjax('compare', null, {
      repo: this.get('currentRepo.name'),
      owner: this.get('currentRepo.owner'),
      id: this.get('previousRelease.tag_name') + '...' + this.get('tag_name')
    }).then(function(commits) {
      _this.set('commits', commits.commits);
    }).catch(function(reason) {
      _this.set('commitsError', reason);
    }).finally(function() {
      _this.set('loadingCommits', false);
    });
  }.observes('content')
});
