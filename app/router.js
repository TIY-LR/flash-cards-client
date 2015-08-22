import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function() {
    this.route('card-sets', {path: '/:courseid/card-sets'},  function() {
      this.route('cards', {path: '/:card_setid/cards'}, function() {
        this.route('index', {path: '/'});
        this.route('create', {path: '/new'});

        this.route('show');
      });
    });
  });
});


export default Router;
