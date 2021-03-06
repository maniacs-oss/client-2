import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['test-result-status'],
  statusText: Ember.computed('testResult.succeeded', 'testResult.emberVersionCompatibilities.firstObject.compatible', function() {
    if (this.get('testResult.succeeded')) {
      if (this.get('testResult.emberVersionCompatibilities.firstObject.compatible')) {
        return 'Passed';
      } else {
        return 'Failed';
      }
    } else {
      return 'Error';
    }
  }),

  statusDetail: Ember.computed('testResult.succeeded', 'testResult.statusMessage', function() {
    if (!this.get('testResult.succeeded')) {
      return this.get('testResult.statusMessage') || 'unknown';
    }
  })
});
