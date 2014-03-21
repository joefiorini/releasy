export default Ember.ObjectController.extend({
  needs: ['releases'],
  tagNames: Ember.computed.mapBy("controllers.releases.allTags", "name"),
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
