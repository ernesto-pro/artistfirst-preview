/**
 * Script dell'area amministrativa: selezione media e stati dei toggle.
 *
 * @package ArtistFirst
 */
(function ($) {
	'use strict';

	var strings = (window.AF_ADMIN || {});

	function syncInput($box) {
		var ids = $box.find('.af-media__item').map(function () {
			return $(this).data('id') || '';
		}).get().filter(function (id) {
			return !!id;
		});

		$box.find('input[type="hidden"]').val(ids.join(','));
	}

	function item(attachment, multiple) {
		var url = attachment.url;

		if (attachment.sizes && attachment.sizes.medium) {
			url = attachment.sizes.medium.url;
		} else if (attachment.sizes && attachment.sizes.thumbnail) {
			url = attachment.sizes.thumbnail.url;
		}

		var $item = $('<span class="af-media__item"></span>')
			.attr('data-id', attachment.id)
			.append($('<img alt="">').attr('src', url))
			.append(
				$('<button type="button" class="af-media__remove">&times;</button>')
					.attr('aria-label', strings.remove || 'Rimuovi')
			);

		return $item;
	}

	$(document).on('click', '.af-media__add', function (event) {
		event.preventDefault();

		if (!window.wp || !wp.media) {
			return;
		}

		var $box = $(this).closest('.af-media');
		var multiple = String($box.data('multiple')) === '1';

		var frame = wp.media({
			title: strings.choose || 'Scegli immagine',
			button: { text: strings.use || 'Usa immagine' },
			library: { type: 'image' },
			multiple: multiple ? 'add' : false
		});

		frame.on('select', function () {
			var selection = frame.state().get('selection').toJSON();
			var $preview = $box.find('.af-media__preview');

			if (!multiple) {
				$preview.empty();
			}

			selection.forEach(function (attachment) {
				if (multiple && $preview.find('.af-media__item[data-id="' + attachment.id + '"]').length) {
					return;
				}
				$preview.append(item(attachment, multiple));
			});

			syncInput($box);
		});

		frame.open();
	});

	$(document).on('click', '.af-media__remove', function (event) {
		event.preventDefault();
		var $box = $(this).closest('.af-media');
		$(this).closest('.af-media__item').remove();
		syncInput($box);
	});

	$(document).on('change', '.af-row input[type="checkbox"]', function () {
		var $state = $(this).siblings('.af-row__state');
		if (!$state.length) {
			return;
		}
		$state
			.text(this.checked ? (strings.active || 'Attivo') : (strings.off || 'Disattivato'))
			.toggleClass('is-off', !this.checked);
	});
})(jQuery);
