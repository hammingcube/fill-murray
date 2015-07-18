import Ember from 'ember';
//import layout from '../templates/components/fill-murray';

//export default Ember.Component.extend({
//  layout: layout
//});

//export { default } from 'ember-cli-fill-murray/components/fill-murray';

export default Ember.Component.extend({
	height: 100,
	width: 100,

	src: Ember.computed('height', 'width', function() {
		var base = 'http://www.fillmurray.com';
		return base + this.get('width') + '/' + this.get('height');
	})
})
