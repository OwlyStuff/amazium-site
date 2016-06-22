import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Amazium Columns');
    controller.set('headerCopy', 'Amazium columned lists will make ever the most boaring of lists look totally awesome.');
  },
});
