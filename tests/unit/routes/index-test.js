import { moduleFor, test } from 'ember-qunit';

let originalAlert;

moduleFor('route:index', 'Unit | Route | index', {
  beforeEach: function() {
    originalAlert = window.alert; // store a reference to window.alert
  },

  afterEach: function() {
    window.alert = originalAlert; // restore window.alert
  }
});

test('Alert is called on displayAlert', function(assert) {
  assert.expect(1);

  // with moduleFor, the subject returns an instance of the route
  var route = this.subject();
  var expectedText = 'foo';

  // stub window.alert to perform a qunit test
  window.alert = function(text) {
    assert.equal(text, expectedText, 'expected ' + text + ' to be ' + expectedText);
  };

  // call the _displayAlert function which triggers the qunit test above
  route._displayAlert(expectedText);
});