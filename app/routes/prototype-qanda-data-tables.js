import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Q&A Data Tables');
    controller.set('headerCopy', 'A simple approach to styling a data table for the use of Q&As.');
  },
});
