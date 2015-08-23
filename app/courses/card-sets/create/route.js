import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return this.store.createRecord('card-set');
  },

  actions: {
    save: function(cardset, data) {
      cardset.setProperties(data);

      cardset.save().then(() => {
        this.transitionTo('courses.card-sets');
      });
    }

  },
});
