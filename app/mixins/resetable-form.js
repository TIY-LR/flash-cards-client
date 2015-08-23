import Ember from 'ember';

export default Ember.Mixin.create({
  modelName: null,
  modelProperties: [],

   resetFormValues: function() {
    var values = this.get(this.get('modelName')).toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var formData = this.getProperties(this.get('modelProperties'));

      this.sendAction('save', this.get(this.get('modelName')), formData);
    }
  }
});
