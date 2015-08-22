import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cards', function() {
    this.route('index', {path: '/'});
    this.route('create', {path: '/new'});

    this.route('show');
  });

});


export default Router;
