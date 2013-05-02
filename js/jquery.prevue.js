/*
 * Prevue.js jQuery Password Previewer v1.0.1
 * http://jaunesarmiento.me/prevuejs
 *
 * Copyright 2013, Jaune Sarmiento
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Sat Apr 30, 2013
 */

(function($) {
	
	// Enables console.log() in all browsers for error messages
	window.log = function() {
		log.history = log.history || [];
		log.history.push(arguments);
		if (this.console) {
			console.log(Array.prototype.slice.call(arguments))
		}
	};

	$.fn.prevue = function(settings) {
		
		/**
		 * Default settings
		 *
		 * string    fontIconClassNameOn      Class name of the icon to use when preview is on
		 * string    fontIconClassNameOff     Class name of the icon to use when preview is off
		 * string    fontSize                 The size of the icon
		 * string    color                    The color of the icon; in hex format (e.g #FFF or #000000). You may
		 *                                    also use rgb() and rgba() values here
		 * int       offsetX                  X-offset from the end of the input element; useful when the preview 
		 *                                    button's position is off
		 * int       offsetY                  Y-offset from the top of the input element; useful when the preview 
		 *                                    button's position is off
		 */

		var defaults = {
			fontIconClassNameOff: 'prevue-icon-eye', // These are interchanged since when preview is off you'll want show the 'on' icon
			fontIconClassNameOn: 'prevue-icon-eye-off',
			fontSize: '16',
			color: '#999',
			offsetX: 5,
			offsetY: 0
		};

		// Merge the user settings with the defaults (if passed)
		if (settings){ $.extend(defaults, settings) }

		return this.each(function() {

			// Selected node
			var $o = $(this);
			
			// Name of the selected node
			var node = this.nodeName.toLowerCase();
			
			// If the node is actually an input[type="password"] element
			if (node == "input" && this.type == "password") {
				
				// Build the preview button
				var $input = $o,
					
					$previewIcon = $('<i>')
						.css({ 'font-size': defaults.fontSize + 'px' })
						.addClass('prevue-icon')
						.addClass(defaults.fontIconClassNameOff),

					paddingTop = $o.css('padding-top'),
					paddingBottom = $o.css('padding-bottom'),
					height = parseInt($o.height()) + parseInt(paddingTop.substring(0, paddingTop.length - 2)) + parseInt(paddingBottom.substring(0, paddingBottom.length - 2)),

					$previewBtn = $('<a>')
						.attr('href', 'javascript: void(0);')
						.addClass('prevue-btn')
						.css({
							'text-decoration': 'none',
							'position': 'absolute',
							'right': parseInt(0 + defaults.offsetX) + 'px',
							'height': parseInt(height + defaults.offsetY) + 'px',
							'line-height': (height + defaults.offsetY) + 'px',
							'color': defaults.color
						}),

					$wrapper = $('<span>')
						.addClass('prevue-wrapper')
						.css({
							'position': 'relative'
						});

				$previewBtn.append($previewIcon);

				$o.replaceWith($wrapper);
				$wrapper.append($input);
				$wrapper.append($previewBtn);

				// Add the event handler
				$previewBtn.on('click', function(e){
					var $el = $(this).prev(),
						$icon = $(this).children().eq(0);

					if ($el.attr('type') == 'password') {
						$el.attr('type', 'text');
						$icon.removeClass(defaults.fontIconClassNameOff).addClass(defaults.fontIconClassNameOn);
					}
					else {
						$el.attr('type', 'password');
						$icon.removeClass(defaults.fontIconClassNameOn).addClass(defaults.fontIconClassNameOff);
					}
				});

			} else {
				console.log('Prevue.js only works on <input type="password"> elements, while you have used it on a <'+node+'> element.');
				return false;
			}

		});

	};

})(jQuery);