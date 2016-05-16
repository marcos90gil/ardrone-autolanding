(function(window, document, $, undefined) {
    'use strict';

    var channel = 0;

    /*Constructor*/
    var Dartboard = function Dartboard(cockpit) {
        console.log("Initializing Dartboard plugin.");

        // Instance variables
        this.cockpit = cockpit;

        // Add required UI elements
        $('#cockpit').append('<canvas id="dartboard" width="640" height="360"></canvas>');
        this.ctx = $('#dartboard').get(0).getContext('2d');

        // Bind to pilot/channel events on websockets
        this.cockpit.socket.on('/pilot/channel', function(cmd) {
            channel = (channel == 0) ? 1 : 0;
            if (channel === 1) {
                $('#dartboard').removeClass('hidden');
            } else {
                $('#dartboard').addClass('hidden');
                console.log("Hidding dartboard after the channel changed to %d", channel);
            }
        });

        // Bind on window events to resize
        var land = this;
        $(window).resize(function(event) {
            land.draw();
        });

        this.draw();
    };

    Dartboard.prototype.drawCross = function drawFrame() {
        this.ctx.save();
        this.ctx.translate(
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );

        //horizon
        this.ctx.strokeStyle = 'red';
        this.ctx.fillStyle = 'white';
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();
        this.ctx.moveTo(-10000, 0);
        this.ctx.lineTo(20000, 0);
        this.ctx.stroke();

        //vertical
        this.ctx.strokeStyle = 'red';
        this.ctx.fillStyle = 'white';
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();
        this.ctx.moveTo(0, -10000);
        this.ctx.lineTo(0, 20000);
        this.ctx.stroke();

    };

    Dartboard.prototype.draw = function draw() {
        var width = $('#cockpit').innerWidth();
        var height = $('#cockpit').innerHeight();
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;

        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "#FF0000";
        this.ctx.strokeRect(0, 0, width, height);
        this.drawCross();

    };

    window.Cockpit.plugins.push(Dartboard);
}(window, document, jQuery));
