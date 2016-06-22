import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('structure', function() {
    this.route('grid');
    this.route('columns');
  });
  this.route('stylekit', function() {
    this.route('components');
    this.route('colors');
    this.route('typography');
  });
  this.route('form', function() {
    this.route('buttons');
    this.route('inputs');
  });
});

export default Router;
