import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    deleteCardSet: function(cardset) {
      if (window.confirm('Are you sure you want to delete?')) {
        cardset.destroyRecord();
    }
  }
}
});
