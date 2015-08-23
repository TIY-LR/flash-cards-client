import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return this.store.findById('card', params.id);
  },

//     actions: {
//     deleteCard: function(card) {
//       if (window.confirm('Are you sure you want to delete?')) {
//         card.destroyRecord();
//     }
//   }
// }
});
