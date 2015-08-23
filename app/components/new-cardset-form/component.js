import Ember from 'ember';
import Resetable from 'flash-cards/mixins/resetable-form';

export default Ember.Component.extend({
  modelName: 'card-set',
  modelProperties: ['name', ],
});
