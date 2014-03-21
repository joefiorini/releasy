export default Ember.ObjectController.extend({
  tagNames: Ember.computed.mapBy("allTags", "name"),
  actions: {
    publish: function() {
      this.set("draft", false);
      this.send("save");
    },
    draft: function() {
      this.set("draft", true);
      this.send("save");
    }
  }
});
