import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Stepped list');
    controller.set('headerCopy', 'Nice and simple ordered list styled to look like a forms progress. All you need to do is add the class .active to the relevant li and the rest is handled by the CSS.');
  },
});
