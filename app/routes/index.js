import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    displayAlert: function(text) {
      this._displayAlert(text);
    },

    login: function() {
      var controller = this;
      controller.get("session").login().then(function(user) {
        // Persist your users details.
        console.log("Login Success: ", user);
      }, function() {
        // User rejected authentication request
      });
    }
  },

  _displayAlert: function(text) {
    alert(text);
  },

});