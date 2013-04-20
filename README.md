# Prevue.js

Prevue.js is a jQuery password-preview plugin that works like
BlackBerry Z10's password-preview. It is very useful for mobile web
applications where the chances of entering your password incorrectly
is more likely to happen.

Prevue.js works by wrapping an `<input type="password">` element
and adding a preview button inside the wrapper and changing the type of
the element to `text` to reveal the password. The preview button
is an "eye" font icon made from [Fontello] using [FontAwesome] icons
for easy customization.

Check out the [demos].


## Usage

Prevue.js is very easy to use. Just add the following to your HTML:

	// Font icon styles
	<link rel="stylesheet" href="css/font-awesome-eyes.css">

	// In case you need jQuery on the fly
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

	// Then add Prevue.js
	<script src="js/jquery.prevue-1.0.0.js">

__Note:__ You'll need jQuery version 1.9.0+ for this to work. Since lower versions
of jQuery don't allow the modification of the type attribute.

Then copy the `font` directory to your project's root directory so it looks like:

	your-project
	|-- css
	|   `-- font-awesome-eyes.css
	|-- font
	|   |-- font-awesome-eyes.eot
	|   |-- font-awesome-eyes.svg
	|   |-- font-awesome-eyes.ttf
	|   `-- font-awesome-eyes.woff
	`-- js
	    `-- jquery.prevue-1.0.0.js

It doesn't necessarily have to be like the directory structure. But you might
have to modify `font-awesome-eyes.css` if your directory structure is different.

Then just add a class to your password fields and call `prevue()` on those elements.

__Markup__
	
	<input type="password" class="preview-password">

__JavaScript__

	$(document).ready(function(){

		// Call Prevue.js on that element
		$('.preview-password').prevue();

	});


## Options

There are a few things you can change in Prevue.js. Given its
default settings:
	
	var defaults = {
		fontIconClassNameOff: 'prevue-icon-eye',
		fontIconClassNameOn: 'prevue-icon-eye-off',
		fontSize: '16',
		color: '#999',
		offsetX: 5, 
		offsetY: 0
	};

Below is an explanation for each option.

* `fontIconClassNameOff` - The default preview button's icon when Prevue.js is off.
Change this if you want to use another font icon set.
* `fontIconClassNameOn` - If you're changing the `fontIconClassNameOff`, make sure
you change this as well for consistency.
* `fontSize` - The size of the icon.
* `color` - The color of the icon in hex format (e.g `#FFF` or `#000000`). You may also
use `rgb()` and `rgba()` values here.
* `offsetX` - The offset from the end of the input element; useful when the preview 
button's position is off. This one's hacky cause normally this should be `0` since it's
a default value.
* `offsetY` - Same as `offsetX` but for vertical positioning.


## Browser Compatibility

Prevue.js utilizes web fonts so it should work on all modern browsers with
support for web fonts. Check out [Can I use] for the browser compatibility
table.


## Other Notes

Prevue.js only uses two icons from [FontAwesome], namely, `icon-eye` and `icon-eye-off`.
In cases that you want to use the whole FontAwesome font set (or use a different one), 
you'll need to replace the included `font-awesome-eyes.*` font files and 
`font-awesome-eyes.css` to the ones provided by FontAwesome or the icon font you've chosen.

Then just pass in the class names of the icons that you want to use as follows:
	
	// Given that the icons you want to use has the class names: 
	// "eye-open" and "eye-close"

	$('.selector').prevue({
		fontIconClassNameOff: 'eye-open',
		fontIconClassNameOn: 'eye-close',
	});


## Special Thanks

I'd like to thank [FontAwesome] for a wonderful job on the web font icons. And I used 
[Fontello] to create the web fonts used in this plugin by the way.


## License

__The MIT License (MIT)__
Copyright (c) 2013 [Jaune Sarmiento]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[Fontello]: http://fontello.com/
[FontAwesome]: http://fortawesome.github.io/Font-Awesome/
[demos]: https://github.com/jaunesarmiento/prevue.js/tree/master/examples/
[Jaune Sarmiento]: http://jaunesarmiento.me/
[Can I use]: http://caniuse.com/fontface