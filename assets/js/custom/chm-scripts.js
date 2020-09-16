"use strict";

(function ($) {

    // IF Loan Officer Detail page
    if ($("body").hasClass("single-gd_loan_officer")) {

        // Make WPGeoDirectory social icons clickable
        $(".lo-single-socials .geodir_post_meta").each(function (i) {
            var icon = $(this).children('.geodir_post_meta_icon'),
                link = $(this).children('a');
    
            $(icon).prependTo(link);
        });
        
    }

    // IF Loan Officer Detail page
    if ($("body").hasClass("single-gd_place")) {

        // Hides a Regional Manager's profile in Our Team if they exist in both Regional Manager and Our Team sections
        var ourTeamLOs = $(".branch-lo-our-team li.type-gd_loan_officer"),
            regionalMg = $('.branch-regional-manager li');
        var teamArray = [];
        var r = /\d+/;
        
        if (regionalMg.length > 0) {
            var rmPostID = regionalMg.attr("class").match(r).toString();
        
            $(ourTeamLOs).each(function (i) {
                var rteamPostID = $(this).attr('class').match(r);
                teamArray.push(rteamPostID[0]);
            });
        }
        
        var rmLOindex = $.inArray( rmPostID, teamArray );
        if( rmLOindex > -1 ) {
            $(".branch-lo-our-team li.post-" + teamArray[rmLOindex]).hide();
        }
        
    }

})(jQuery);
