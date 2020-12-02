# dojo-picture

There is a `a.jpg` picture at `assets` folder.

Then I require `a.jpg` at `Home.ts`

```ts
const png1 = require("../assets/a.jpg");
const factory = create();

export default factory(function Profile() {
	return v('h1', { classes: [css.root] }, [
		'Home Page',
		v('img', {src: png1})
	]);
});
```

then run `npm run build`(`dojo build widget --mode dist --target lib`) to build a dojo library, build success, but `a.jpg` can not open.