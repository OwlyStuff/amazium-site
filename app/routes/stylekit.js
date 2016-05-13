import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Style kit');
    controller.set('headerCopy', 'Amazium includes styling for Headers, Lists, Paragraphs, Blockquotes, and other necessary elements.');
  },
});