var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {

  this.resource('releases', {path: '/:owner/:repo/releases'}, function() {
    this.route('show', {path: '/:release_id'});
  });

  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
