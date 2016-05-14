(function(window, document, $, undefined) {
    'use strict';


    /*Constructor*/
    var Autopilot = function Autopilot(cockpit) {
        console.log("Initializing autopilot plugin.");

        // Instance variables
        this.cockpit = cockpit;

        // Add required UI elements
        $('#cockpit').append('<div id="landing"></div>');
        var div = $('#landing').get(0);
    
    };

    window.Cockpit.plugins.push(Autopilot);
}(window, document));
