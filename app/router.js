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
  this.route('stylekit');
  this.route('forms');
  this.route('prototypes');
  this.route('prototype-owly-slider');
  this.route('prototype-dropdowns');
  this.route('prototype-icons');
  this.route('prototype-avatar');
  this.route('prototype-stepped-list');
  this.route('prototype-qanda-data-tables');
});

export default Router;
