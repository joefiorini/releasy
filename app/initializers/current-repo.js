import Repository from 'releasy/models/repository';

export default {
  name: 'current-repo',
  initialize: function(container, app) {
    container.register('repo:current', Repository);
    app.inject('route', 'currentRepo', 'repo:current');
    app.inject('controller', 'currentRepo', 'repo:current');
  }
};
