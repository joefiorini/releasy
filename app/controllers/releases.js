export default Ember.ArrayController.extend({
  itemController: 'release',
  sortProperties: ['created_at'],
  sortAscending: false,
  latest: function() {
    return this.get('firstObject');
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
