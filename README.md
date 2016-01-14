cta.js [![npm version](https://badge.fury.io/js/cta.svg)](http://badge.fury.io/js/cta)
=====
*A call to animate, your action-to-effect path*
***

cta.js or "Call to Animation" is a light-weight performant library to animate any element ("action") onto any other element ("effect") on the page.

It is written with an aim to promote visual continuity in web apps. To see what you can do with this, checkout the demo:
### [DEMO](http://kushagragour.in/lab/ctajs)

Installation
-----

**cta.js** is *just 1.2KB* minified & gzipped.

- Bower: `bower install cta`
- NPM: `npm install cta`
- [Download zip](https://github.com/chinchang/cta.js/archive/master.zip).

**Note**: **cta.js** supports AMD and commonJS module pattern out of the box.

Usage
-----

In its basic form, you can animate an element with selector X onto an element with selector Y:

```js
var e1 = document.querySelector(X),
	e2 = document.querySelector(Y);
cta(e1, e2);
```

Triggering a reverse animation:

```js
var e1 = document.querySelector('#js-source-element'),
	e2 = document.querySelector('#js-target-element');
var reverseAnimate = cta(e1, e2);

// Reverse previous animation. `options` and `callback` can be passed to this function too.
reverseAnimate();
```

Specify animation duration:

```js
var e1 = document.querySelector('#js-source-element'),
	e2 = document.querySelector('#js-target-element');
cta(e1, e2, {
	duration: 0.3 // seconds
});
```

Specify a callback to execute after animation:

```js
var button = document.querySelector('#js-button'),
	hiddenModal = document.querySelector('#js-modal');
cta(button, hiddenModal, function () {
	showModal();
});
```
More documentation coming up.

Public API
-----

### cta(sourceElement, targetElement [, options] [, callback] )

Animate an element `sourceElement` onto `targetElement`.

* `sourceElement` - DOM Element which is the starting point of animation.
* `targetElement` - DOM Element which is the end point of animation.
* `options` - A map of additional options to control the animation behaviour.
	* `duration` - Duration (in seconds) of animation. Default is `0.3` seconds.
	* `targetShowDuration` - Duration (in seconds) of `targetElement` to become visible, if hidden initially. The library will automatically try to figure this out from the element's computed styles. Default is `0` seconds.
	* `extraTransitionDuration` - Extra duration (in seconds) of `targetElement` to provide visual continuity between the animation and the rendering of the `targetElement`. Default is `1` second.
	* `relativeToWindow` - Set to true if your target element is fixed positioned in the window. Default is relative to document (works good with normal elements).
* `callback` - Optional callback to execute after animation completes.


Browser Support
-----

**cta.js** works best on latest versions of Google Chrome, Firefox and Safari.

For all non-supported browsers, the library does nothing and fallbacks to normal behavior without any explicit handling in your code.

Contributing
-----

Interested in contributing features and fixes?

[Read more on contributing](./CONTRIBUTING.md).

Changelog
-----

See the [Changelog](https://github.com/chinchang/cta.js/wiki/Changelog)

License
-----

Copyright (c) 2015 Kushagra Gour, http://kushagragour.in
Licensed under the [MIT license](http://opensource.org/licenses/MIT).

Credits
-----

Paul Lewis - for his [awesome performance tip](http://aerotwist.com/blog/flip-your-animations/) on scaling elements.
