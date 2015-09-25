/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
        $('.extraTextMain').hide();
        $('.readless').hide();
        $('.learnMoreText').hide();
        
        function slideDownMain(e) {
            e.preventDefault();
            $('.extraTextMain').slideDown();
            $('.readless').show();
            $('.readmore').hide();
        }
        
        function slideUpMain(e) {
            e.preventDefault();
            $('.extraTextMain').slideUp();
            $('.readmore').show();
            $('.readless').hide();
        }
        
        function slideDownSide(e) {
            e.preventDefault();
            $('.learnMoreText').slideDown();
            $('.learnmore').hide();
        }
        
        $('.readmore').click(slideDownMain);
        $('.readless').click(slideUpMain);
        $('.learnmore').click(slideDownSide);

        
        /* ----- Finish writing your JavaScript here  -----*/
    });
}());