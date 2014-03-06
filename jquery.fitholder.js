/*!
    Fitholder v1.0.0 - 2014-03-05
    Responsive input placeholder text
    (c) 2014 Adam Campbell (@hotmeteor)
    license: http://www.opensource.org/licenses/mit-license.php
*/
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

            // Check for data value.
            if ($this.data('fitholder')) {
                values = $this.data('fitholder');
            }

            if (!values) {
                return;
            }

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