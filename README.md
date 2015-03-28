cta.css
=====
*It a call to animate, anything to anything*
***

cta.js or "Call to Animation" is a light-weight performant library to animate any element onto any other element on the page.

### [Demo](http://kushagragour.in/lab/ctajs).

Installation
-----

```
bower install ctajs
```
*or*

```
npm install ctajs
```

*or* simply [download from Github](https://github.com/chinchang/cta.js/blob/master/cta.min.js).

Usage
-----

In very basic form, you can animate an element with selector X to an element with selector Y:

```js
var e1 = document.querySelector(X),
	e2 = document.querySelector(Y);
cta(e1, e2);
```

Triggering a reverse animation;

```js
var e1 = document.querySelector('#js-element-from'),
	e2 = document.querySelector('#js-element-to');
var reverseAnimate = cta(e1, e2);

// Reverse previous animation
reverseAnimate();
```

Specify animation duration:

```js
var e1 = document.querySelector('#js-element-from'),
	e2 = document.querySelector('#js-element-to');
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

### cta(fromElement, toElement [, options] [, callback] )

Animate an element `fromElement` onto `toElement`.

* `fromElement` - DOM Element which is the starting point of animation.
* `toElement` - DOM Element which is the end point of animation.
* `options` - A map of additional options to control the animation behaviour.
	* `duration` - Duration (in seconds) of animation. Default is `0.3` seconds.
	* `targetShowDuration` - Duration (in seconds) of `toElement` to become visible, if hidden initially. The library will automatically try to figure this out from the element's computed styles. Default is `0` seconds.
	* `relativeToWindow` - Set to true if you want animation to happen relative to window (with fixed positioned elements). Default is relative to document (absolute positioned).
* `callback` - Optional callback to execute after animation completes.


Browser Support
-----

**cta.js** works on Google Chrome only currently. Firefox support is under development.

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

Paul Lewis - for this awesome performance tip on scaling elements.