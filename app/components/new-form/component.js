import Ember from 'ember';
import Resetable from 'flash-cards-client/mixins/resetable-form';

export default Ember.Component.extend(Resetable, {
  modelName: 'card',
  modelProperties: ['front', 'back'],

});
