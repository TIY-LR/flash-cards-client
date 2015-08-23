import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    deleteCard: function(card) {
      if (window.confirm('Are you sure you want to delete?')) {
        card.destroyRecord();
    }
  }
}
});
