import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logOut: function() {
      var controller = this;
      controller.get("session").logOut().then(function() {
        console.log("Logged Out");
      });
    }
  },

  model() {
    return this.store.findAll('vehicle');
  }
});
