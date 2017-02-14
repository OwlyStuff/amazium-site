import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerLogo', Ember.computed(function() {
      return Ember.String.htmlSafe('<svg aria-hidden="true" class="icon icon icon--size-xxl icon--type-amazium" width="64" height="64" viewBox="0 0 64 64"><path d="M64 64H0V0h64V64zM2.7 61.3h58.7V2.7H2.7V61.3z"/><path d="M8 46.8l12-30.2h4.1l12 30.2h-4.5l-3.2-8.5H15.8l-3.2 8.5H8zM17.3 34.4h9.6l-4.8-12.5L17.3 34.4z"/><path d="M39.1 46.8v-3.8L50.6 28H39.4v-3.8h16.5v3.8L44.5 42.8h11.5v3.9H39.1z"/><path d="M48.1 8.1V7.7h2.3v0.4L49 11h-0.5l1.4-2.9H48.1z"/><path d="M50.5 10c0-0.2 0-0.3 0.1-0.5s0.2-0.2 0.4-0.3c-0.3-0.2-0.4-0.4-0.4-0.7 0-0.2 0.1-0.5 0.3-0.6s0.4-0.3 0.8-0.3 0.6 0.1 0.8 0.3 0.3 0.4 0.3 0.6c0 0.3-0.1 0.5-0.4 0.7 0.3 0.2 0.5 0.4 0.5 0.8 0 0.3-0.1 0.5-0.3 0.7S52 11 51.6 11s-0.7-0.1-0.9-0.3C50.6 10.5 50.5 10.3 50.5 10zM50.9 10c0 0.1 0 0.1 0 0.2s0 0.1 0.1 0.2 0.1 0.1 0.2 0.2 0.2 0.1 0.4 0.1 0.3 0 0.4-0.1 0.2-0.1 0.2-0.2c0-0.1 0.1-0.1 0.1-0.2s0-0.1 0-0.2c0-0.4-0.2-0.6-0.7-0.6S50.9 9.6 50.9 10zM51 8.5c0 0.1 0 0.1 0 0.1 0 0 0 0.1 0.1 0.2 0 0.1 0.1 0.1 0.2 0.1S51.5 9 51.6 9s0.2 0 0.3-0.1 0.1-0.1 0.2-0.1 0.1-0.1 0.1-0.2c0 0 0-0.1 0-0.1C52.2 8.2 52 8 51.6 8 51.2 8 51 8.2 51 8.5z"/><path d="M53.2 11v-0.4h0.5V11H53.2z"/><path d="M54.1 9.2l0.2-1.5h1.8v0.4h-1.4l-0.1 0.8c0.2 0 0.3-0.1 0.5-0.1 0 0 0 0 0 0 0.4 0 0.7 0.1 0.9 0.3s0.3 0.4 0.3 0.8 -0.1 0.6-0.3 0.8c-0.2 0.2-0.5 0.3-0.9 0.3s-0.7-0.1-1-0.2v-0.5c0.2 0.2 0.5 0.3 0.9 0.3 0.3 0 0.5-0.1 0.6-0.2s0.2-0.3 0.2-0.5c0-0.2-0.1-0.4-0.2-0.5S55.3 9.3 55 9.3c-0.2 0-0.5 0-0.7 0.1L54.1 9.2z"/></svg>');
    }));
    controller.set('headerTitle', 'Amazium');
    controller.set('headerCopy', Ember.computed(function() {
      return Ember.String.htmlSafe('A minimalist CSS framework<br><small>Currently v5</small>');
    }));
    controller.set('headerButton', Ember.computed(function() {
      return Ember.String.htmlSafe('<a href="https://github.com/OwlyStuff/Amazium/releases/latest" target="_blank" class="btn btn--xl btn--color-brand"><svg aria-hidden="true" class="icon icon--size-m icon--type-arrowDownload icon--onLeft" width="64" height="64" viewBox="0 0 64 64"><path class="st0" d="M56.9 12.3c-0.6 0.1-1.2 0.4-1.7 0.8 -3 3-17.7 17.7-21.3 21.3 -0.6 0.6-1.4 1-2.3 0.9 -0.9-0.1-1.2-0.6-2-1.4L8.9 13.2c-0.5-0.5-1-0.8-1.7-0.8C4.4 12 3 15.3 4.8 17.1l24.3 24.3c1.6 1.6 4.1 1.6 5.7 0l24.4-24.4C61 15.2 59.6 12 56.9 12.3z"/><path class="st0" d="M57.1 53.2H7c-1.6 0-2.9-1.3-2.9-2.9v0c0-1.6 1.3-2.9 2.9-2.9h50.1c1.6 0 2.9 1.3 2.9 2.9v0C60 51.9 58.7 53.2 57.1 53.2z"/></svg>Download</a>');
    }));
  },
});
