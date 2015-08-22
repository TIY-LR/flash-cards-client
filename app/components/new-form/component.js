import Ember from 'ember';

export default Ember.Component.extend({
   resetFormValues: function() {
    var values = this.get('card').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('name', 'description');
      this.sendAction('save', this.get('card'), data);
    }
  }

});
