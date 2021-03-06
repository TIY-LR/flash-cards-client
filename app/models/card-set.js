import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  cards: DS.hasMany('card', {async: true}),
  course: DS.belongsTo('course', {async: true}),
});
