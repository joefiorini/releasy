import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ReleasyENV.locationType
});

Router.map(function() {

  this.route('auth');
  this.route('callback');

  this.resource('releases', {path: '/:owner/:repo/releases'}, function() {
    this.route('new');
    this.route('show', {path: '/:release_id'});
    this.route('edit', {path: '/:release_id/edit'});
  });

  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
