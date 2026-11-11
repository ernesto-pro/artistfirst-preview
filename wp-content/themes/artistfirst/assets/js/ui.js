/**
 * Interazioni UI del tema (vanilla JS, nessuna dipendenza).
 *
 * @package ArtistFirst
 */
(function () {
	'use strict';

	var doc = document;
	var body = doc.body;

	function qs(selector, root) {
		return (root || doc).querySelector(selector);
	}

	function qsa(selector, root) {
		return Array.prototype.slice.call((root || doc).querySelectorAll(selector));
	}

	/* Header sticky + barra biglietti ------------------------------------ */
	var header = qs('#af-header');
	var tixbar = qs('[data-af-tixbar]');
	var tixbarClosed = false;
	try {
		tixbarClosed = '1' === window.sessionStorage.getItem('af_tixbar_closed');
	} catch (error) {}

	if (tixbar) {
		tixbar.inert = true;
		if (tixbarClosed) {
			tixbar.parentNode.removeChild(tixbar);
			tixbar = null;
		} else {
			var tixbarClose = qs('[data-af-tixbar-close]', tixbar);
			if (tixbarClose) {
				tixbarClose.addEventListener('click', function () {
					tixbar.classList.remove('is-visible');
					tixbar.setAttribute('aria-hidden', 'true');
					tixbar.inert = true;
					try {
						window.sessionStorage.setItem('af_tixbar_closed', '1');
					} catch (error) {}
					window.setTimeout(function () {
						if (tixbar && tixbar.parentNode) tixbar.parentNode.removeChild(tixbar);
						tixbar = null;
					}, 450);
				});
			}
		}
	}

	var applyScroll = function () {
		if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
		if (tixbar) {
			var threshold = Math.min(window.innerHeight * 0.72, 620);
			var show = window.scrollY > threshold && !body.classList.contains('af-menu-open');
			if (show !== tixbar.classList.contains('is-visible')) {
				tixbar.classList.toggle('is-visible', show);
				tixbar.setAttribute('aria-hidden', show ? 'false' : 'true');
				tixbar.inert = !show;
				// Una sola barra alla volta: quando entra la barra biglietti l'header
				// scivola via, liberando spazio per i contenuti.
				if (header) header.classList.toggle('is-hidden', show);
			}
		}
	};
	var scrollFrame = false;
	var onScroll = function () {
		if (scrollFrame) return;
		scrollFrame = true;
		window.requestAnimationFrame(function () {
			scrollFrame = false;
			applyScroll();
		});
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', applyScroll);
	applyScroll();

	/* Menu mobile -------------------------------------------------------- */
	var mobileMenu = qs('#af-mobile-menu');
	var openMenu = function () {
		if (!mobileMenu) return;
		mobileMenu.hidden = false;
		body.classList.add('af-menu-open');
		var first = qs('a, button', mobileMenu);
		if (first) first.focus();
	};
	var closeMenu = function () {
		if (!mobileMenu) return;
		mobileMenu.hidden = true;
		body.classList.remove('af-menu-open');
	};
	qsa('[data-af-menu-open]').forEach(function (button) {
		button.addEventListener('click', function () {
			openMenu();
			button.setAttribute('aria-expanded', 'true');
		});
	});
	qsa('[data-af-menu-close]').forEach(function (button) {
		button.addEventListener('click', function () {
			closeMenu();
			var opener = qs('[data-af-menu-open]');
			if (opener) {
				opener.setAttribute('aria-expanded', 'false');
				opener.focus();
			}
		});
	});
	if (mobileMenu) {
		qsa('a', mobileMenu).forEach(function (link) {
			link.addEventListener('click', closeMenu);
		});
	}

	/* Ricerca ------------------------------------------------------------ */
	var searchPanel = qs('#af-searchpanel');
	var searchOpeners = qsa('[data-af-search-open]');
	var openSearch = function () {
		if (!searchPanel) return;
		searchPanel.hidden = false;
		searchOpeners.forEach(function (button) { button.setAttribute('aria-expanded', 'true'); });
		var input = qs('#af-search-input', searchPanel);
		if (input) window.setTimeout(function () { input.focus(); }, 40);
	};
	var closeSearch = function () {
		if (!searchPanel) return;
		searchPanel.hidden = true;
		searchOpeners.forEach(function (button) { button.setAttribute('aria-expanded', 'false'); });
	};
	searchOpeners.forEach(function (button) {
		button.addEventListener('click', function () {
			if (searchPanel && searchPanel.hidden) openSearch();
			else closeSearch();
		});
	});
	qsa('[data-af-search-close]').forEach(function (button) {
		button.addEventListener('click', closeSearch);
	});
	if (searchPanel) {
		searchPanel.addEventListener('click', function (event) {
			if (event.target === searchPanel) closeSearch();
		});
	}

	/* Tastiera ----------------------------------------------------------- */
	doc.addEventListener('keydown', function (event) {
		if (event.key !== 'Escape') return;
		closeMenu();
		closeSearch();
		var opener = qs('[data-af-menu-open]');
		if (opener) opener.setAttribute('aria-expanded', 'false');
	});

	/* Cookie ------------------------------------------------------------- */
	var cookieBar = qs('[data-af-cookie]');
	var cookieKey = 'af_cookie_consent';
	var setCookie = function (value) {
		try {
			window.localStorage.setItem(cookieKey, value);
		} catch (error) {
			/* noop */
		}
		if (cookieBar) cookieBar.hidden = true;
		body.classList.remove('af-cookie-open');
	};

	if (cookieBar) {
		var stored = null;
		try {
			stored = window.localStorage.getItem(cookieKey);
		} catch (error) {
			stored = null;
		}
		if (!stored) {
			window.setTimeout(function () {
				cookieBar.hidden = false;
				body.classList.add('af-cookie-open');
			}, 900);
		}
		qsa('[data-af-cookie-accept]', cookieBar).forEach(function (button) {
			button.addEventListener('click', function () { setCookie('all'); });
		});
		qsa('[data-af-cookie-essential]', cookieBar).forEach(function (button) {
			button.addEventListener('click', function () { setCookie('essential'); });
		});
	}

	/* Countdown ---------------------------------------------------------- */
	qsa('[data-af-countdown]').forEach(function (element) {
		var target = new Date(element.getAttribute('data-af-countdown').replace(' ', 'T')).getTime();
		if (!target) return;
		var numbers = qsa('b', element);

		var tick = function () {
			var diff = target - Date.now();
			if (diff <= 0) {
				element.classList.add('is-done');
				numbers.forEach(function (number) { number.textContent = '00'; });
				return;
			}
			var seconds = Math.floor(diff / 1000);
			var values = [
				Math.floor(seconds / 86400),
				Math.floor((seconds % 86400) / 3600),
				Math.floor((seconds % 3600) / 60),
				seconds % 60
			];
			values.forEach(function (value, index) {
				if (numbers[index]) numbers[index].textContent = String(value).padStart(2, '0');
			});
		};

		tick();
		window.setInterval(tick, 1000);
	});

	/* Spotify on demand -------------------------------------------------- */
	qsa('.af-spotify').forEach(function (wrapper) {
		var button = qs('.af-spotify__cover', wrapper);
		if (!button) return;
		button.addEventListener('click', function () {
			var embed = wrapper.getAttribute('data-embed');
			if (!embed) return;
			var iframe = doc.createElement('iframe');
			iframe.src = embed;
			iframe.width = '100%';
			iframe.height = wrapper.getAttribute('data-type') === 'artist' ? '352' : '380';
			iframe.frameBorder = '0';
			iframe.loading = 'lazy';
			iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
			iframe.title = button.textContent.trim();
			wrapper.innerHTML = '';
			wrapper.appendChild(iframe);
			wrapper.classList.add('is-playing');
		});
	});

	/* Lightbox gallery --------------------------------------------------- */
	var lightbox = null;
	var closeLightbox = function () {
		if (!lightbox) return;
		lightbox.remove();
		lightbox = null;
		body.style.overflow = '';
	};
	qsa('[data-af-lightbox]').forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			closeLightbox();
			lightbox = doc.createElement('div');
			lightbox.className = 'af-lightbox';
			lightbox.innerHTML = '<button type="button" class="af-lightbox__close" aria-label="Chiudi">&times;</button><img alt="">';
			var image = qs('img', lightbox);
			image.src = link.getAttribute('href');
			image.alt = qs('img', link) ? qs('img', link).alt : '';
			body.appendChild(lightbox);
			body.style.overflow = 'hidden';
			lightbox.addEventListener('click', function (e) {
				if (e.target === lightbox || e.target.classList.contains('af-lightbox__close')) closeLightbox();
			});
		});
	});
	doc.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') closeLightbox();
	});

	/* Copia link --------------------------------------------------------- */
	qsa('[data-af-copy]').forEach(function (button) {
		button.addEventListener('click', function () {
			var value = button.getAttribute('data-af-copy');
			var done = button.getAttribute('data-copied') || 'Copiato';
			var label = button.textContent;
			var write = navigator.clipboard ? navigator.clipboard.writeText(value) : Promise.reject();
			write.then(function () {
				button.textContent = done;
				window.setTimeout(function () { button.textContent = label; }, 2000);
			}).catch(function () {
				window.prompt('', value);
			});
		});
	});

	/* Back to top -------------------------------------------------------- */
	qsa('[data-af-totop]').forEach(function (button) {
		button.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	});

	/* Reveal on scroll --------------------------------------------------- */
	var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	var reducedMotion = motionQuery.matches;
	var finePointer = window.matchMedia('(pointer: fine)').matches;

	var revealObserver = null;
	var initReveals = function () {
		if (!('IntersectionObserver' in window) || reducedMotion) return;
		if (!revealObserver) {
			revealObserver = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-inview');
						revealObserver.unobserve(entry.target);
					}
				});
			}, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
		}
		qsa('.af-section__head, .af-artist-card, .af-news-card, .af-service, .af-release-card, .af-playlist, .af-pagehead__row, .af-info-strip__inner, .af-concert, .af-next-strip, .af-sendmusic__inner, .af-shopbanner__content, .af-manifesto__title, .af-manifesto__intro, .af-stat, .af-ig-card, .af-roster-row, .af-artist__ig').forEach(function (element) {
			if (element.classList.contains('af-reveal')) return;
			element.classList.add('af-reveal');
			var parent = element.parentNode;
			if (parent) {
				var siblings = Array.prototype.filter.call(parent.children, function (child) {
					return child.classList && child.classList.contains('af-reveal');
				});
				element.style.setProperty('--af-i', String(Math.min(8, siblings.indexOf(element))));
			}
			revealObserver.observe(element);
		});
	};

	initReveals();

	/* Contatori --------------------------------------------------------- */
	var counters = qsa('[data-af-count]');
	if (counters.length && 'IntersectionObserver' in window) {
		var runCounter = function (node) {
			var target = Number.parseInt(node.getAttribute('data-af-count') || '0', 10);
			if (!target || target < 0) return;

			if (reducedMotion) {
				node.textContent = String(target);
				return;
			}

			var started = null;
			var duration = 1100;
			var tick = function (now) {
				if (started === null) started = now;
				var progress = Math.min(1, (now - started) / duration);
				var eased = 1 - Math.pow(1 - progress, 3);
				node.textContent = String(Math.round(target * eased));
				if (progress < 1) {
					window.requestAnimationFrame(tick);
				} else {
					node.textContent = String(target);
				}
			};
			node.textContent = '0';
			window.requestAnimationFrame(tick);
		};

		var counterObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				runCounter(entry.target);
				counterObserver.unobserve(entry.target);
			});
		}, { threshold: 0.45 });
		counters.forEach(function (node) { counterObserver.observe(node); });
	}

	/* Barra di progresso ------------------------------------------------ */
	var progress = doc.createElement('div');
	progress.className = 'af-progress';
	progress.setAttribute('aria-hidden', 'true');
	var progressFill = doc.createElement('span');
	progress.appendChild(progressFill);
	body.appendChild(progress);

	var scrollQueued = false;
	var updateProgress = function () {
		var max = doc.documentElement.scrollHeight - window.innerHeight;
		var ratio = max > 8 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
		progressFill.style.transform = 'scaleX(' + ratio + ')';
		progress.classList.toggle('is-visible', window.scrollY > 40);
		scrollQueued = false;
	};
	window.addEventListener('scroll', function () {
		if (scrollQueued) return;
		scrollQueued = true;
		window.requestAnimationFrame(updateProgress);
	}, { passive: true });
	window.addEventListener('resize', updateProgress);
	window.addEventListener('load', updateProgress);
	updateProgress();

	/* Cursore e luce ---------------------------------------------------- */
	if (finePointer && !reducedMotion) {
		var ring = doc.createElement('div');
		ring.className = 'af-cursor';
		ring.setAttribute('aria-hidden', 'true');
		var ringDot = doc.createElement('i');
		ring.appendChild(ringDot);
		body.appendChild(ring);

		var spotlight = doc.createElement('div');
		spotlight.className = 'af-spotlight';
		spotlight.setAttribute('aria-hidden', 'true');
		body.appendChild(spotlight);

		var pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		var smooth = { x: pointer.x, y: pointer.y };
		var spotting = { x: pointer.x, y: pointer.y };
		var cursorFrame = null;
		var cursorActive = false;

		var paintCursor = function () {
			smooth.x += (pointer.x - smooth.x) * 0.22;
			smooth.y += (pointer.y - smooth.y) * 0.22;
			ring.style.transform = 'translate3d(' + smooth.x + 'px,' + smooth.y + 'px,0) translate(-50%, -50%) scale(' + (cursorActive ? 1.85 : 1) + ')';
			spotting.x += (pointer.x - spotting.x) * 0.08;
			spotting.y += (pointer.y - spotting.y) * 0.08;
			// Solo transform: niente gradient ridisegnato a ogni frame.
			spotlight.style.transform = 'translate3d(' + spotting.x + 'px,' + spotting.y + 'px,0)';
			ring.classList.toggle('is-active', cursorActive);

			if (Math.abs(pointer.x - smooth.x) > 0.4 || Math.abs(pointer.y - smooth.y) > 0.4 || Math.abs(pointer.x - spotting.x) > 0.6 || Math.abs(pointer.y - spotting.y) > 0.6) {
				cursorFrame = window.requestAnimationFrame(paintCursor);
			} else {
				cursorFrame = null;
			}
		};

		var wakeCursor = function () {
			ring.classList.add('is-on');
			spotlight.classList.add('is-on');
			if (cursorFrame === null) cursorFrame = window.requestAnimationFrame(paintCursor);
		};

		window.addEventListener('pointermove', function (event) {
			if (event.pointerType === 'touch') return;
			pointer.x = event.clientX;
			pointer.y = event.clientY;
			cursorActive = !!(event.target.closest && event.target.closest('a, button, summary, input, select, textarea, .af-artist-card, .af-service'));
			wakeCursor();
		}, { passive: true });

		doc.addEventListener('pointerleave', function () {
			ring.classList.remove('is-on');
			spotlight.classList.remove('is-on');
		});
		window.addEventListener('blur', function () {
			ring.classList.remove('is-on');
			spotlight.classList.remove('is-on');
		});
		window.addEventListener('scroll', function () {
			if (ring.classList.contains('is-on')) wakeCursor();
		}, { passive: true });
	}

	/* Bottoni magnetici, tilt e parallasse ------------------------------ */
	var bindMotion = function () {
		if (!finePointer || reducedMotion) return;

		qsa('.af-btn, .af-round-link, .af-link-arrow, .af-hud__boost, .af-hud__nav button, .af-ticket-cta, .af-playlist__play').forEach(function (button) {
			if (button.dataset.afMag) return;
			button.dataset.afMag = '1';
			button.classList.add('af-magnetic');
			button.addEventListener('pointermove', function (event) {
				var rect = button.getBoundingClientRect();
				var x = (event.clientX - rect.left) / rect.width - 0.5;
				var y = (event.clientY - rect.top) / rect.height - 0.5;
				button.style.setProperty('--af-mag-x', (x * 10).toFixed(2) + 'px');
				button.style.setProperty('--af-mag-y', (y * 7).toFixed(2) + 'px');
			});
			button.addEventListener('pointerleave', function () {
				button.style.setProperty('--af-mag-x', '0px');
				button.style.setProperty('--af-mag-y', '0px');
			});
		});

		var tiltables = qsa('[data-af-tilt], .af-artist-card__media, .af-release-card__media, .af-playlist__media, .af-shopbanner__image');
		tiltables.forEach(function (card) {
			if (card.dataset.afTiltBound) return;
			card.dataset.afTiltBound = '1';
			card.classList.add('af-tilt');
			card.addEventListener('pointermove', function (event) {
				var rect = card.getBoundingClientRect();
				var x = (event.clientX - rect.left) / rect.width - 0.5;
				var y = (event.clientY - rect.top) / rect.height - 0.5;
				card.style.setProperty('--af-tilt-x', (y * -6).toFixed(2) + 'deg');
				card.style.setProperty('--af-tilt-y', (x * 8).toFixed(2) + 'deg');
				card.style.setProperty('--af-tilt-lx', ((x + 0.5) * 100).toFixed(1) + '%');
				card.style.setProperty('--af-tilt-ly', ((y + 0.5) * 100).toFixed(1) + '%');
			});
			card.addEventListener('pointerleave', function () {
				card.style.setProperty('--af-tilt-x', '0deg');
				card.style.setProperty('--af-tilt-y', '0deg');
			});
		});

		var parallaxTargets = qsa('.af-shopbanner__image img, .af-sendmusic__inner, .af-pagehead__media img, .af-artist-profile__media img, .af-news-card--lead .af-news-card__media img');
		parallaxTargets.forEach(function (item) {
			if (item.dataset.afParBound) return;
			item.dataset.afParBound = '1';
			if (!item.hasAttribute('data-af-parallax')) item.setAttribute('data-af-parallax', '14');
			item.classList.add('af-parallax');
		});
	};

	var paintParallax = function () {
		qsa('[data-af-parallax]').forEach(function (item) {
			var rect = item.getBoundingClientRect();
			if (rect.bottom < -160 || rect.top > window.innerHeight + 160) return;
			var progressValue = (rect.top + rect.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2);
			progressValue = Math.max(-1.2, Math.min(1.2, progressValue));
			var strength = parseFloat(item.getAttribute('data-af-parallax')) || 12;
			item.style.setProperty('--af-par', (progressValue * strength).toFixed(2) + 'px');
		});
	};

	bindMotion();
	initReveals();
	paintParallax();

	window.addEventListener('load', function () {
		bindMotion();
		initReveals();
		paintParallax();
	});
	window.setTimeout(function () {
		bindMotion();
		initReveals();
		paintParallax();
	}, 700);

	var parallaxQueued = false;
	window.addEventListener('scroll', function () {
		if (parallaxQueued) return;
		parallaxQueued = true;
		window.requestAnimationFrame(function () {
			paintParallax();
			parallaxQueued = false;
		});
	}, { passive: true });
	window.addEventListener('resize', function () {
		bindMotion();
		paintParallax();
	});

	/* ==================================================================
	   Utility condivise dai moduli interattivi
	   ================================================================== */
	var AF_DATA = window.AF_DATA || {};
	var STR = AF_DATA.strings || {};
	var isEnglish = AF_DATA.lang === 'en';

	function t(key, fallback) {
		return (STR && STR[key]) ? STR[key] : fallback;
	}

	function escapeHTML(value) {
		return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
			return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
		});
	}

	function storeGet(key, fallback) {
		try {
			var raw = window.localStorage.getItem(key);
			return raw ? JSON.parse(raw) : fallback;
		} catch (error) {
			return fallback;
		}
	}

	function storeSet(key, value) {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			/* noop */
		}
	}

	function isTyping(target) {
		if (!target) return false;
		var tag = (target.tagName || '').toLowerCase();
		return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable;
	}

	/* Toast ------------------------------------------------------------- */
	var toastHost = doc.createElement('div');
	toastHost.className = 'af-toasts';
	toastHost.setAttribute('aria-live', 'polite');
	toastHost.setAttribute('aria-atomic', 'false');
	body.appendChild(toastHost);

	function toast(message, kind) {
		if (!message || !toastHost) return;
		var node = doc.createElement('div');
		node.className = 'af-toast' + (kind ? ' af-toast--' + kind : '');
		node.innerHTML = '<span class="af-toast__spark" aria-hidden="true">✦</span><span>' + escapeHTML(message) + '</span>';
		toastHost.appendChild(node);
		window.requestAnimationFrame(function () { node.classList.add('is-in'); });
		window.setTimeout(function () {
			node.classList.remove('is-in');
			window.setTimeout(function () {
				if (node.parentNode) node.parentNode.removeChild(node);
			}, 420);
		}, 3200);
	}

	/* ==================================================================
	   AF Pass 2.0 — gamification locale (localStorage)
	   ================================================================== */
	var PASS_KEY = 'af_pass_v2';
	var PASS_DEFAULTS = {
		points: 0,
		saved: {},
		tickets: [],
		visited: [],
		opened: false,
		streak: 1,
		last: '',
		listener: false,
		days: [],
		seenBadges: [],
		seenLevel: -1,
		shared: false,
		read: [],
		missions: { day: '', done: {} }
	};

	var pass = storeGet(PASS_KEY, null);
	if (!pass || typeof pass !== 'object' || Array.isArray(pass)) {
		pass = {};
	}
	Object.keys(PASS_DEFAULTS).forEach(function (key) {
		if (typeof pass[key] === 'undefined' || pass[key] === null) {
			pass[key] = JSON.parse(JSON.stringify(PASS_DEFAULTS[key]));
		}
	});
	if (!pass.saved || typeof pass.saved !== 'object') pass.saved = {};
	if (!Array.isArray(pass.tickets)) pass.tickets = [];
	if (!Array.isArray(pass.visited)) pass.visited = [];
	if (!Array.isArray(pass.days)) pass.days = [];
	if (!Array.isArray(pass.seenBadges)) pass.seenBadges = [];
	if (!Array.isArray(pass.read)) pass.read = [];
	if (!pass.missions || typeof pass.missions !== 'object') pass.missions = { day: '', done: {} };
	if (!pass.missions.done || typeof pass.missions.done !== 'object') pass.missions.done = {};
	if (pass.last && pass.days.indexOf(pass.last) === -1) pass.days.push(pass.last);

	var LEVELS = [
		{ name: t('level_scout', 'Scout'), min: 0, perk: t('level_perk_scout', 'Salva date e biglietti, tutto in un posto') },
		{ name: t('level_insider', 'Insider'), min: 120, perk: t('level_perk_insider', 'Avvisi pre-sale e sold out in anticipo') },
		{ name: t('level_backstage', 'Backstage'), min: 320, perk: t('level_perk_backstage', 'Contenuti backstage, playlist e dietro le quinte') },
		{ name: t('level_headliner', 'Headliner'), min: 700, perk: t('level_perk_headliner', 'Drop merch e date segrete prima di tutti') },
		{ name: t('level_legend', 'Leggenda'), min: 1300, perk: t('level_perk_legend', 'Wall of fame: il tuo nome nei credit Artist First') }
	];

	var MISSIONS = [
		{ id: 'open', icon: '✦', label: t('mission_open', 'Apri l’AF Pass'), reward: 10 },
		{ id: 'visit', icon: '◎', label: t('mission_visit', 'Esplora un artista'), reward: 15 },
		{ id: 'save', icon: '▣', label: t('mission_save', 'Salva una data'), reward: 20 },
		{ id: 'listen', icon: '♪', label: t('mission_listen', 'Ascolta su Spotify'), reward: 15 },
		{ id: 'ticket', icon: '◉', label: t('mission_ticket', 'Apri il box office'), reward: 10 },
		{ id: 'share', icon: '↗', label: t('mission_share', 'Condividi il pass'), reward: 25 },
		{ id: 'read', icon: '▤', label: t('mission_read', 'Leggi una news'), reward: 10 }
	];

	var passDock = null;
	var passDrawer = null;
	var passOpener = null;
	var passArmed = false;

	function passLevel() {
		var points = Math.max(0, Number(pass.points) || 0);
		var index = 0;
		LEVELS.forEach(function (level, position) {
			if (points >= level.min) index = position;
		});
		var current = LEVELS[index];
		var next = LEVELS[index + 1] || null;
		var progress = next ? Math.min(1, (points - current.min) / (next.min - current.min)) : 1;
		return {
			index: index,
			name: current.name,
			perk: current.perk,
			next: next,
			points: points,
			progress: progress,
			missing: next ? Math.max(0, next.min - points) : 0
		};
	}

	function passDayKey(date) {
		return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
	}

	function passBadges() {
		var savedCount = Object.keys(pass.saved).length;
		var artistCount = Number(AF_DATA.artistCount) || (AF_DATA.artists || []).length;
		return [
			{ id: 'first', icon: '✦', label: t('passport_first', 'Primo passo'), desc: t('passport_first_desc', 'Apri il tuo AF Pass'), value: pass.opened ? 1 : 0, target: 1 },
			{ id: 'explorer', icon: '◎', label: t('passport_explorer', 'Esploratore'), desc: t('passport_explorer_desc', 'Visita 5 artisti'), value: pass.visited.length, target: 5 },
			{ id: 'roster', icon: '✳', label: t('passport_roster', 'Tutto il roster'), desc: t('passport_roster_desc', 'Visita tutti gli artisti'), value: artistCount ? pass.visited.length : 0, target: Math.max(1, artistCount) },
			{ id: 'saver', icon: '▣', label: t('passport_saver', 'Date saver'), desc: t('passport_saver_desc', 'Salva 3 date'), value: savedCount, target: 3 },
			{ id: 'streak', icon: '⚡', label: t('passport_streak_badge', 'Sempre sul pezzo'), desc: t('passport_streak_desc', 'Torna 3 giorni di fila'), value: Number(pass.streak) || 1, target: 3 },
			{ id: 'listener', icon: '♪', label: t('passport_listener', 'Orecchio fino'), desc: t('passport_listener_desc', 'Apri una playlist o Spotify'), value: pass.listener ? 1 : 0, target: 1 },
			{ id: 'ticket', icon: '◉', label: t('passport_ticket_badge', 'Primo biglietto'), desc: t('passport_ticket_badge_desc', 'Salva un biglietto o un avviso'), value: (pass.tickets || []).length, target: 1 },
			{ id: 'sharer', icon: '↗', label: t('passport_sharer', 'Ambasciatore'), desc: t('passport_sharer_desc', 'Condividi il tuo pass'), value: pass.shared ? 1 : 0, target: 1 },
			{ id: 'reader', icon: '▤', label: t('passport_reader', 'Sempre informato'), desc: t('passport_reader_desc', 'Leggi 3 news'), value: (pass.read || []).length, target: 3 }
		].map(function (badge) {
			badge.done = badge.value >= badge.target;
			badge.percent = Math.min(100, Math.round((badge.value / badge.target) * 100));
			return badge;
		});
	}

	function passTodayMissions() {
		var key = passDayKey(new Date());
		if (!pass.missions || pass.missions.day !== key) {
			pass.missions = { day: key, done: {} };
		}
		var seed = 0;
		key.split('').forEach(function (character) { seed += character.charCodeAt(0); });
		var offset = seed % MISSIONS.length;
		var picks = [];
		for (var index = 0; index < 3; index++) {
			picks.push(MISSIONS[(offset + index) % MISSIONS.length]);
		}
		return picks;
	}

	function passMission(id) {
		var mission = null;
		passTodayMissions().forEach(function (item) {
			if (item.id === id) mission = item;
		});
		if (!mission || pass.missions.done[id]) return false;
		pass.missions.done[id] = true;
		pass.points = Number(pass.points) + mission.reward;
		passAfter();
		window.setTimeout(function () {
			toast(t('passport_mission_done', 'Missione completata') + ' · +' + mission.reward, 'xp');
		}, 650);
		return true;
	}

	function passAward(points) {
		pass.points = Math.max(0, Number(pass.points) || 0) + Number(points || 0);
	}

	function passAfter() {
		var level = passLevel();
		var doneIds = passBadges().filter(function (badge) { return badge.done; }).map(function (badge) { return badge.id; });
		var fresh = doneIds.filter(function (id) {
			return (pass.seenBadges || []).indexOf(id) === -1;
		});

		if (fresh.length) {
			passAward(fresh.length * 20);
			pass.seenBadges = (pass.seenBadges || []).concat(fresh);
			passBadges().forEach(function (badge) {
				if (fresh.indexOf(badge.id) === -1) return;
				window.setTimeout(function () {
					toast(t('passport_badge_toast', 'Badge sbloccato') + ' · ' + badge.label + ' · +20', 'xp');
				}, 900);
			});
			level = passLevel();
		}

		if (pass.seenLevel < 0) {
			pass.seenLevel = level.index;
		} else if (level.index > pass.seenLevel) {
			pass.seenLevel = level.index;
			window.setTimeout(function () {
				toast(t('passport_level_up', 'Nuovo livello') + ' · ' + level.name, 'xp');
			}, 1100);
			if (passDock) {
				passDock.classList.remove('is-pulse');
				void passDock.offsetWidth;
				passDock.classList.add('is-pulse');
				window.setTimeout(function () { passDock.classList.remove('is-pulse'); }, 1600);
			}
		}

		storeSet(PASS_KEY, pass);
		passPaintDock();
		if (passDrawer && passDrawer.classList.contains('is-open')) passRender();
	}

	function passSave() {
		passAfter();
	}

	function passInitSeen() {
		if (pass.seenLevel >= 0) return;
		pass.seenLevel = passLevel().index;
		if (Number(pass.points) > 0) {
			pass.seenBadges = passBadges().filter(function (badge) { return badge.done; }).map(function (badge) { return badge.id; });
		}
		storeSet(PASS_KEY, pass);
	}

	function passDaily() {
		var today = new Date();
		var key = passDayKey(today);
		if (pass.last === key) return;

		var previous = pass.last ? new Date(pass.last + 'T12:00:00') : null;
		var diff = previous ? Math.round((new Date(key + 'T12:00:00') - previous) / 86400000) : 0;

		if (previous && diff === 1) {
			pass.streak = Number(pass.streak) + 1;
		} else if (!previous || diff > 1 || diff < 0) {
			pass.streak = 1;
		}

		pass.last = key;
		pass.days = (pass.days || []).filter(function (day) { return day !== key; }).concat(key).slice(-60);
		pass.missions = { day: key, done: {} };
		passAward(5);
		passAfter();
		if (previous) {
			window.setTimeout(function () { toast(t('passport_visit_toast', 'Bentornato · +5'), 'xp'); }, 2000);
		}
	}

	function passArtistVisit() {
		var node = qs('.af-artist__name');
		if (!node) return;
		var name = (node.textContent || '').replace(/\s+/g, ' ').trim();
		if (!name) return;
		if (pass.visited.indexOf(name) !== -1) return;
		pass.visited.push(name);
		passAward(10);
		passAfter();
		passMission('visit');
		window.setTimeout(function () { toast(t('passport_artist_toast', 'Artista esplorato · +10'), 'xp'); }, 1400);
	}

	function passReadArticle() {
		if (!/(^|\s)single-post(\s|$)/.test(body.className)) return;
		var match = body.className.match(/postid-(\d+)/);
		if (!match) return;
		var id = match[1];
		if (pass.read.indexOf(id) !== -1) return;
		pass.read.push(id);
		if (pass.read.length > 50) pass.read = pass.read.slice(-50);
		passAward(10);
		passAfter();
		passMission('read');
		window.setTimeout(function () { toast(t('passport_read_toast', 'News letta · +10'), 'xp'); }, 1800);
	}

	function passSavedList() {
		return Object.keys(pass.saved).map(function (id) {
			return pass.saved[id];
		}).filter(function (item) {
			return item && item.label;
		}).sort(function (a, b) {
			return String(a.date || '').localeCompare(String(b.date || ''));
		});
	}

	function passTicketList() {
		return (pass.tickets || []).slice().sort(function (a, b) {
			return String(a.date || '').localeCompare(String(b.date || ''));
		});
	}

	function passTicketCard(ticket) {
		var date = String(ticket.date || '');
		var parts = date.split('-');
		var day = parts[2] || '—';
		var month = '';
		if (parts[1]) {
			var months = ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'];
			var monthsEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
			var list = (AF_DATA.lang || 'it') === 'en' ? monthsEn : months;
			month = list[Number(parts[1]) - 1] || '';
		}

		var html = '<li class="af-pass__ticket' + (ticket.soldOut ? ' is-alert' : '') + '">';
		html += '<span class="af-pass__ticket-stub"><b>' + escapeHTML(day) + '</b><i>' + escapeHTML(month) + '</i></span>';
		html += '<span class="af-pass__ticket-main">';
		html += '<strong>' + escapeHTML(ticket.artist || '') + '</strong>';
		html += '<span>' + escapeHTML([ticket.city, ticket.venue || ticket.sector].filter(Boolean).join(' · ')) + '</span>';
		html += '<small>' + escapeHTML(ticket.soldOut
			? t('passport_ticket_alert', 'Avviso attivo')
			: t('passport_ticket_qty', 'Biglietti') + ' ' + (ticket.qty || 1) + (ticket.sector ? ' · ' + ticket.sector : '')) + '</small>';
		html += '<em>' + escapeHTML(t('passport_ticket_code', 'Codice') + ' ' + (ticket.code || 'AF')) + '</em>';
		html += '</span>';
		html += '</li>';
		return html;
	}

	function passStreakStrip() {
		var days = pass.days || [];
		var today = new Date();
		var labels = (AF_DATA.lang || 'it') === 'en'
			? ['M', 'T', 'W', 'T', 'F', 'S', 'S']
			: ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
		var html = '<div class="af-pass__streak">';
		html += '<div class="af-pass__streak-head"><span class="af-eyebrow">' + escapeHTML(t('passport_streak_title', 'La tua striscia')) + '</span><em>' + Number(pass.streak || 1) + '</em></div>';
		html += '<div class="af-pass__streak-days">';
		for (var offset = 6; offset >= 0; offset--) {
			var date = new Date(today.getTime() - offset * 86400000);
			var key = passDayKey(date);
			var active = days.indexOf(key) !== -1;
			var index = (date.getDay() + 6) % 7;
			html += '<span class="af-pass__streak-day' + (active ? ' is-on' : '') + (offset === 0 ? ' is-today' : '') + '">';
			html += '<i>' + labels[index] + '</i><b aria-hidden="true">' + (active ? '●' : '·') + '</b>';
			html += '</span>';
		}
		html += '</div></div>';
		return html;
	}

	function passCollection() {
		var collection = AF_DATA.artists || [];
		var byName = {};
		collection.forEach(function (artist) {
			byName[String(artist.name || '').toLowerCase()] = artist;
		});

		var items = pass.visited.map(function (name) {
			return byName[String(name).toLowerCase()] || { name: name, url: '' };
		});

		var html = '<div class="af-pass__section">';
		html += '<div class="af-pass__section-head"><span class="af-eyebrow">' + escapeHTML(t('passport_collection', 'Collezione artisti')) + '</span><em>' + pass.visited.length + (collection.length ? '/' + collection.length : '') + '</em></div>';

		if (items.length) {
			html += '<div class="af-pass__collection">';
			items.slice(0, 12).forEach(function (artist) {
				var thumb = artist.thumb || artist.image || '';
				var tag = artist.url ? 'a' : 'span';
				html += '<' + tag + ' class="af-pass__artist"' + (artist.url ? ' href="' + escapeHTML(artist.url) + '"' : '') + '>';
				if (thumb) {
					html += '<img src="' + escapeHTML(thumb) + '" alt="" loading="lazy" decoding="async">';
				} else {
					html += '<span class="af-pass__artist-fallback" aria-hidden="true">' + escapeHTML(String(artist.name || '').slice(0, 1)) + '</span>';
				}
				html += '<small>' + escapeHTML(artist.name || '') + '</small>';
				html += '</' + tag + '>';
			});
			if (items.length > 12) {
				html += '<span class="af-pass__artist is-more">+' + (items.length - 12) + '</span>';
			}
			html += '</div>';
		} else {
			html += '<p class="af-pass__empty">' + escapeHTML(t('passport_collection_empty', 'Apri la scheda di un artista per aggiungerlo alla collezione.')) + '</p>';
			if (AF_DATA.urls && AF_DATA.urls.artists) {
				html += '<a class="af-pass__link" href="' + escapeHTML(AF_DATA.urls.artists) + '">' + escapeHTML(t('passport_collection_cta', 'Esplora il roster')) + ' →</a>';
			}
		}
		html += '</div>';
		return html;
	}

	function passRender() {
		var body = qs('[data-af-pass-body]');
		if (!body) return;

		var level = passLevel();
		var badges = passBadges();
		var saved = passSavedList();
		var tickets = passTicketList();
		var unlocked = badges.filter(function (badge) { return badge.done; }).length;
		var missions = passTodayMissions();
		var html = '';

		html += '<div class="af-pass__score">';
		html += '<div class="af-pass__points"><strong>' + level.points + '</strong><span>' + escapeHTML(t('passport_points', 'punti')) + '</span></div>';
		html += '<div class="af-pass__level"><span class="af-eyebrow">' + escapeHTML(t('passport_level', 'Livello')) + ' ' + (level.index + 1) + ' / ' + LEVELS.length + '</span><b>' + escapeHTML(level.name) + '</b>';
		html += '<div class="af-pass__meter"><span style="transform:scaleX(' + level.progress.toFixed(3) + ')"></span></div>';
		html += '<small>' + (level.next ? level.missing + ' ' + escapeHTML(t('passport_next', 'al prossimo livello')) + ' · ' + escapeHTML(level.next.name) : escapeHTML(t('passport_max', 'Livello massimo')) + ' · ' + escapeHTML(level.name)) + '</small>';
		html += '</div></div>';

		html += '<div class="af-pass__perks">';
		html += '<div class="af-pass__perk"><span class="af-eyebrow">' + escapeHTML(t('passport_perk_now', 'Ora')) + '</span><p>' + escapeHTML(level.perk) + '</p></div>';
		if (level.next) {
			html += '<div class="af-pass__perk is-next"><span class="af-eyebrow">' + escapeHTML(t('passport_perk_next', 'Prossimo')) + ' · ' + escapeHTML(level.next.name) + '</span><p>' + escapeHTML(level.next.perk) + '</p></div>';
		}
		html += '</div>';

		html += passStreakStrip();

		html += '<div class="af-pass__quick">';
		html += '<div><b>' + saved.length + '</b><span>' + escapeHTML(t('passport_saved', 'Date salvate')) + '</span></div>';
		html += '<div><b>' + pass.visited.length + '</b><span>' + escapeHTML(t('passport_explored', 'Artisti esplorati')) + '</span></div>';
		html += '<div><b>' + unlocked + '</b><span>' + escapeHTML(t('passport_badges', 'Badge')) + '</span></div>';
		html += '</div>';

		html += '<div class="af-pass__section">';
		html += '<div class="af-pass__section-head"><span class="af-eyebrow">' + escapeHTML(t('passport_missions', 'Missioni di oggi')) + '</span><em>' + escapeHTML(t('passport_missions_reset', 'Ogni giorno')) + '</em></div>';
		html += '<div class="af-pass__missions">';
		missions.forEach(function (mission) {
			var done = !!pass.missions.done[mission.id];
			html += '<div class="af-pass__mission' + (done ? ' is-done' : '') + '">';
			html += '<span class="af-pass__mission-icon" aria-hidden="true">' + (done ? '✓' : mission.icon) + '</span>';
			html += '<span class="af-pass__mission-label">' + escapeHTML(mission.label) + '</span>';
			html += '<span class="af-pass__mission-xp">' + (done ? '✓' : '+' + mission.reward) + '</span>';
			html += '</div>';
		});
		html += '</div></div>';

		html += '<div class="af-pass__section">';
		html += '<div class="af-pass__section-head"><span class="af-eyebrow">' + escapeHTML(t('passport_badges', 'Badge')) + '</span><em>' + unlocked + '/' + badges.length + '</em></div>';
		html += '<div class="af-pass__badges">';
		badges.forEach(function (badge) {
			html += '<div class="af-pass__badge' + (badge.done ? ' is-on' : '') + '" title="' + escapeHTML(badge.desc) + '">';
			html += '<span class="af-pass__badge-icon" aria-hidden="true">' + badge.icon + '</span>';
			html += '<span class="af-pass__badge-label">' + escapeHTML(badge.label) + '</span>';
			html += '<small>' + escapeHTML(badge.done ? badge.desc : (badge.value + '/' + badge.target)) + '</small>';
			if (!badge.done) {
				html += '<span class="af-pass__badge-bar" aria-hidden="true"><i style="width:' + badge.percent + '%"></i></span>';
			}
			html += '</div>';
		});
		html += '</div></div>';

		html += passCollection();

		html += '<div class="af-pass__section">';
		html += '<div class="af-pass__section-head"><span class="af-eyebrow">' + escapeHTML(t('passport_tickets', 'I tuoi biglietti')) + '</span><em>' + tickets.length + '</em></div>';
		if (tickets.length) {
			html += '<ul class="af-pass__tickets">';
			tickets.forEach(function (ticket) { html += passTicketCard(ticket); });
			html += '</ul>';
		} else {
			html += '<p class="af-pass__empty">' + escapeHTML(t('passport_empty_tickets', 'Nessun biglietto: apri il box office sul palco.')) + '</p>';
		}
		html += '</div>';

		html += '<div class="af-pass__section">';
		html += '<div class="af-pass__section-head"><span class="af-eyebrow">' + escapeHTML(t('passport_saved', 'Date salvate')) + '</span><em>' + saved.length + '</em></div>';
		if (saved.length) {
			html += '<ul class="af-pass__dates">';
			saved.forEach(function (item) {
				html += '<li>';
				html += '<a href="' + escapeHTML(item.url || '#') + '"><span class="af-pass__date-label">' + escapeHTML(item.label) + '</span>';
				html += '<span class="af-pass__date-meta">' + escapeHTML([item.artist, item.city].filter(Boolean).join(' · ')) + '</span></a>';
				html += '<button type="button" data-af-pass-remove="' + escapeHTML(item.id) + '" aria-label="' + escapeHTML(t('passport_removed_toast', 'Data rimossa')) + '">&times;</button>';
				html += '</li>';
			});
			html += '</ul>';
		} else {
			html += '<p class="af-pass__empty">' + escapeHTML(t('passport_empty_saved', 'Nessuna data salvata. Aggiungi le date che non vuoi perdere.')) + '</p>';
		}
		html += '</div>';

		if (passArmed) {
			html += '<div class="af-pass__confirm">';
			html += '<p>' + escapeHTML(t('passport_reset_ask', 'Azzerare punti, badge e collezione?')) + '</p>';
			html += '<div class="af-pass__actions">';
			html += '<button type="button" class="af-btn af-btn--solid" data-af-pass-reset-yes>' + escapeHTML(t('passport_reset_yes', 'Sì, azzera')) + '</button>';
			html += '<button type="button" class="af-btn af-btn--ghost" data-af-pass-reset-no>' + escapeHTML(t('passport_cancel', 'Annulla')) + '</button>';
			html += '</div></div>';
		} else {
			html += '<div class="af-pass__actions">';
			html += '<button type="button" class="af-btn af-btn--solid" data-af-pass-share>' + escapeHTML(t('passport_share', 'Condividi pass')) + '</button>';
			html += '<button type="button" class="af-btn af-btn--ghost" data-af-pass-reset>' + escapeHTML(t('passport_reset', 'Ricomincia')) + '</button>';
			html += '</div>';
		}

		body.innerHTML = html;
	}

	function passPaintDock() {
		if (!passDock) return;
		var level = passLevel();
		var pointsNode = qs('[data-af-pass-points]', passDock);
		var levelNode = qs('[data-af-pass-level]', passDock);
		if (pointsNode) pointsNode.textContent = String(level.points);
		if (levelNode) levelNode.textContent = level.name;
		passDock.style.setProperty('--af-pass-progress', String(level.progress));
	}

	function passFocusable() {
		if (!passDrawer) return [];
		return qsa('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', passDrawer).filter(function (node) {
			return !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
		});
	}

	function openPass(trigger) {
		if (!passDrawer) return;
		passOpener = trigger || null;
		passArmed = false;
		passDrawer.hidden = false;
		body.classList.add('af-pass-open');
		passRender();
		// Reflow sincrono: l'animazione parte anche quando requestAnimationFrame
		// è sospeso (tab in background, browser headless).
		void passDrawer.offsetWidth;
		passDrawer.classList.add('is-open');
		if (passDock) passDock.setAttribute('aria-expanded', 'true');
		var close = qs('.af-pass__close', passDrawer);
		if (close) window.setTimeout(function () { close.focus(); }, 60);

		if (!pass.opened) {
			pass.opened = true;
			passAward(15);
			passAfter();
			window.setTimeout(function () { toast('AF Pass · +15', 'xp'); }, 500);
		}
		passMission('open');
		passRender();
	}

	function closePass() {
		if (!passDrawer) return;
		passArmed = false;
		passDrawer.classList.remove('is-open');
		body.classList.remove('af-pass-open');
		if (passDock) passDock.setAttribute('aria-expanded', 'false');
		window.setTimeout(function () {
			if (!passDrawer.classList.contains('is-open')) passDrawer.hidden = true;
		}, 320);
		if (passOpener && passOpener.focus) passOpener.focus();
	}

	function passShare() {
		var level = passLevel();
		var url = (AF_DATA && AF_DATA.home) ? AF_DATA.home : window.location.href;
		var text = 'AF Pass — ' + level.points + ' ' + t('passport_points', 'punti') + ' · ' + level.name + ' · Artist First';
		var first = !pass.shared;

		function done() {
			if (first) {
				pass.shared = true;
				passAward(30);
				passAfter();
				toast(t('passport_share_done', 'Pass condiviso · +30'), 'xp');
			} else {
				toast(t('passport_copied', 'Pass copiato'));
			}
			passMission('share');
		}

		if (navigator.share) {
			navigator.share({ title: 'AF Pass — Artist First', text: text, url: url }).then(done).catch(function () {});
			return;
		}

		var payload = text + ' · ' + url;
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(payload).then(done).catch(function () {
				window.prompt('', payload);
				done();
			});
		} else {
			window.prompt('', payload);
			done();
		}
	}

	function passReset() {
		pass = JSON.parse(JSON.stringify(PASS_DEFAULTS));
		pass.last = passDayKey(new Date());
		pass.days = [pass.last];
		pass.missions = { day: pass.last, done: {} };
		pass.seenLevel = 0;
		pass.seenBadges = [];
		passArmed = false;
		storeSet(PASS_KEY, pass);
		passPaintDock();
		passRender();
		passSyncButtons();
		toast(t('passport_reset', 'Ricomincia'));
	}

	function buildPass() {
		passInitSeen();

		passDock = doc.createElement('button');
		passDock.type = 'button';
		passDock.className = 'af-passdock';
		passDock.setAttribute('data-af-pass-open', '');
		passDock.setAttribute('aria-haspopup', 'dialog');
		passDock.setAttribute('aria-expanded', 'false');
		passDock.setAttribute('aria-label', t('passport_open', 'Apri AF Pass'));
		passDock.innerHTML = '<span class="af-passdock__ring" aria-hidden="true"><i>AF</i></span>' +
			'<span class="af-passdock__meta"><b data-af-pass-points>0</b><small data-af-pass-level>Scout</small></span>';
		body.appendChild(passDock);

		// Nei grandi hero (palco 3D, scheda artista) e nel footer il dock si
		// nasconde per non coprire contenuti, form e note legali.
		var heroNear = false;
		var footerNear = false;
		function syncPassTuck() {
			passDock.classList.toggle('is-tucked', heroNear || footerNear);
		}
		if ('IntersectionObserver' in window) {
			var hero = qs('.af-stage, .af-artist__hero');
			if (hero) {
				new IntersectionObserver(function (entries) {
					heroNear = entries[0].isIntersecting && entries[0].intersectionRatio > 0.45;
					syncPassTuck();
				}, { threshold: [0, 0.45, 0.8] }).observe(hero);
			}
			var passFooter = qs('.af-footer');
			if (passFooter) {
				new IntersectionObserver(function (entries) {
					footerNear = entries[0].isIntersecting && entries[0].intersectionRatio > 0.12;
					syncPassTuck();
				}, { threshold: [0, 0.12, 0.4] }).observe(passFooter);
			}
		}

		// Su desktop il dock resta come anello compatto durante la lettura.
		var passMiniQuery = window.matchMedia('(min-width: 821px)');
		function syncPassMini() {
			passDock.classList.toggle('is-mini', passMiniQuery.matches && window.scrollY > 360);
		}
		window.addEventListener('scroll', syncPassMini, { passive: true });
		if (passMiniQuery.addEventListener) {
			passMiniQuery.addEventListener('change', syncPassMini);
		}
		syncPassMini();

		// Se il dock copre un controllo (accordion, campo, pulsante), si ritrae
		// per lasciarlo cliccabile. I link delle card non contano: l'immagine
		// resta comunque leggibile e il dock non sparisce su tutta la griglia.
		var passHitFrame = 0;
		function passCheckHit() {
			passHitFrame = 0;
			var r = passDock.getBoundingClientRect();
			if (r.width < 1 || passDock.classList.contains('is-tucked')) {
				passDock.classList.remove('is-blocking');
				return;
			}
			var points = [
				[r.left + r.width / 2, r.top + r.height / 2],
				[r.left + 10, r.top + 10],
				[r.right - 10, r.top + 10],
				[r.left + 10, r.bottom - 10],
				[r.right - 10, r.bottom - 10]
			];
			var hit = false;
			for (var i = 0; i < points.length && !hit; i++) {
				var stack = document.elementsFromPoint(points[i][0], points[i][1]);
				for (var j = 0; j < stack.length; j++) {
					var node = stack[j];
					if (passDock.contains(node)) continue;
					if (node.closest('button, summary, input, select, textarea, [role="button"]')) {
						hit = true;
						break;
					}
				}
			}
			passDock.classList.toggle('is-blocking', hit);
		}
		function passScheduleHit() {
			if (passHitFrame) return;
			passHitFrame = window.requestAnimationFrame(passCheckHit);
		}
		window.addEventListener('scroll', passScheduleHit, { passive: true });
		window.addEventListener('resize', passScheduleHit);
		passScheduleHit();

		passDrawer = doc.createElement('div');
		passDrawer.className = 'af-pass';
		passDrawer.hidden = true;
		passDrawer.innerHTML = '<div class="af-pass__backdrop" data-af-pass-close></div>' +
			'<aside class="af-pass__panel" role="dialog" aria-modal="true" aria-labelledby="af-pass-title">' +
			'<header class="af-pass__head"><div><span class="af-eyebrow">' + escapeHTML(t('passport_subtitle', 'Il tuo backstage pass')) + '</span><h2 id="af-pass-title">AF Pass</h2></div>' +
			'<button type="button" class="af-pass__close" data-af-pass-close aria-label="' + escapeHTML(t('close', 'Chiudi')) + '">&times;</button></header>' +
			'<div class="af-pass__body" data-af-pass-body></div>' +
			'</aside>';
		body.appendChild(passDrawer);

		passDock.addEventListener('click', function () { openPass(passDock); });

		passDrawer.addEventListener('keydown', function (event) {
			if (!passDrawer.classList.contains('is-open')) return;
			if (event.key === 'Escape') {
				event.preventDefault();
				closePass();
				return;
			}
			if (event.key !== 'Tab') return;
			var focusable = passFocusable();
			if (!focusable.length) return;
			var first = focusable[0];
			var last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		});

		passDrawer.addEventListener('click', function (event) {
			var target = event.target;
			if (target.closest('[data-af-pass-close]')) {
				closePass();
				return;
			}
			var remove = target.closest('[data-af-pass-remove]');
			if (remove) {
				var id = remove.getAttribute('data-af-pass-remove');
				if (pass.saved[id]) {
					delete pass.saved[id];
					passAfter();
					passSyncButtons();
					toast(t('passport_removed_toast', 'Data rimossa'));
				}
				return;
			}
			if (target.closest('[data-af-pass-share]')) {
				passShare();
				return;
			}
			if (target.closest('[data-af-pass-reset]')) {
				passArmed = true;
				passRender();
				return;
			}
			if (target.closest('[data-af-pass-reset-no]')) {
				passArmed = false;
				passRender();
				return;
			}
			if (target.closest('[data-af-pass-reset-yes]')) {
				passReset();
			}
		});

		passPaintDock();

		// I componenti React montano dopo il boot: riallinea gli stati appena
		// compaiono nuovi pulsanti "Salva data".
		if ('MutationObserver' in window) {
			var syncTimer = null;
			var observer = new MutationObserver(function () {
				if (syncTimer) return;
				syncTimer = window.setTimeout(function () {
					syncTimer = null;
					passSyncButtons();
				}, 120);
			});
			observer.observe(body, { childList: true, subtree: true });
		}
	}

	function passSyncButtons() {
		qsa('[data-af-save-date]').forEach(function (button) {
			var id = button.getAttribute('data-af-save-date');
			var saved = !!(id && pass.saved[id]);
			button.classList.toggle('is-saved', saved);
			button.setAttribute('aria-pressed', saved ? 'true' : 'false');
			var label = qs('[data-af-save-label]', button);
			if (label) {
				label.textContent = saved ? t('passport_saved_btn', 'Salvata') : t('passport_save', 'Salva data');
			}
		});
	}

	function passToggleDate(button) {
		var id = button.getAttribute('data-af-save-date');
		if (!id) return;

		if (pass.saved[id]) {
			delete pass.saved[id];
			passAfter();
			passSyncButtons();
			toast(t('passport_removed_toast', 'Data rimossa'));
			return;
		}

		pass.saved[id] = {
			id: id,
			date: button.getAttribute('data-date') || '',
			label: button.getAttribute('data-label') || '',
			artist: button.getAttribute('data-artist') || '',
			city: button.getAttribute('data-city') || '',
			url: button.getAttribute('data-url') || ''
		};
		passAward(25);
		passAfter();
		passSyncButtons();
		passMission('save');
		toast(t('passport_saved_toast', 'Data salvata · +25'), 'xp');
	}

	doc.addEventListener('click', function (event) {
		var button = event.target.closest && event.target.closest('[data-af-save-date]');
		if (!button) return;
		event.preventDefault();
		event.stopPropagation();
		passToggleDate(button);
	}, true);

	doc.addEventListener('click', function (event) {
		var link = event.target.closest && event.target.closest('a[href*="spotify"], .af-playlist__play, .af-spotify');
		if (!link) return;
		if (!pass.listener) {
			pass.listener = true;
			passAward(20);
			passAfter();
			toast(t('passport_listener', 'Orecchio fino') + ' · +20', 'xp');
		}
		passMission('listen');
	}, true);

	/* Biglietti dal palco 3D -------------------------------------------- */
	doc.addEventListener('af:ticket', function (event) {
		var detail = event.detail || {};
		if (!detail.code && !detail.id) return;

		var ticket = {
			id: detail.id || detail.code,
			code: detail.code || '',
			date: detail.date || '',
			label: detail.label || '',
			artist: detail.artist || '',
			city: detail.city || '',
			venue: detail.venue || '',
			qty: Number(detail.qty) || 1,
			sector: detail.sector || '',
			url: detail.url || '',
			soldOut: !!detail.soldOut,
			at: Date.now()
		};

		pass.tickets = (pass.tickets || []).filter(function (item) {
			return item && item.code !== ticket.code;
		});
		pass.tickets.unshift(ticket);
		if (pass.tickets.length > 12) pass.tickets.length = 12;

		passAward(ticket.soldOut ? 15 : 40);
		passAfter();
		passMission('ticket');

		toast(ticket.soldOut
			? t('passport_alert_saved', 'Avviso sold out salvato · +15')
			: t('passport_ticket_saved', 'Biglietto salvato · +40'), 'xp');
	});

	doc.addEventListener('af:toast', function (event) {
		var detail = event.detail || {};
		if (detail.message) toast(detail.message, detail.kind || '');
	});

	/* ==================================================================
	   Command palette — ricerca rapida universale
	   ================================================================== */
	var palette = null;
	var paletteInput = null;
	var paletteResults = null;
	var paletteItems = [];
	var paletteActive = 0;
	var paletteOpener = null;
	var paletteIndex = null;

	function paletteSources() {
		var urls = AF_DATA.urls || {};
		var artists = (AF_DATA.artists || []).map(function (artist) {
			return {
				kind: 'artist',
				title: artist.name,
				sub: [artist.genre, artist.role].filter(Boolean).join(' · '),
				url: artist.url,
				image: artist.thumb || artist.image || ''
			};
		});
		var concerts = (AF_DATA.concerts || []).filter(function (concert) {
			return !concert.isPast;
		}).map(function (concert) {
			return {
				kind: 'date',
				title: concert.artist,
				sub: [concert.dateLabel, concert.city, concert.venue].filter(Boolean).join(' · '),
				url: concert.url
			};
		});
		var news = (AF_DATA.news || []).map(function (item) {
			return {
				kind: 'news',
				title: item.title,
				sub: item.date || '',
				url: item.url
			};
		});
		var pages = [
			{ kind: 'page', title: t('home', 'Home'), sub: 'Artist First', url: AF_DATA.home || '/' },
			{ kind: 'page', title: t('artists', 'Artisti'), sub: t('discover', 'Scopri'), url: urls.artists },
			{ kind: 'page', title: t('concerts', 'Concerti'), sub: t('tickets', 'Biglietti'), url: urls.concerts },
			{ kind: 'page', title: t('news', 'News'), sub: t('read_more', 'Leggi'), url: urls.news },
			{ kind: 'page', title: t('send_music', 'Invia la tua musica'), sub: t('send_music_cta', 'Fatti sentire'), url: urls.sendMusic },
			{ kind: 'page', title: t('contact', 'Contatti'), sub: 'Artist First', url: urls.contact },
			{ kind: 'page', title: t('shop', 'Shop'), sub: 'Store', url: urls.shop }
		].filter(function (page) { return !!page.url; });

		return { artists: artists, concerts: concerts, news: news, pages: pages };
	}

	function paletteGroups(query) {
		var needle = (query || '').trim().toLowerCase();
		var sources = paletteIndex || paletteSources();
		var matches = function (item) {
			if (!needle) return true;
			return ((item.title || '') + ' ' + (item.sub || '')).toLowerCase().indexOf(needle) !== -1;
		};
		var groups = [];

		var artists = sources.artists.filter(matches).slice(0, needle ? 8 : 5);
		var concerts = sources.concerts.filter(matches).slice(0, needle ? 8 : 4);
		var news = sources.news.filter(matches).slice(0, needle ? 6 : 2);
		var pages = sources.pages.filter(matches).slice(0, needle ? 5 : 4);

		if (artists.length) groups.push({ label: t('palette_artists', 'Artisti'), items: artists });
		if (concerts.length) groups.push({ label: t('palette_dates', 'Date'), items: concerts });
		if (news.length) groups.push({ label: t('palette_news', 'News'), items: news });
		if (pages.length) groups.push({ label: t('palette_pages', 'Pagine'), items: pages });

		return groups;
	}

	function paletteRender() {
		if (!paletteResults) return;
		var groups = paletteGroups(paletteInput ? paletteInput.value : '');
		var html = '';
		var count = 0;

		groups.forEach(function (group) {
			html += '<div class="af-palette__group"><span class="af-palette__group-label">' + escapeHTML(group.label) + '</span>';
			group.items.forEach(function (item) {
				var active = count === paletteActive ? ' is-active' : '';
				html += '<a class="af-palette__item' + active + '" href="' + escapeHTML(item.url || '#') + '" data-af-palette-item role="option" aria-selected="' + (count === paletteActive ? 'true' : 'false') + '">';
				html += '<span class="af-palette__kind" aria-hidden="true">' + (item.kind === 'artist' ? '●' : item.kind === 'date' ? '▸' : item.kind === 'news' ? '✎' : '↗') + '</span>';
				html += '<span class="af-palette__text"><b>' + escapeHTML(item.title) + '</b>';
				if (item.sub) html += '<small>' + escapeHTML(item.sub) + '</small>';
				html += '</span><span class="af-palette__enter" aria-hidden="true">↵</span></a>';
				count++;
			});
			html += '</div>';
		});

		if (!count) {
			html = '<p class="af-palette__empty">' + escapeHTML(t('palette_empty', 'Nessun risultato.')) + '</p>';
		}

		paletteResults.innerHTML = html;
		paletteItems = qsa('[data-af-palette-item]', paletteResults);
		if (paletteActive >= paletteItems.length) paletteActive = Math.max(0, paletteItems.length - 1);
		palettePaintActive();
	}

	function palettePaintActive() {
		paletteItems.forEach(function (item, index) {
			item.classList.toggle('is-active', index === paletteActive);
			item.setAttribute('aria-selected', index === paletteActive ? 'true' : 'false');
		});
		var active = paletteItems[paletteActive];
		if (active && active.scrollIntoView) {
			active.scrollIntoView({ block: 'nearest' });
		}
	}

	function openPalette(trigger) {
		if (!palette) return;
		paletteOpener = trigger || null;
		palette.hidden = false;
		body.classList.add('af-palette-open');
		paletteActive = 0;
		if (paletteInput) paletteInput.value = '';
		paletteRender();
		window.requestAnimationFrame(function () { palette.classList.add('is-open'); });
		if (paletteInput) window.setTimeout(function () { paletteInput.focus(); }, 40);
	}

	function closePalette() {
		if (!palette || palette.hidden) return;
		palette.classList.remove('is-open');
		body.classList.remove('af-palette-open');
		window.setTimeout(function () {
			if (!palette.classList.contains('is-open')) palette.hidden = true;
		}, 260);
		if (paletteOpener && paletteOpener.focus) paletteOpener.focus();
	}

	function buildPalette() {
		palette = doc.createElement('div');
		palette.className = 'af-palette';
		palette.hidden = true;
		palette.innerHTML = '<div class="af-palette__backdrop" data-af-palette-close></div>' +
			'<div class="af-palette__panel" role="dialog" aria-modal="true" aria-label="' + escapeHTML(t('palette_open', 'Apri ricerca rapida')) + '">' +
			'<div class="af-palette__search"><span class="af-palette__icon" aria-hidden="true">⌕</span>' +
			'<input type="search" autocomplete="off" spellcheck="false" placeholder="' + escapeHTML(t('palette_placeholder', 'Cerca artisti, date, news…')) + '" aria-label="' + escapeHTML(t('palette_placeholder', 'Cerca artisti, date, news…')) + '">' +
			'<button type="button" class="af-palette__esc" data-af-palette-close>ESC</button></div>' +
			'<div class="af-palette__results" data-af-palette-results role="listbox"></div>' +
			'<div class="af-palette__foot"><span>' + escapeHTML(t('palette_hint', 'Scrivi per cercare · ↑↓ per navigare · ↵ per aprire')) + '</span>' +
			'<span class="af-palette__kbd" aria-hidden="true"><i>⌘</i><i>K</i></span></div>' +
			'</div>';
		body.appendChild(palette);

		paletteInput = qs('input', palette);
		paletteResults = qs('[data-af-palette-results]', palette);

		palette.addEventListener('click', function (event) {
			if (event.target.closest('[data-af-palette-close]')) {
				closePalette();
			}
		});

		paletteInput.addEventListener('input', function () {
			paletteActive = 0;
			paletteRender();
		});

		paletteInput.addEventListener('keydown', function (event) {
			if (event.key === 'ArrowDown') {
				event.preventDefault();
				if (!paletteItems.length) return;
				paletteActive = (paletteActive + 1) % paletteItems.length;
				palettePaintActive();
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				if (!paletteItems.length) return;
				paletteActive = (paletteActive - 1 + paletteItems.length) % paletteItems.length;
				palettePaintActive();
			} else if (event.key === 'Enter') {
				var active = paletteItems[paletteActive];
				if (active) {
					event.preventDefault();
					window.location.href = active.getAttribute('href');
				}
			} else if (event.key === 'Escape') {
				event.preventDefault();
				closePalette();
			}
		});

		qsa('[data-af-palette-open]').forEach(function (button) {
			button.addEventListener('click', function () { openPalette(button); });
		});

		doc.addEventListener('keydown', function (event) {
			var key = (event.key || '').toLowerCase();
			if ((event.metaKey || event.ctrlKey) && key === 'k') {
				event.preventDefault();
				if (palette.hidden) openPalette(qs('[data-af-palette-open]'));
				else closePalette();
				return;
			}
			if (key === '/' && !isTyping(event.target) && palette.hidden) {
				event.preventDefault();
				openPalette(qs('[data-af-palette-open]'));
			}
		});
	}

	/* ==================================================================
	   Live wire — rotazione e aggiornamento automatico
	   ================================================================== */
	function liveWireMount() {
		var bar = qs('[data-af-livewire]');
		if (!bar) return;

		var track = qs('[data-af-livewire-track]', bar);
		if (!track) return;

		var items = qsa('.af-livewire__item', track);
		var index = 0;
		var timer = null;
		var paused = false;
		var updatedAt = Math.floor(Date.now() / 1000);
		var timeNode = qs('[data-af-livewire-time]', bar);

		function paint() {
			items.forEach(function (item, position) {
				item.classList.toggle('is-active', position === index);
				item.setAttribute('aria-hidden', position === index ? 'false' : 'true');
				item.setAttribute('tabindex', position === index ? '0' : '-1');
			});
		}

		function stopTimer() {
			if (timer) {
				window.clearInterval(timer);
				timer = null;
			}
		}

		function startTimer() {
			stopTimer();
			if (reducedMotion || items.length < 2) return;
			timer = window.setInterval(function () {
				if (paused || doc.hidden) return;
				index = (index + 1) % items.length;
				paint();
			}, 4800);
		}

		function paintTime() {
			if (!timeNode) return;
			var minutes = Math.max(0, Math.round((Math.floor(Date.now() / 1000) - updatedAt) / 60));
			var label;
			if (minutes < 1) label = t('livewire_updated', 'Aggiornato ora');
			else if (minutes < 60) label = isEnglish ? 'Updated ' + minutes + 'm ago' : 'Aggiornato ' + minutes + 'm fa';
			else label = isEnglish ? 'Updated ' + Math.round(minutes / 60) + 'h ago' : 'Aggiornato ' + Math.round(minutes / 60) + 'h fa';
			timeNode.textContent = label;
		}

		function buildItems(data) {
			if (!data || !Array.isArray(data.items) || !data.items.length) return false;
			var html = '';
			data.items.forEach(function (item) {
				var external = item.source === 'instagram' ? ' target="_blank" rel="noopener noreferrer"' : '';
				html += '<a class="af-livewire__item" href="' + escapeHTML(item.url || '#') + '"' + external + ' data-source="' + escapeHTML(item.source || '') + '">';
				html += '<span class="af-livewire__source">' + escapeHTML(item.label || '') + '</span>';
				html += '<span class="af-livewire__text">' + escapeHTML(item.text || '') + '</span>';
				if (item.meta) html += '<span class="af-livewire__meta">' + escapeHTML(item.meta) + '</span>';
				html += '</a>';
			});
			track.innerHTML = html;
			items = qsa('.af-livewire__item', track);
			index = 0;
			paint();
			startTimer();
			return true;
		}

		bar.addEventListener('mouseenter', function () { paused = true; });
		bar.addEventListener('mouseleave', function () { paused = false; });
		bar.addEventListener('focusin', function () { paused = true; });
		bar.addEventListener('focusout', function () { paused = false; });

		doc.addEventListener('visibilitychange', function () {
			if (doc.hidden) stopTimer();
			else startTimer();
		});

		paint();
		startTimer();
		paintTime();
		window.setInterval(paintTime, 30000);
		window.setInterval(function () {
			if (!AF_DATA.live || doc.hidden) return;
			window.fetch(AF_DATA.live, { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
				.then(function (response) { return response.ok ? response.json() : null; })
				.then(function (data) {
					if (!data || !data.items) return;
					updatedAt = Number(data.updated) || Math.floor(Date.now() / 1000);
					buildItems(data);
					paintTime();
				})
				.catch(function () { /* noop */ });
		}, 75000);
	}

	/* ==================================================================
	   Split text — reveal parola per parola
	   ================================================================== */
	function splitHeadings() {
		var nodes = qsa('[data-af-split]');
		if (!nodes.length) return;

		if (reducedMotion) {
			nodes.forEach(function (node) { node.classList.add('is-split-in'); });
			return;
		}

		var observer = null;
		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					entry.target.classList.add('is-split-in');
					observer.unobserve(entry.target);
				});
			}, { threshold: 0.15 });
		}

		nodes.forEach(function (node) {
			if (node.dataset.afSplitDone) return;
			node.dataset.afSplitDone = '1';

			var text = node.textContent || '';
			var words = text.split(/(\s+)/);
			var wordIndex = 0;
			node.textContent = '';

			words.forEach(function (word) {
				if (!word) return;
				if (/^\s+$/.test(word)) {
					node.appendChild(doc.createTextNode(' '));
					return;
				}
				var outer = doc.createElement('span');
				outer.className = 'af-split__word';
				var inner = doc.createElement('span');
				inner.className = 'af-split__inner';
				inner.textContent = word;
				inner.style.setProperty('--af-i', String(Math.min(wordIndex, 14)));
				outer.appendChild(inner);
				node.appendChild(outer);
				wordIndex++;
			});

			node.classList.add('af-split');
			if (observer) observer.observe(node);
			else node.classList.add('is-split-in');
		});
	}

	/* ==================================================================
	   Page transition overlay
	   ================================================================== */
	function pageTransitions() {
		if (reducedMotion) return;

		var fade = doc.createElement('div');
		fade.className = 'af-pagefade';
		fade.setAttribute('aria-hidden', 'true');
		body.appendChild(fade);

		window.addEventListener('pageshow', function () {
			fade.classList.remove('is-active');
			body.classList.remove('af-leaving');
		});

		doc.addEventListener('click', function (event) {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			var link = event.target.closest && event.target.closest('a[href]');
			if (!link) return;
			if (link.target === '_blank' || link.hasAttribute('download')) return;
			var href = link.getAttribute('href');
			if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;

			var url;
			try {
				url = new URL(href, window.location.href);
			} catch (error) {
				return;
			}
			if (url.origin !== window.location.origin) return;
			if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

			event.preventDefault();
			body.classList.add('af-leaving');
			fade.classList.add('is-active');
			window.setTimeout(function () {
				window.location.href = url.href;
			}, 260);
		});
	}

	/* Escape chiude i layer superiori ------------------------------------ */
	doc.addEventListener('keydown', function (event) {
		if (event.key !== 'Escape') return;
		if (palette && !palette.hidden) closePalette();
		if (passDrawer && passDrawer.hidden === false) closePass();
	});

	/* Scheda artista — dossier ------------------------------------------- */
	function initArtistDossier() {
		var root = qs('.af-artist--dossier');
		if (!root) return;

		/* Miniatura YouTube mancante: passa alla risoluzione inferiore. */
		qsa('.af-yt img', root).forEach(function (image) {
			image.addEventListener('error', function () {
				if ('1' === image.getAttribute('data-fallback')) {
					image.classList.add('is-missing');
					return;
				}
				image.setAttribute('data-fallback', '1');
				image.src = image.src.replace(/maxresdefault\.jpg/, 'hqdefault.jpg');
			});
		});

		var screen = qs('.af-yt__screen', root);
		var playVideo = function (id, title, item) {
			if (!screen || !id) return;
			var iframe = qs('iframe', screen);
			if (!iframe) {
				screen.innerHTML = '';
				iframe = doc.createElement('iframe');
				iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('loading', 'lazy');
				screen.appendChild(iframe);
			}
			iframe.title = title || 'YouTube';
			iframe.src = 'https://www.youtube.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
			qsa('.af-yt__item', root).forEach(function (node) {
				node.classList.remove('is-active');
			});
			if (item) {
				item.classList.add('is-active');
				if (!reducedMotion && screen.scrollIntoView) {
					screen.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}
		};

		root.addEventListener('click', function (event) {
			var trigger = event.target.closest && event.target.closest('[data-af-yt]');
			if (trigger) {
				event.preventDefault();
				playVideo(trigger.getAttribute('data-af-yt'), trigger.getAttribute('data-title'), trigger.closest('.af-yt__item'));
				return;
			}

			var listButton = event.target.closest && event.target.closest('[data-af-ytlist]');
			if (listButton) {
				event.preventDefault();
				var channel = listButton.closest('.af-yt__channel');
				var frame = channel ? qs('[data-af-ytlist-frame]', channel) : null;
				if (!frame || qs('iframe', frame)) return;
				var iframe = doc.createElement('iframe');
				iframe.src = listButton.getAttribute('data-af-ytlist') + (listButton.getAttribute('data-af-ytlist').indexOf('?') > -1 ? '&' : '?') + 'autoplay=1&rel=0';
				iframe.title = listButton.textContent.trim();
				iframe.setAttribute('loading', 'lazy');
				iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
				iframe.setAttribute('allowfullscreen', '');
				frame.appendChild(iframe);
				frame.hidden = false;
				listButton.disabled = true;
				listButton.textContent = listButton.getAttribute('data-loading') || 'Loading…';
				iframe.addEventListener('load', function () {
					listButton.textContent = listButton.getAttribute('data-loaded') || 'Channel loaded';
				});
				if (!reducedMotion && frame.scrollIntoView) {
					frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}
		});

		/* Nav sticky con scrollspy. */
		var artistNav = qs('[data-af-artist-nav]', root);
		if (artistNav) {
			var links = qsa('.af-artist-nav__links a', artistNav);
			var linksBar = qs('.af-artist-nav__links', artistNav);
			var sections = links.map(function (link) {
				var hash = link.getAttribute('href') || '';
				return hash.charAt(0) === '#' ? doc.getElementById(hash.slice(1)) : null;
			}).filter(Boolean);

			var setActive = function (section) {
				links.forEach(function (link) {
					var isActive = section && link.getAttribute('href') === '#' + section.id;
					link.classList.toggle('is-active', !!isActive);
					if (isActive && linksBar) {
						var left = link.offsetLeft - linksBar.clientWidth / 2 + link.offsetWidth / 2;
						if (Math.abs(linksBar.scrollLeft - left) > 40) {
							linksBar.scrollTo({ left: Math.max(0, left), behavior: reducedMotion ? 'auto' : 'smooth' });
						}
					}
				});
			};

			var currentSection = null;
			var updateNav = function () {
				if (!sections.length) return;
				var offset = (header ? header.offsetHeight : 0) + artistNav.offsetHeight + 120;
				var found = sections[0];
				sections.forEach(function (section) {
					if (section.getBoundingClientRect().top <= offset) found = section;
				});
				if (window.innerHeight + window.scrollY >= doc.documentElement.scrollHeight - 6) {
					found = sections[sections.length - 1];
				}
				if (found !== currentSection) {
					currentSection = found;
					setActive(found);
				}
			};

			var navTick = false;
			var onNavScroll = function () {
				if (navTick) return;
				navTick = true;
				window.requestAnimationFrame(function () {
					navTick = false;
					updateNav();
				});
			};

			window.addEventListener('scroll', onNavScroll, { passive: true });
			window.addEventListener('resize', onNavScroll);
			links.forEach(function (link) {
				link.addEventListener('click', function () {
					var target = doc.getElementById((link.getAttribute('href') || '').slice(1));
					if (target) setActive(target);
				});
			});
			updateNav();
		}

		/* Condivisione nativa con fallback copia link. */
		var shareFallback = function (url) {
			var layer = doc.createElement('div');
			layer.className = 'af-share-fallback';
			layer.innerHTML = '<div class="af-share-fallback__box" role="dialog" aria-modal="true" aria-label="Share">' +
				'<label>' + escapeHTML(t('share_copy', 'Copia il link')) + '</label>' +
				'<input type="text" readonly value="' + escapeHTML(url) + '">' +
				'<div class="af-share-fallback__actions"><button type="button" class="af-btn af-btn--dark">' + escapeHTML(t('ok', 'OK')) + '</button></div>' +
				'</div>';
			body.appendChild(layer);
			var input = qs('input', layer);
			var close = function () {
				if (layer.parentNode) layer.parentNode.removeChild(layer);
				doc.removeEventListener('keydown', onKey);
			};
			var onKey = function (event) {
				if ('Escape' === event.key) close();
			};
			layer.addEventListener('click', function (event) {
				if (event.target === layer || event.target.closest('button')) close();
			});
			doc.addEventListener('keydown', onKey);
			if (input) {
				input.focus();
				input.select();
			}
		};

		qsa('[data-af-share]', root).forEach(function (button) {
			button.addEventListener('click', function () {
				var url = button.getAttribute('data-url') || window.location.href;
				var title = button.getAttribute('data-title') || doc.title;
				var done = button.getAttribute('data-copied') || t('share_copied', 'Link copiato');
				var copied = function () {
					button.classList.add('is-copied');
					toast(done);
					window.setTimeout(function () {
						button.classList.remove('is-copied');
					}, 2000);
				};
				var copy = function () {
					if (navigator.clipboard && window.isSecureContext) {
						navigator.clipboard.writeText(url).then(copied).catch(function () {
							shareFallback(url);
						});
					} else {
						shareFallback(url);
					}
				};

				if (navigator.share) {
					navigator.share({ title: title, url: url }).catch(function (error) {
						if (error && 'AbortError' === error.name) return;
						copy();
					});
				} else {
					copy();
				}
			});
		});
	}

	/* Instagram: filtri e modale embed ----------------------------------- */
	function initInstagram() {
		var modal = qs('[data-af-igmodal]');
		var opener = null;

		qsa('.af-ig-card__media img[data-fallback]').forEach(function (img) {
			var fallback = img.getAttribute('data-fallback');
			var swap = function () {
				if (fallback && img.src !== fallback) {
					img.src = fallback;
					img.classList.add('is-fallback');
				}
			};
			if (img.complete && !img.naturalWidth) swap();
			img.addEventListener('error', swap);
		});

		function closeModal() {
			if (!modal || modal.hidden) return;
			modal.classList.remove('is-open');
			modal.setAttribute('aria-hidden', 'true');
			body.classList.remove('af-igmodal-open');
			var frame = qs('[data-af-igmodal-frame]', modal);
			window.setTimeout(function () {
				if (frame) frame.src = 'about:blank';
				modal.hidden = true;
				if (opener) {
					opener.focus();
					opener = null;
				}
			}, 280);
		}

		function openModal(button) {
			if (!modal) return;
			var shortcode = button.getAttribute('data-ig-shortcode');
			if (!shortcode) return;

			opener = button;
			var frame = qs('[data-af-igmodal-frame]', modal);
			var loader = qs('[data-af-igmodal-loader]', modal);
			var link = qs('[data-af-igmodal-link]', modal);

			if (link) link.href = button.getAttribute('data-ig-url') || link.href;
			if (loader) loader.hidden = false;
			if (frame) {
				frame.onload = function () {
					if (loader) loader.hidden = true;
				};
				frame.src = 'https://www.instagram.com/p/' + encodeURIComponent(shortcode) + '/embed/captioned/';
				window.setTimeout(function () {
					if (loader) loader.hidden = true;
				}, 6000);
			}

			modal.hidden = false;
			modal.setAttribute('aria-hidden', 'false');
			body.classList.add('af-igmodal-open');
			window.requestAnimationFrame(function () {
				modal.classList.add('is-open');
			});

			var closeBtn = qs('.af-igmodal__close', modal);
			if (closeBtn) closeBtn.focus();
		}

		if (modal) {
			qsa('[data-af-ig-open]').forEach(function (button) {
				button.addEventListener('click', function (event) {
					event.preventDefault();
					openModal(button);
				});
			});

			qsa('[data-af-ig-close]', modal).forEach(function (button) {
				button.addEventListener('click', closeModal);
			});

			doc.addEventListener('keydown', function (event) {
				if (modal.hidden) return;

				if (event.key === 'Escape') {
					event.preventDefault();
					closeModal();
					return;
				}

				if (event.key !== 'Tab') return;

				var focusables = qsa('button, a[href], iframe', modal).filter(function (node) {
					return !node.disabled && node.getClientRects().length > 0;
				});
				if (!focusables.length) return;

				var first = focusables[0];
				var last = focusables[focusables.length - 1];

				if (event.shiftKey && doc.activeElement === first) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && doc.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			});
		}

		qsa('[data-af-ig-filterbar]').forEach(function (bar) {
			var scope = bar.closest('.af-igpage') || doc;
			var feed = qs('[data-af-ig-feed]', scope);
			var empty = qs('[data-af-ig-empty]', scope);
			var countNode = qs('[data-af-ig-count]', scope);
			var buttons = qsa('[data-ig-filter]', bar);
			var cards = qsa('.af-ig-card', feed).filter(function (card) {
				return !card.classList.contains('af-ig-cta');
			});
			if (!feed || !cards.length) return;

			bar.addEventListener('click', function (event) {
				var button = event.target.closest('[data-ig-filter]');
				if (!button) return;

				var filter = button.getAttribute('data-ig-filter');
				var visible = 0;

				buttons.forEach(function (item) {
					var active = item === button;
					item.classList.toggle('is-active', active);
					item.setAttribute('aria-pressed', active ? 'true' : 'false');
				});

				cards.forEach(function (card) {
					var tags = (card.getAttribute('data-ig-tags') || '').split(/\s+/);
					var show = 'all' === filter || tags.indexOf(filter) !== -1;
					card.hidden = !show;
					if (show) visible++;
				});

				feed.classList.toggle('is-filtered', 'all' !== filter);

				if (empty) empty.hidden = visible > 0;
				if (countNode) {
					countNode.textContent = visible + ' ' + (isEnglish ? (visible === 1 ? 'post' : 'posts') : (visible === 1 ? 'contenuto' : 'contenuti'));
				}
			});
		});
	}

	/* Calendario concerti: filtri progressivi --------------------------- */
	function initCalendar() {
		var root = qs('[data-af-calendar]');
		if (!root) return;

		var groupsWrap = qs('[data-af-cal-groups]', root);
		var alphaWrap = qs('[data-af-cal-alpha]', root);
		var rows = qsa('[data-af-concert]', root);
		var groups = qsa('[data-af-cal-group]', root);
		var chipNodes = qsa('[data-af-cal-artist]', root);
		var qInput = qs('[data-af-cal-q]', root);
		var citySel = qs('[data-af-cal-city]', root);
		var monthSel = qs('[data-af-cal-month]', root);
		var tourSel = qs('[data-af-cal-tour]', root);
		var pastBtn = qs('[data-af-cal-past]', root);
		var orderBtn = qs('[data-af-cal-order]', root);
		var orderLabel = qs('[data-af-cal-order-label]', root);
		var resetNodes = qsa('[data-af-cal-reset]', root);
		var countNode = qs('[data-af-cal-count]', root);
		var countLabel = qs('[data-af-cal-count-label]', root);
		var extraNode = qs('[data-af-cal-extra]', root);
		var moreWrap = qs('[data-af-cal-more]', root);
		var moreBtn = qs('[data-af-cal-more-btn]', root);
		var remaining = qs('[data-af-cal-remaining]', root);
		var empty = qs('[data-af-cal-empty]', root);
		var strings = (window.AF_DATA && AF_DATA.strings) || {};
		var PAGE = 16;

		if (!rows.length || !groupsWrap || !alphaWrap) return;

		var chips = chipNodes.map(function (button) {
			return {
				node: button,
				id: button.getAttribute('data-af-cal-artist') || '',
				name: (button.textContent || '').replace(/\d+$/, '').trim()
			};
		});

		var originals = rows.map(function (row) {
			return { row: row, parent: row.parentNode };
		});

		var state = {
			artist: '',
			city: '',
			month: '',
			tour: '',
			q: '',
			past: false,
			order: 'date',
			visible: PAGE
		};

		var params = new URLSearchParams(window.location.search);
		state.city = params.get('citta') || '';
		state.month = params.get('mese') || '';
		state.tour = params.get('tour') || '';
		state.q = params.get('q') || '';
		state.past = params.get('passati') === '1';
		state.order = params.get('ordine') === 'alfa' ? 'alpha' : 'date';
		var initialArtist = params.get('artista') || '';
		if (initialArtist) {
			var match = chips.filter(function (chip) { return chip.id && chip.id === initialArtist; })[0];
			if (!match) {
				match = chips.filter(function (chip) { return chip.name && chip.name.toLowerCase() === initialArtist.toLowerCase(); })[0];
			}
			state.artist = match ? match.id : '';
		}

		if (qInput) qInput.value = state.q;
		if (citySel) citySel.value = state.city;
		if (monthSel) monthSel.value = state.month;
		if (tourSel) tourSel.value = state.tour;
		if (pastBtn) pastBtn.classList.toggle('is-active', state.past);
		root.classList.toggle('is-showing-past', state.past);

		function artistName() {
			var found = chips.filter(function (chip) { return chip.id === state.artist && chip.id; })[0];
			return found ? found.name : '';
		}

		function restore() {
			originals.forEach(function (item) {
				item.parent.appendChild(item.row);
			});
		}

		function matches() {
			var needle = state.q.trim().toLowerCase();
			return rows.filter(function (row) {
				if ('1' === row.getAttribute('data-past') && !state.past) return false;
				if (state.artist && row.getAttribute('data-artist-id') !== state.artist) return false;
				if (state.city && row.getAttribute('data-city') !== state.city) return false;
				if (state.month && row.getAttribute('data-month') !== state.month) return false;
				if (state.tour && row.getAttribute('data-tour') !== state.tour) return false;
				if (needle && (row.getAttribute('data-search') || '').indexOf(needle) === -1) return false;
				return true;
			});
		}

		function syncURL() {
			var next = new URLSearchParams(window.location.search);
			var entries = {
				artista: state.artist ? artistName() : '',
				citta: state.city,
				mese: state.month,
				tour: state.tour,
				q: state.q,
				passati: state.past ? '1' : '',
				ordine: state.order === 'alpha' ? 'alfa' : ''
			};
			Object.keys(entries).forEach(function (key) {
				if (entries[key]) next.set(key, entries[key]);
				else next.delete(key);
			});
			var query = next.toString();
			var url = window.location.pathname + (query ? '?' + query : '') + window.location.hash;
			window.history.replaceState({}, '', url);
		}

		function apply() {
			restore();

			var list = matches();
			if (state.order === 'alpha') {
				list = list.slice().sort(function (a, b) {
					return String(a.getAttribute('data-name')).localeCompare(String(b.getAttribute('data-name'))) ||
						String(a.getAttribute('data-date')).localeCompare(String(b.getAttribute('data-date')));
				});
			}

			var visibleIds = {};
			list.slice(0, state.visible).forEach(function (row) { visibleIds[row.getAttribute('data-id')] = true; });

			rows.forEach(function (row) {
				row.classList.remove('is-filtered');
				row.removeAttribute('data-later');
			});

			var matchedIds = {};
			list.forEach(function (row) { matchedIds[row.getAttribute('data-id')] = true; });

			rows.forEach(function (row) {
				var id = row.getAttribute('data-id');
				if (!matchedIds[id]) {
					row.classList.add('is-filtered');
					return;
				}
				if (!visibleIds[id]) row.setAttribute('data-later', '1');
			});

			if (state.order === 'alpha') {
				root.classList.add('is-alpha');
				alphaWrap.hidden = false;
				list.forEach(function (row) { alphaWrap.appendChild(row); });
			} else {
				root.classList.remove('is-alpha');
				alphaWrap.hidden = true;
				alphaWrap.innerHTML = '';
			}

			groups.forEach(function (group) {
				var has = qsa('[data-af-concert]', group).some(function (row) {
					return matchedIds[row.getAttribute('data-id')] && visibleIds[row.getAttribute('data-id')];
				});
				group.classList.toggle('is-empty', !has);
			});

			if (countNode) countNode.textContent = String(list.length);
			if (countLabel) countLabel.textContent = list.length === 1 ? (strings.date || 'data') : (strings.dates_plural || 'date');

			if (extraNode) {
				var extra = [];
				if (state.past) extra.push(strings.including_past || 'incluse date passate');
				if (state.artist && artistName()) extra.push(artistName());
				if (state.tour) extra.push(state.tour);
				extraNode.textContent = extra.length ? ' · ' + extra.join(' · ') : '';
			}

			if (moreWrap && moreBtn && remaining) {
				var left = list.length - state.visible;
				moreWrap.hidden = left <= 0;
				if (left > 0) {
					remaining.textContent = left + ' ' + (strings.dates_remaining || 'date ancora');
				}
			}

			if (empty) empty.hidden = list.length > 0;

			if (orderBtn) {
				orderBtn.classList.toggle('is-active', state.order === 'alpha');
				if (orderLabel) orderLabel.textContent = state.order === 'alpha' ? (strings.order_alpha || 'A–Z') : (strings.order_date || 'Data');
			}
			if (pastBtn) {
				pastBtn.classList.toggle('is-active', state.past);
				pastBtn.textContent = state.past ? (strings.hide_past || 'Nascondi date passate') : (strings.show_past || 'Mostra date passate');
			}

			chips.forEach(function (chip) {
				chip.node.classList.toggle('is-active', (chip.id || '') === (state.artist || ''));
				chip.node.setAttribute('aria-pressed', (chip.id || '') === (state.artist || '') ? 'true' : 'false');
			});

			var dirty = !!(state.artist || state.city || state.month || state.tour || state.q || state.past || state.order === 'alpha');
			resetNodes.forEach(function (node) { node.disabled = !dirty; });
			root.classList.toggle('is-showing-past', state.past);

			syncURL();
		}

		function reset() {
			state.artist = '';
			state.city = '';
			state.month = '';
			state.tour = '';
			state.q = '';
			state.past = false;
			state.order = 'date';
			state.visible = PAGE;
			if (qInput) qInput.value = '';
			if (citySel) citySel.value = '';
			if (monthSel) monthSel.value = '';
			if (tourSel) tourSel.value = '';
			apply();
		}

		var timer = null;
		if (qInput) {
			qInput.addEventListener('input', function () {
				if (timer) window.clearTimeout(timer);
				timer = window.setTimeout(function () {
					state.q = qInput.value;
					state.visible = PAGE;
					apply();
				}, 120);
			});
		}
		if (citySel) citySel.addEventListener('change', function () { state.city = citySel.value; state.visible = PAGE; apply(); });
		if (monthSel) monthSel.addEventListener('change', function () { state.month = monthSel.value; state.visible = PAGE; apply(); });
		if (tourSel) tourSel.addEventListener('change', function () { state.tour = tourSel.value; state.visible = PAGE; apply(); });
		if (pastBtn) pastBtn.addEventListener('click', function () { state.past = !state.past; state.visible = PAGE; apply(); });
		if (orderBtn) orderBtn.addEventListener('click', function () { state.order = state.order === 'alpha' ? 'date' : 'alpha'; state.visible = PAGE; apply(); });
		if (moreBtn) moreBtn.addEventListener('click', function () { state.visible += PAGE; apply(); });
		resetNodes.forEach(function (node) { node.addEventListener('click', reset); });
		chips.forEach(function (chip) {
			chip.node.addEventListener('click', function () {
				state.artist = chip.id || '';
				state.visible = PAGE;
				apply();
			});
		});

		apply();
	}

	/* Roster artisti: filtri, ordinamento e vista ------------------------- */
	function initRoster() {
		var root = qs('[data-af-roster]');
		if (!root) return;

		var grid = qs('[data-af-roster-grid]', root);
		var cards = qsa('[data-roster-card]', grid);
		var qInput = qs('[data-af-roster-q]', root);
		var genreSel = qs('[data-af-roster-genre]', root);
		var sortSel = qs('[data-af-roster-sort]', root);
		var tourBtn = qs('[data-af-roster-tour]', root);
		var viewBtns = qsa('[data-af-roster-view]', root);
		var countNode = qs('[data-af-roster-count]', root);
		var countLabel = qs('[data-af-roster-count-label]', root);
		var empty = qs('[data-af-roster-empty]', root);
		var resetNodes = qsa('[data-af-roster-reset]', root);
		var strings = (window.AF_DATA && AF_DATA.strings) || {};

		if (!cards.length) return;

		var state = { q: '', genre: '', tour: false, sort: 'az', view: 'grid' };

		var params = new URLSearchParams(window.location.search);
		state.q = params.get('q') || '';
		state.genre = params.get('genere') || '';
		state.tour = params.get('tour') === '1';
		state.sort = params.get('ordine') || 'az';
		state.view = params.get('vista') === 'lista' ? 'list' : 'grid';

		if (qInput) qInput.value = state.q;
		if (genreSel) genreSel.value = state.genre;
		if (sortSel) sortSel.value = state.sort;

		function syncURL() {
			var next = new URLSearchParams(window.location.search);
			var entries = {
				q: state.q,
				genere: state.genre,
				tour: state.tour ? '1' : '',
				ordine: state.sort === 'az' ? '' : state.sort,
				vista: state.view === 'list' ? 'lista' : ''
			};
			Object.keys(entries).forEach(function (key) {
				if (entries[key]) next.set(key, entries[key]);
				else next.delete(key);
			});
			var query = next.toString();
			window.history.replaceState({}, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
		}

		function apply() {
			var needle = state.q.trim().toLowerCase();
			var shown = cards.filter(function (card) {
				if (state.genre && card.getAttribute('data-genre') !== state.genre) return false;
				if (state.tour && card.getAttribute('data-tour') !== '1') return false;
				if (needle && (card.getAttribute('data-search') || '').indexOf(needle) === -1) return false;
				return true;
			});

			var sorted = shown.slice();
			if (state.sort === 'dates') {
				sorted.sort(function (a, b) {
					return Number(b.getAttribute('data-dates')) - Number(a.getAttribute('data-dates')) ||
						String(a.getAttribute('data-name')).localeCompare(String(b.getAttribute('data-name')));
				});
			} else if (state.sort === 'next') {
				sorted.sort(function (a, b) {
					return String(a.getAttribute('data-next')).localeCompare(String(b.getAttribute('data-next'))) ||
						String(a.getAttribute('data-name')).localeCompare(String(b.getAttribute('data-name')));
				});
			} else {
				sorted.sort(function (a, b) {
					return String(a.getAttribute('data-name')).localeCompare(String(b.getAttribute('data-name')));
				});
			}

			var keep = {};
			sorted.forEach(function (card) { keep[card.getAttribute('data-name')] = true; });

			cards.forEach(function (card) {
				card.hidden = !keep[card.getAttribute('data-name')];
			});
			sorted.forEach(function (card) { grid.appendChild(card); });

			grid.classList.toggle('is-list', state.view === 'list');
			viewBtns.forEach(function (button) {
				var active = button.getAttribute('data-af-roster-view') === state.view;
				button.classList.toggle('is-active', active);
				button.setAttribute('aria-pressed', active ? 'true' : 'false');
			});
			if (tourBtn) tourBtn.classList.toggle('is-active', state.tour);

			if (countNode) countNode.textContent = String(sorted.length);
			if (countLabel) countLabel.textContent = sorted.length === 1 ? (strings.artist || 'artista') : (strings.artists_plural || 'artisti');
			if (empty) empty.hidden = sorted.length > 0;

			var dirty = !!(state.q || state.genre || state.tour || state.sort !== 'az' || state.view === 'list');
			resetNodes.forEach(function (node) { node.disabled = !dirty; });

			syncURL();
		}

		var timer = null;
		if (qInput) {
			qInput.addEventListener('input', function () {
				if (timer) window.clearTimeout(timer);
				timer = window.setTimeout(function () { state.q = qInput.value; apply(); }, 120);
			});
		}
		if (genreSel) genreSel.addEventListener('change', function () { state.genre = genreSel.value; apply(); });
		if (sortSel) sortSel.addEventListener('change', function () { state.sort = sortSel.value; apply(); });
		if (tourBtn) tourBtn.addEventListener('click', function () { state.tour = !state.tour; apply(); });
		viewBtns.forEach(function (button) {
			button.addEventListener('click', function () {
				state.view = button.getAttribute('data-af-roster-view') === 'list' ? 'list' : 'grid';
				apply();
			});
		});
		resetNodes.forEach(function (node) {
			node.addEventListener('click', function () {
				state.q = '';
				state.genre = '';
				state.tour = false;
				state.sort = 'az';
				state.view = 'grid';
				if (qInput) qInput.value = '';
				if (genreSel) genreSel.value = '';
				if (sortSel) sortSel.value = 'az';
				apply();
			});
		});

		apply();
	}

	/* I blocchi React montano in idle: riallinea motion e reveal. */
	document.addEventListener('af:mount', function () {
		bindMotion();
		initReveals();
		paintParallax();
		passSyncButtons();
	});

	/* Boot dei moduli ---------------------------------------------------- */
	if (doc.readyState === 'loading') {
		doc.addEventListener('DOMContentLoaded', function () {
			buildPass();
			passDaily();
			passArtistVisit();
			passReadArticle();
			passSyncButtons();
			buildPalette();
			liveWireMount();
			splitHeadings();
			pageTransitions();
			initArtistDossier();
			initInstagram();
			initCalendar();
			initRoster();
		});
	} else {
		buildPass();
		passDaily();
		passArtistVisit();
		passReadArticle();
		passSyncButtons();
		buildPalette();
		liveWireMount();
		splitHeadings();
		pageTransitions();
		initArtistDossier();
		initInstagram();
		initCalendar();
		initRoster();
	}

	/* Anno corrente già server-side, nessuna azione. */
})();
