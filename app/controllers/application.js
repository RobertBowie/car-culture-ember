import Ember from 'ember';

export default Ember.Controller.extend({  
  actions: {
    login: function() {
      var controller = this;
      controller.get("session").login().then(function(user) {
        // Persist your users details.
        console.log("Login Success: ", user);
      }, function() {
        // User rejected authentication request
      });
    },

    logOut: function() {
      var controller = this;
      controller.get("session").logOut().then(function() {
        console.log("Logged Out");
      });
    }
  }
});