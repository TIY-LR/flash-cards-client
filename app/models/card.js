import DS from 'ember-data';

export default DS.Model.extend({
  frontText: DS.attr('string'),
  backText: DS.attr('string'),
  description: DS.attr('string'),

  cardSet: DS.belongsTo('card-set'),
});
