/*global jQuery */
/*! 
 * FitHolder.js 1.0
 *
 * Copyright 2013, Adam Campbell http://hotmeteor.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sun Jan 27 21:45:00 2013 -0600
 */
;
(function($) {

    // Enable strict mode
    "use strict";

    $.fn.fitholder = function(values) {

        return this.each(function() {

            // Store the object
            var $this = $(this);

            // Store original placeholder.
            var orig = $this.attr('placeholder');
            $this.data('ph-original', orig);

            // Call on resize.
            var changer = function() {
                    for (var media in values) {

                        // if there's no media specified, OR w.matchMedia is supported 
                        if (!media || (window.matchMedia && window.matchMedia(media).matches)) {
                            $this.attr('placeholder', values[media]);
                        }
                    }
                };

            $(window).on('resize', changer);

            // Init.
            changer();
        });

    };

})(jQuery);
