import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('structure');
  this.route('stylekit');
  this.route('forms');
  this.route('prototypes');
});

export default Router;
