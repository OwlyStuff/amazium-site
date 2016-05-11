import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Forms');
    controller.set('headerCopy', Ember.computed(function() {
      return Ember.String.htmlSafe('Forms have never been fun but with a little global styling, all textual <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;textarea&gt;</code> elements now look uniformed and lets you focus on the user experience.');
    }));
  },
});
