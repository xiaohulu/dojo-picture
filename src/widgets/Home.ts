import { v, create } from '@dojo/framework/core/vdom';

import * as css from './styles/Home.m.css';
const png1 = require("../assets/a.jpg");
const factory = create();

export default factory(function Profile() {
	return v('h1', { classes: [css.root] }, [
		'Home Page',
		v('img', {src: png1})
	]);
});
