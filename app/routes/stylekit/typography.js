import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Typography');
    controller.set('headerCopy', 'Typography in Amazium has been styled to make your life easier by providing clean and simple default styles for all basic elements.');
  },
});
