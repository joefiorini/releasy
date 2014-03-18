// Put general configuration here. This file is included
// in both production and development BEFORE Ember is
// loaded.
//
// For example to enable a feature on a canary build you
// might do:
//
// window.ENV = {FEATURES: {'with-controller': true}};

window.ENV = {
  FEATURES: {
    'query-params-new': true
  }
};

window.config = {
  github: {
    clientId: 'f436c5f975e828f4882e'
  }
};
