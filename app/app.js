import Resolver from 'ember/resolver';
import 'releasy/initializers/auth-header';
import CurrentRepo from 'releasy/initializers/current-repo';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'releasy', // TODO: loaded via config
  Resolver: Resolver['default']
});

App.initializer(CurrentRepo);

export default App;
