import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Dropdowns');
    controller.set('headerCopy', 'Need to show some text or maybe links well checkout out this simple dropdown.');
  },
});
