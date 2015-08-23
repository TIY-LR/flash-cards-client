import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function() {
        this.route('create');
    this.route('card-sets', {path: '/:course_id/card-sets'},  function() {
      this.route('create');
      this.route('cards', {path: '/:card_sets_id/cards'}, function() {
        this.route('index', {path: '/'});
        this.route('create', {path: '/new'});

        this.route('show');
      });
    });

  });
});


export default Router;
