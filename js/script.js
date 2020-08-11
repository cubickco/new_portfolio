! function(e) {
    "use strict";
    var t = e(window);
    e("body");
    e(".toggle-btn").on("click", function() {
        e(this).toggleClass("active"), e(".main-menu").toggleClass("active")
    }), t.on("scroll", function() {
        e(".navbar").offset().top > 100 ? e(".navbar-fixed-top").addClass("top-nav-collapse") : e(".navbar-fixed-top").removeClass("top-nav-collapse")
    }), e(function() {
        e(".custom-navbar .nav-menu a, a.scroll-btn, .scroll-down").on("click", function(t) {
            var o = e(this);
            e("html, body").stop().animate({
                scrollTop: e(o.attr("href")).offset().top - 0
            }, 1e3), t.preventDefault()
        })
    }), e(window).stellar({
        responsive: !0,
        positionProperty: "position",
        horizontalScrolling: !1
    }), e("#portfolio").mixItUp(), e(".count-num").counterUp({
        delay: 10,
        time: 1e3
    }), e(".image-popup").magnificPopup({
        type: "image",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    }), e(".blog-list").owlCarousel({
        items: 3,
        autoPlay: !0,
        navigation: !1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        pagination: !0,
        autoHeight: !0
    });
    new WOW({
        offset: 100
    }).init();
    e("body").scrollspy({
        target: ".main-menu",
        offset: 195
    }), e("#contact-form").validator(), e("#contact-form").on("submit", function(t) {
        if (!t.isDefaultPrevented()) {
            var o = e(this).prop("action"),
                a = e(this).serialize(),
                i = e(this);
            return e.post(o, a, function(e) {
                "error" == e.response && i.before('<div class="alert alert-warning">' + e.message + "</div>"), "success" == e.response && (i.before('<div class="alert alert-success">' + e.message + "</div>"), i[0].reset())
            }, "json"), !1
        }
    }), e(function() {
        t.on("load", function() {
            e(".spinner").fadeOut(), e(".preloader").delay(350).fadeOut(500)
        })
    })
}(jQuery);