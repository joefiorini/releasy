export default Ember.ArrayController.extend({
  itemController: 'release',
  sortFunction: function(a, b) {
    return new Date(a.published_at) < new Date(b.published_at) ? -1 : 1;
  },
  sortAscending: false,
  latest: function() {
    return this.sortBy('published_at').get('lastObject');
  }.property('@each.published_at'),
  nextTag: function() {
    return this.get('unreleasedTags.firstObject');
  }.property('unreleasedTags'),
  unreleasedTags: function() {
    return this.get('allTags').reject(function(tag) {
      return this.findBy('tag_name', tag.name);
    }, this);
  }.property('allTags'),
  allTags: Ember.computed.alias('model.allTags')
});
