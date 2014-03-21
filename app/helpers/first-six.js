export default Ember.Handlebars.makeBoundHelper(function(sha) {
  return sha.substring(0,5);
});
