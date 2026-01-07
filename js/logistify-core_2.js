/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00
-------------------------------------------------------------------------------- */
(function ($) {
	"use strict";

	gsap.config({
		nullTargetWarn: false,
	});

	const lenis = new Lenis();
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
	/*
preloader
====start====
*/
	jQuery(window).on("load", function () {
		jQuery("#tx_preloader").fadeOut("slow", function () {
			jQuery(this).remove();
		});
	});

	/*
Background Image
====start====
*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});
	/*
Header Area
====start====
*/
	$(".search-btn, .laa-search-btn").on("click", function () {
		$(".search-body").toggleClass("search-open");
	});
	$(".open_mobile_menu").on("click", function () {
		$(".mobile_menu_wrap").toggleClass("mobile_menu_on");
	});
	$(".open_mobile_menu").on("click", function () {
		$("body").toggleClass("mobile_menu_overlay_on");
	});
	jQuery(".mobile-main-navigation li.dropdown").append(
		'<span class="dropdown-btn"><i class="far fa-angle-down"></i></span>'
	),
		jQuery(".mobile-main-navigation li .dropdown-btn").on(
			"click",
			function () {
				jQuery(this).hasClass("active")
					? (jQuery(this)
							.closest("ul")
							.find(".dropdown-btn.active")
							.toggleClass("active"),
					  jQuery(this)
							.closest("ul")
							.find(".dropdown-menu.active")
							.toggleClass("active")
							.slideToggle())
					: (jQuery(this)
							.closest("ul")
							.find(".dropdown-btn.active")
							.toggleClass("active"),
					  jQuery(this)
							.closest("ul")
							.find(".dropdown-menu.active")
							.toggleClass("active")
							.slideToggle(),
					  jQuery(this).toggleClass("active"),
					  jQuery(this)
							.parent()
							.find("> .dropdown-menu")
							.toggleClass("active"),
					  jQuery(this)
							.parent()
							.find("> .dropdown-menu")
							.slideToggle());
			}
		);
	jQuery(window).on("scroll", function () {
		if (jQuery(window).scrollTop() > 250) {
			jQuery(".tx_sticky_header").addClass("sticky-on");
		} else {
			jQuery(".tx_sticky_header").removeClass("sticky-on");
		}
	});
	$(function (o) {
		0 < o(".navSidebar-button").length &&
			o(".navSidebar-button").on("click", function (e) {
				e.preventDefault(),
					e.stopPropagation(),
					o(".info-group").addClass("isActive");
			}),
			0 < o(".close-side-widget").length &&
				o(".close-side-widget").on("click", function (e) {
					e.preventDefault(),
						o(".info-group").removeClass("isActive");
				}),
			o(".xs-sidebar-widget").on("click", function (e) {
				e.stopPropagation();
			});
	});

	$(".cart_close_btn, .body-overlay").on("click", function () {
		$(".cart_sidebar").removeClass("active"),
			$(".body-overlay").removeClass("active");
	}),
		$(".header-cart-btn").on("click", function () {
			$(".cart_sidebar").addClass("active"),
				$(".body-overlay").addClass("active");
		});
	/*
Parallax Image
====start====
*/
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		});
	}
	/*
Wow Animation
====Start====
*/
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
		});
		wow.init();
	}
	$(window).on("load", function () {
		Splitting();
	});
	/*
ScrollUp
====start====
*/
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 200) {
			$(".scrollup").fadeIn();
		} else {
			$(".scrollup").fadeOut();
		}
	});
	$(".scrollup").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			800
		);
		return false;
	});
	/*
Counter
====start====
*/
	$(".counter").counterUp({
		delay: 15,
		time: 1500,
	});
	/*
Video popup
====start====
*/
	jQuery(".video_box").magnificPopup({
		disableOn: 200,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$(".zoom-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: "mfp-with-zoom mfp-img-mobile",
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function (element) {
				return element.find("img");
			},
		},
	});
	/*
Main Slider 1
====start====
*/

	if ($(".log-main-slider-4").length > 0) {
		var swiper2 = new Swiper(".log-main-slider-4", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			effect: "fade",
			speed: 1000,
			navigation: {
				nextEl: ".log-main-next-3",
				prevEl: ".log-main-prev-3",
			},
			pagination: {
				el: ".log-main-pagination-3",
				clickable: true,
				renderBullet: function (index, className) {
					return (
						'<span class="' +
						className +
						'">' +
						(index + 1) +
						"</span>"
					);
				},
			},
		});
	}
	jQuery(window).on("load", function () {
		var st = $(".slider_title");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 600 });
			if ($(el).hasClass("slider-title-text")) {
				gsap.set(el.split.lines, {
					opacity: 1,
					y: "0",
					ease: "power2.out",
				});
			}
		});
	});

	/*
Circle Progress
====start====
*/
	if ($(".count-box").length) {
		$(".count-box").appear_c(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(
									Math.floor(this.countNum)
								);
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}
	if ($(".dial").length) {
		$(".dial").appear_c(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");
				var thickness = elm.attr("thickness");
				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.1,
					dynamicDraw: true,
					displayInput: false,
				});
				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 3500,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);
			},
			{ accY: 0 }
		);
	}

	if ($(".log-award-slide-3").length > 0) {
		var swiper2 = new Swiper(".log-award-slide-3", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			speed: 1000,
			navigation: {
				nextEl: ".log-award-next-2",
				prevEl: ".log-award-prev-2",
			},
		});
	}

	/*
Service Active
====start====
*/
	var ltn__active_item = $(".log-service-item-2");
	ltn__active_item.on("mouseover", function () {
		ltn__active_item.removeClass("active");
		$(this).addClass("active");
	});
	var ltn__active_item_2 = $(".log-secure-service-item");
	ltn__active_item_2.on("mouseover", function () {
		ltn__active_item_2.removeClass("active");
		$(this).addClass("active");
	});
	var ltn__active_item_3 = $(".log-blog-item-3");
	ltn__active_item_3.on("mouseover", function () {
		ltn__active_item_3.removeClass("active");
		$(this).addClass("active");
	});
	var ltn__active_item_4 = $(".log-feature-item-6");
	ltn__active_item_4.on("mouseover", function () {
		ltn__active_item_4.removeClass("active");
		$(this).addClass("active");
	});
	/*
Project btn move
====start====
*/
	/*
Distance Range
====start====
*/

	$(".count").prop("disabled", true);
	$(document).on("click", ".plus", function () {
		$(".count").val(parseInt($(".count").val()) + 1);
	});
	$(document).on("click", ".minus", function () {
		$(".count").val(parseInt($(".count").val()) - 1);
		if ($(".count").val() == 0) {
			$(".count").val(1);
		}
	});

	jQuery(".log-sponsor-scroller-5").marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
		startVisible: true,
	});

	jQuery(".log-project-content-scoller").marquee({
		gap: 10,
		speed: 80,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
		startVisible: true,
	});

	/*
Cursor Move GSAP animation
====start====
*/
	$(document).ready(function () {
		var blogMore = $(".log-project-item-2 .log_more_btn ");

		blogMore.on("mouseover", function () {
			var mContent = $(this).find(".read-more-btn");
			var blogReadMore = $(this).find("#hover-cursor");

			function parallaxIt(e, target, movement = 1) {
				var scrollTop =
					window.pageYOffset || document.documentElement.scrollTop;
				var boundingRect = blogReadMore[0].getBoundingClientRect();
				var relX = e.pageX - boundingRect.left;
				var relY = e.pageY - boundingRect.top;

				gsap.to(mContent, {
					x: (relX - boundingRect.width / 2) * movement,
					y: (relY - boundingRect.height / 2 - scrollTop) * movement,
					ease: "power1",
					duration: 0.6,
				});
			}

			function callParallax(e) {
				parallaxIt(e, blogMore);
			}

			blogReadMore.mousemove(function (e) {
				callParallax(e);
			});
			blogReadMore.mouseleave(function (e) {
				gsap.to(mContent, {
					scale: 1,
					x: 0,
					y: 0,
					ease: "power1",
					duration: 0.6,
				});
			});
		});
		var mWrap = $(".log-project-item-3");

		mWrap.on("mouseover", function () {
			var mContent = $(this).find("#more_content");
			var mArea = $(this).find("#more_area");

			function parallaxIt(e, target, movement = 1) {
				var scrollTop =
					window.pageYOffset || document.documentElement.scrollTop;
				var boundingRect = mArea[0].getBoundingClientRect();
				var relX = e.pageX - boundingRect.left;
				var relY = e.pageY - boundingRect.top;

				gsap.to(mContent, {
					x: (relX - boundingRect.width / 2) * movement,
					y: (relY - boundingRect.height / 2 - scrollTop) * movement,
					ease: "power1",
					duration: 0.6,
				});
			}

			function callParallax(e) {
				parallaxIt(e, mWrap);
			}

			mArea.mousemove(function (e) {
				callParallax(e);
			});
			mArea.mouseleave(function (e) {
				gsap.to(mContent, {
					scale: 1,
					x: 0,
					y: 0,
					ease: "power1",
					duration: 0.6,
				});
			});
		});
		var st = jQuery(".tx-split-text");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 1000 });
			if (jQuery(el).hasClass("split-in-right")) {
				gsap.set(el.split.chars, {
					scale: 0,
					opacity: 0,
					rotation: 90,
					ease: "elastic.in(1,0.3)",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				rotation: 0,
				rotationX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 0.6,
				stagger: 0.03,
			});
		});
		gsap.utils.toArray(" .appear_left").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 1, x: "-=150" },
					{ opacity: 1, x: 0, duration: 1, immediateRender: false }
				);
		});
		gsap.utils.toArray(" .appear_right").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 1, x: "+=150" },
					{ opacity: 1, x: 0, duration: 1, immediateRender: false }
				);
		});
		gsap.utils.toArray(" .appear_top").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 1, y: "+=150" },
					{ opacity: 1, y: 0, duration: 1, immediateRender: false }
				);
		});
		gsap.utils.toArray(" .appear_bottom").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 1, y: "-=150" },
					{ opacity: 1, y: 0, duration: 1, immediateRender: false }
				);
		});
		gsap.utils.toArray(" .top_view").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 0, y: "+=30" },
					{ opacity: 1, y: 0, duration: 1, immediateRender: false }
				);
		});
		gsap.utils.toArray(" .scale_view").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 0, scale: 0.5 },
					{
						opacity: 1,
						scale: 1,
						duration: 1,
						immediateRender: false,
					}
				);
		});
		gsap.utils.toArray(" .rotate_view").forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 90%",
					end: "top 70%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tlcta
				.set(el, { transformOrigin: "center center" })
				.from(
					el,
					{ opacity: 0, scaleY: 1.5 },
					{
						opacity: 1,
						scaleY: 1,
						duration: 1,
						immediateRender: false,
					}
				);
		});
		let splitTextLines = gsap.utils.toArray(".log-text p");
		splitTextLines.forEach((splitTextLine) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: "top 90%",
					duration: 2,
					end: "bottom 60%",
					scrub: false,
					markers: false,
					toggleActions: "play none none none",
				},
			});

			const itemSplitted = new SplitText(splitTextLine, {
				type: "lines",
			});
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" });
			tl.from(itemSplitted.lines, {
				duration: 1,
				delay: 0.5,
				opacity: 0,
				top: 20,
				force3D: true,
				transformOrigin: "top center -50",
				stagger: 0.1,
			});
		});
		gsap.utils.toArray(".log-circle").forEach((el, index) => {
			let arspin = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 85%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			arspin
				.set(el, { transformOrigin: "center center" })
				.fromTo(
					el,
					{ rotate: 0 },
					{ rotate: 180, duration: 2, immediateRender: false }
				);
		});
		gsap.utils.toArray(".log-svg-anim").forEach((el, index) => {
			let arspin = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 85%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			arspin
				.set(el, { transformOrigin: "center center" })
				.fromTo(
					el,
					{ width: 0 },
					{ width: "100%", duration: 2, immediateRender: false }
				);
		});
		gsap.utils.toArray(".img-parallax").forEach(function (container) {
			let image = container.querySelector("img");

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					scrub: true,
					pin: false,
				},
			});
			tl.from(image, {
				yPercent: -30,
				ease: "none",
			}).to(image, {
				yPercent: 30,
				ease: "none",
			});
		});
		gsap.utils.toArray(".img-zoom").forEach(function (container) {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					scrub: true,
					pin: false,
				},
			});
			tl.from(image, {
				scale: 1.5,
				filter: "grayscale(1)",
				ease: "none",
			}).to(image, {
				scale: 1,
				filter: "grayscale(0)",
				ease: "none",
			});
		});
		gsap.utils.toArray(".img-parallax-2").forEach(function (container) {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					scrub: true,
					pin: false,
				},
			});
			tl.from(image, {
				xPercent: -30,
				ease: "none",
			}).to(image, {
				xPercent: 0,
				ease: "none",
			});
		});
		gsap.registerPlugin(ScrollTrigger);
		let imageappear = document.querySelectorAll(".log-image-appear1");
		imageappear.forEach((container) => {
			let image = container.querySelector(".log-img-rvl_1");
			let ptx = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none",
					start: "top 90%",
					end: "top 0%",
				},
			});
			ptx.set(container, { autoAlpha: 1 });
			ptx.from(container, 1.5, {
				xPercent: 100,
				ease: Power2.out,
			});
			ptx.from(image, 1.5, {
				xPercent: -100,
				scale: 1.3,
				delay: -1.5,
				ease: Power2.out,
			});
		});
		gsap.registerPlugin(ScrollTrigger);
		let imageappear2 = document.querySelectorAll(".log-image-appear2");
		imageappear2.forEach((container) => {
			let image = container.querySelector(".log-img-rvl_2");
			let rts = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none",
				},
			});
			rts.set(container, { autoAlpha: 1 });
			rts.from(container, 1.5, {
				xPercent: 100,
				ease: Power2.out,
			});
			rts.from(image, 1.5, {
				xPercent: -100,
				scale: 1.3,
				delay: -1.5,
				ease: Power2.out,
			});
		});
		gsap.registerPlugin(ScrollTrigger);
		let imageappear3 = document.querySelectorAll(".log-image-appear3");
		imageappear3.forEach((container) => {
			let image = container.querySelector(".log-img-rvl_3");
			let rts = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none",
				},
			});
			rts.set(container, { autoAlpha: 1 });
			rts.from(container, 1.5, {
				xPercent: -100,
				ease: Power2.out,
			});
			rts.from(image, 1.5, {
				xPercent: 100,
				scale: 1.3,
				delay: -1.5,
				ease: Power2.out,
			});
		});
	});

	$(window).on("load", function () {
		Splitting();
	});
	jQuery(window).on("load", function () {
		const boxes = gsap.utils.toArray(".txt_item_active");
		boxes.forEach((svg) => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 70%",
					end: "bottom bottom",
					toggleClass: "active",
					once: true,
				},
			});
		});

		if ($("#slider-range").length) {
			$("#slider-range").slider({
				range: true,
				min: 0,
				max: 3000,
				values: [0, 1500],
				slide: function (event, ui) {
					$("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
				},
			});
			if ($("#amount").length) {
				$("#amount").val(
					"" +
						$("#slider-range").slider("values", 0) +
						" - " +
						$("#slider-range").slider("values", 1)
				);
			}
		}
	});
	jQuery(window).on("load", function () {
		var st = $(".txt-banner-title");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });
			if ($(el).hasClass("banner-title-text")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					y: "100",
					ease: "circ.out",
					color: "#5000ec",
					ease: "Back.easeOut",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 1,
				stagger: 0.02,
				delay: 0.5,
			});
		});
	});
	$(document).on(
		"click",
		".log-faq-accordion-6 .accordion-item",
		function () {
			$(this).addClass("faq_active").siblings().removeClass("faq_active");
		}
	);
	jQuery(".log-text-scroller").marquee({
		gap: 20,
		speed: 80,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
		startVisible: true,
	});

	var $grid = $(".grid").imagesLoaded(function () {
		$grid.masonry({
			percentPosition: true,
			itemSelector: ".grid-item",
			columnWidth: ".grid-sizer",
		});
	});
	var $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows",
	});
	var filterFns = {
		numberGreaterThan50: function () {
			var number = $(this).find(".number").text();
			return parseInt(number, 10) > 50;
		},
		ium: function () {
			var name = $(this).find(".name").text();
			return name.match(/ium$/);
		},
	};
	$(".button-group").on("click", "button", function () {
		var filterValue = $(this).attr("data-filter");
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	$(".button-group").each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "button", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		});
	});

	// qty activation
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

	// HOME 7 JS START
	// preloader
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener("load", function () {
			setTimeout(function () {
				// hero-slider
				if ($(".txaa-split-text-3").length) {
					var txasplit2 = $(".txaa-split-text-3");

					if (txasplit2.length == 0);
					gsap.registerPlugin(SplitText);
					txasplit2.each(function (index, el) {
						el.split = new SplitText(el, {
							type: "lines,words,chars",
							linesClass: "split-line",
						});

						if ($(el).hasClass("txaa-split-text-3-ani")) {
							gsap.set(el.split.chars, {
								opacity: 0.2,
								color: "#F62459",
								x: "-5",
							});
						}

						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "top 60%",
								markers: false,
								scrub: 1,
							},

							x: "0",
							y: "0",
							color: "inherit",
							opacity: 1,
							duration: 0.7,
							stagger: 0.2,
						});
					});
				}
			});
		});
	});

	// title-animation

	var txasplit1 = $(".txaa-split-text-1");
	if (txasplit1.length == 0);
	gsap.registerPlugin(SplitText);
	txasplit1.each(function (index, el) {
		el.split = new SplitText(el, {
			type: "lines",
			linesClass: "split-line",
		});
	});

	// about-1
	var laa_a1 = gsap.timeline({
		scrollTrigger: {
			animation: laa_a1,
			trigger: ".laa-about-1-area",
			start: "top 50%",
			end: "top -20%",
			scrub: 3,
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	});

	laa_a1.from(".laa-about-1-ship-box", { xPercent: 100 });
	laa_a1.from(".laa-about-1-ship-box-ship", { xPercent: 100, scale: 0.5 });

	// animate-1
	var laa_ani1 = gsap.timeline({
		scrollTrigger: {
			animation: laa_ani1,
			trigger: ".laa-animate-1-wrap",
			start: "top 95%",
			end: "top 20%",
			scrub: 3,
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	});

	laa_ani1.from(".laa-animate-1-cloud-1", { xPercent: 100, opacity: 0 });
	laa_ani1.from(".laa-animate-1-cloud-2", { xPercent: 50, opacity: 0 }, "<=");
	laa_ani1.from(
		".laa-animate-1-cloud-3",
		{ xPercent: 100, opacity: 0 },
		"<=.1"
	);
	laa_ani1.from(
		".laa-animate-1-plane",
		{ xPercent: 100, yPercent: -100, scale: 0.3, rotate: -30, opacity: 0 },
		"<=.5"
	);

	// faq-1
	var laa_faq = gsap.timeline({
		scrollTrigger: {
			animation: laa_faq,
			trigger: ".laa-faq-1-img",
			start: "top 95%",
			end: "top 50%",
			scrub: 4,
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	});

	laa_faq.from(".laa-faq-1-img", { xPercent: -100 });

	// newsletter-1
	var laa_nl1 = gsap.timeline({
		scrollTrigger: {
			animation: laa_nl1,
			trigger: ".laa-newsletter-1-plane",
			start: "top 95%",
			end: "top 50%",
			scrub: 3,
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	});

	laa_nl1.from(".laa-newsletter-1-plane", {
		xPercent: 100,
		yPercent: -100,
		scale: 0.3,
		rotate: -30,
		opacity: 0,
	});

	// footer-1
	var laa_f1 = gsap.timeline({
		scrollTrigger: {
			animation: laa_f1,
			trigger: ".laa-footer-1-truk",
			start: "top 100%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	});

	laa_f1.from(".laa-footer-1-truk", {
		xPercent: 100,
		duration: 1,
		opacity: 0,
	});

	gsap.utils.toArray(".laa-img-parallax").forEach(function (container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 0.5,
			},
		});
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		});
	});

	// pattn-1
	document.querySelectorAll(".laa-pattn").forEach((section, index) => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top 95%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},
		});

		// Animate each child element within the section based on its index
		timeline.from(section.querySelector(".laa-pattn-1"), {
			xPercent: -100,
			opacity: 0.16,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-2"), {
			yPercent: -100,
			opacity: 0.16,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-3"), {
			xPercent: -100,
			opacity: 0.56,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-4"), {
			yPercent: -100,
			opacity: 0.08,
			duration: 0.3,
		});
	});

	// pattn-1
	document.querySelectorAll(".laa-pattn-two").forEach((section, index) => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top 95%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},
		});

		// Animate each child element within the section based on its index
		timeline.from(section.querySelector(".laa-pattn-two-1"), {
			yPercent: 100,
			opacity: 0.16,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-two-2"), {
			xPercent: -100,
			opacity: 0.16,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-two-3"), {
			xPercent: -100,
			opacity: 0.56,
			duration: 0.3,
		});
		timeline.from(section.querySelector(".laa-pattn-two-4"), {
			yPercent: 100,
			opacity: 0.08,
			duration: 0.3,
		});
	});

	// text-slide-1
	if ($(".text-slide-1-active").length) {
		$(".text-slide-1-active").marquee({
			gap: 48,
			speed: 80,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	/* faq-active-class */
	$(document).on("click", ".laa-accordion-item", function () {
		$(this).addClass("faq_bg").siblings().removeClass("faq_bg");
	});

	// nice-selector
	if ($(".nice-select").length) {
		$(".nice-select select").niceSelect();
	}

	// footer-menu

	var dropdownLinks = document.querySelectorAll(".dropdown-link");

	dropdownLinks.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			var dropdown = this.nextElementSibling;
			if (dropdown.style.display === "block") {
				dropdown.style.display = "none";
			} else {
				// Hide all other dropdowns
				document
					.querySelectorAll(".has-dropdown")
					.forEach(function (ul) {
						ul.style.display = "none";
					});
				dropdown.style.display = "block";
			}
		});
	});

	$(".laa-scrollup").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			800
		);
		return false;
	});

	// image background
	function bgImageActive($scope, $) {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ") "
			);
		});
	}

	// hero slider
	function heroSlider($scope, $) {
		if ($(".log-main-slider-1, .log-slider-wrap-2").length) {
			var hero_slider_1 = new Swiper(".log-main-slider-1", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				effect: "fade",
				speed: 1000,
				navigation: {
					nextEl: ".log-main-next",
					prevEl: ".log-main-prev",
				},
				pagination: {
					el: ".log-main-pagination",
					clickable: true,
				},
				on: {
					slideChangeTransitionStart: function () {
						splitTextFunction(this.el);
					},
				},
			});
			var hero_slider_2 = new Swiper(".log-slider-wrap-2", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				effect: "fade",
				speed: 1000,
				autoplay: {
					enabled: true,
					delay: 5000,
				},
			});
			function splitTextFunction(sliderDOM) {
				const slideActive = sliderDOM.querySelector(
					".swiper-slide-active"
				);
				const slideCaption = slideActive.querySelector(
					".log-main-slider-text .slider_title"
				);
				const oldActive = sliderDOM.querySelectorAll(
					".swiper-slide-prev, .swiper-slide-duplicate-prev"
				);
				const oldCaptions = Array.from(oldActive).map((slide) =>
					slide.querySelector(".log-main-slider-text .slider_title")
				);

				gsap.set(oldCaptions, { autoAlpha: 0 });
				gsap.set(slideCaption, { autoAlpha: 1 });
				const split = new SplitText(slideCaption, {
					type: "words,chars",
				});

				gsap.from(split.chars, {
					opacity: 0,
					x: 50,
					ease: "power2.in",
					duration: 0.5,
					delay: 0.5,
					stagger: {
						from: "start",
						each: 0.05,
					},
					onComplete: function () {
						split.revert();
					},
				});
			}
			splitTextFunction(
				document.querySelector(".log-main-slider-1, .log-slider-wrap-2")
			);
		}

		if ($(".log-main-slider-3").length > 0) {
			var hero_slider_3 = new Swiper(".log-main-slider-3", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				effect: "fade",
				speed: 1000,
				navigation: {
					nextEl: ".log-main-next-2",
					prevEl: ".log-main-prev-2",
				},
			});
		}

		if ($(".log-main-slider-4").length > 0) {
			var hero_slider_4 = new Swiper(".log-main-slider-4", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				effect: "fade",
				speed: 1000,
				navigation: {
					nextEl: ".log-main-next-3",
					prevEl: ".log-main-prev-3",
				},
				pagination: {
					el: ".log-main-pagination-3",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},
			});
		}

		if ($(".log-slider-area-5").length > 0) {
			var hero_slider_5 = new Swiper(".log-slider-area-5", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				effect: "fade",
				speed: 1000,
				navigation: {
					nextEl: ".log-main-next-5",
					prevEl: ".log-main-prev-5",
				},
				pagination: {
					el: ".log-main-pagination-5",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},
			});
		}

		if ($(".laa-hero-1-active").length) {
			let laa_hero_1_active = new Swiper(".laa-hero-1-active", {
				loop: true,
				spaceBetween: 0,
				speed: 1000,
				// autoplay: {
				// 	delay: 5000,
				// },
				pagination: {
					el: ".laa-h-3-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".laa-h1-slider-next",
					prevEl: ".laa-h1-slider-prev",
				},
			});

			if ($(".laa-hero-1-active .swiper-slide").length > 1) {
				var swiperr = new Swiper(".laa-hero-1-active", {
					// Optional parameters
					direction: "horizontal",
					loop: false,
					//autoplay: 6500,
					autoplayDisableOnInteraction: false,
					keyboardControl: true,
					mousewheelControl: true,
					pagination: ".laa-h-3-pagination",
					paginationClickable: true,
				});
			}
		}
	}

	// brand slider active
	function brandSliderActive($scope, $) {
		if ($(".log-sponsor-slider").length > 0) {
			var log_sponsor_slider = new Swiper(".log-sponsor-slider", {
				spaceBetween: 60,
				slidesPerView: 5,
				roundLengths: true,
				loop: true,
				loopAdditionalSlides: 30,
				autoplay: {
					enabled: true,
					delay: 6000,
				},
				speed: 400,
				breakpoints: {
					1600: {
						slidesPerView: 5,
					},
					1200: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 4,
					},
					576: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
					0: {
						slidesPerView: 2,
					},
				},
			});
		}
		if ($(".laa-c1-active").length) {
			let laa_c1_active = new Swiper(".laa-c1-active", {
				loop: true,
				spaceBetween: 32,
				speed: 500,
				slidesPerView: 4,

				autoplay: {
					delay: 6000,
				},

				navigation: {
					nextEl: ".laa-c1-next",
					prevEl: ".laa-c1-prev",
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 4,
					},
				},
			});
		}
	}

	// serivce slider active
	function serviceSliderActive($scope, $) {
		if ($(".log-project-area-1").length) {
			var log_project_area_1 = new Swiper(".log-project-area-1", {
				slidesPerView: 4,
				loop: true,
				spaceBetween: 0,
				roundLengths: true,
				speed: 1000,
				breakpoints: {
					1400: {
						slidesPerView: 4,
					},
					1300: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($(".log-service-slider-for").length > 0) {
			var service_2 = new Swiper(".log-service-slider-for", {
				loop: true,
				spaceBetween: 30,
				speed: 1000,
				slidesPerView: 1,
				effect: "fade",
				navigation: {
					nextEl: ".log-ser-next-4",
					prevEl: ".log-ser-prev-4",
				},
			});
		}

		if ($(".log-service-slider-5").length > 0) {
			var service_3 = new Swiper(".log-service-slider-5", {
				slidesPerView: 4,
				loop: true,
				spaceBetween: 25,
				roundLengths: true,
				speed: 1000,
				navigation: {
					nextEl: ".log-ser-next-5",
					prevEl: ".log-ser-prev-5",
				},
				breakpoints: {
					1400: {
						slidesPerView: 4,
					},
					1300: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($(".log-project-slider-5").length > 0) {
			var service_4 = new Swiper(".log-project-slider-5", {
				slidesPerView: 3,
				loop: true,
				spaceBetween: 25,
				roundLengths: true,
				speed: 1000,
				navigation: {
					nextEl: ".log-pro-next-5",
					prevEl: ".log-pro-prev-5",
				},
				breakpoints: {
					1300: {
						slidesPerView: 3,
					},
					1300: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1100: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($(".log-service-slider-6").length > 0) {
			var service_5 = new Swiper(".log-service-slider-6", {
				slidesPerView: 4,
				loop: true,
				spaceBetween: 25,
				roundLengths: true,
				speed: 1000,
				navigation: {
					nextEl: ".service-button-next",
					prevEl: ".service-button-prev",
				},
				breakpoints: {
					1400: {
						slidesPerView: 4,
					},
					1300: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($(".log-cta-slider").length > 0) {
			var swiper2 = new Swiper(".log-cta-slider", {
				slidesPerView: 2,
				loop: true,
				spaceBetween: 15,
				roundLengths: true,
				speed: 1000,
				pagination: {
					el: ".log-cta-pagination",
					clickable: true,
				},
				breakpoints: {
					1400: {
						slidesPerView: 2,
					},
					1300: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	// testimonial active
	function testimonialActive($scope, $) {
		if ($(".log-testimonial-slider").length > 0) {
			var testimonial_active = new Swiper(".log-testimonial-slider", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				speed: 1000,
				navigation: {
					nextEl: ".log-testi-next",
					prevEl: ".log-testi-prev",
				},
			});
		}

		if ($(".log-testimonial-slider-4").length > 0) {
			var testimonial_active_2 = new Swiper(".log-testimonial-slider-4", {
				slidesPerView: 1,
				loop: true,
				effect: "fade",
				spaceBetween: 30,
				speed: 1000,
				pagination: {
					el: ".log-test-pagination-4",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},
				navigation: {
					nextEl: ".log-test-next-4",
					prevEl: ".log-test-prev-4",
				},
			});
		}

		if ($(".laa-t1-active").length) {
			let laa_t1_active = new Swiper(".laa-t1-active", {
				loop: true,
				spaceBetween: 30,
				speed: 1000,
				slidesPerView: 1,

				autoplay: {
					delay: 5000,
				},

				navigation: {
					nextEl: ".laa-t1-next",
					prevEl: ".laa-t1-prev",
				},
			});
		}

		if ($(".laa-t1-active-2").length) {
			let laa_t1_active_2 = new Swiper(".laa-t1-active-2", {
				loop: true,
				spaceBetween: 30,
				speed: 1000,
				slidesPerView: 1,

				autoplay: {
					delay: 5000,
				},

				navigation: {
					nextEl: ".laa-t2-next",
					prevEl: ".laa-t2-prev",
				},
			});
		}
	}

	// progressActive active
	function progressActive($scope, $) {
		if ($(".progress-bar").length) {
			var $progress_bar = $(".progress-bar");
			$progress_bar.appear();
			$(document.body).on("appear", ".progress-bar", function () {
				var current_item = $(this);
				if (!current_item.hasClass("appeared")) {
					var percent = current_item.data("percent");
					current_item
						.css("width", percent + "%")
						.addClass("appeared")
						.parent()
						.append("<span>" + percent + "%" + "</span>");
				}
			});
		}
	}

	// progressActive active
	function txGallery($scope, $) {
		if ($(".laa-f1-active").length) {
			let laa_f1_active = new Swiper(".laa-f1-active", {
				loop: true,
				spaceBetween: 0,
				speed: 1000,
				slidesPerView: 1,

				// autoplay: {
				// 	delay: 5000,
				// },

				navigation: {
					nextEl: ".laa-f1-next",
					prevEl: ".laa-f1-prev",
				},
			});
		}
	}

	// progressActive active
	function serviceLitsSldie($scope, $) {
		if ($(".laa-s1-active").length) {
			let laa_s1_active = new Swiper(".laa-s1-active", {
				loop: true,
				spaceBetween: 0,
				speed: 1000,
				autoplay: {
					delay: 5000,
				},
			});
		}

		if ($(".laa-s2-active").length) {
			let laa_s2_active = new Swiper(".laa-s2-active", {
				loop: true,
				spaceBetween: 0,
				speed: 1000,
				slidesPerView: 1,

				autoplay: {
					delay: 5000,
				},

				navigation: {
					nextEl: ".laa-2-slider-next",
					prevEl: ".laa-2-slider-prev",
				},
			});
		}
	}

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_slider.default",
			function ($scope, $) {
				bgImageActive($scope, $);
				heroSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_brand.default",
			function ($scope, $) {
				brandSliderActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_section.default",
			function ($scope, $) {
				serviceSliderActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_testimonial.default",
			function ($scope, $) {
				testimonialActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_progress.default",
			function ($scope, $) {
				progressActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_about.default",
			function ($scope, $) {
				progressActive($scope, $);
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_pricing_box.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_moving_text.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_gallery.default",
			function ($scope, $) {
				txGallery($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_newsletter.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_lists.default",
			function ($scope, $) {
				serviceLitsSldie($scope, $);
			}
		);
	});
})(jQuery);
