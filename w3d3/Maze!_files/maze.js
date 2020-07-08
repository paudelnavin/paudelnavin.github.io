/* jshint esversion: 6 */
$(document).ready(function(){
    "use strict";

    let $boundary = $(".boundary");
    let $maze = $("#maze");
    let $status = $("#status");
    let $start = $("#start");
    let $end = $("#end");

    $boundary.mouseenter(function() {
        lostMessage();
    });

    $maze.mouseleave(function () {
        lostMessage();
    });

    let lostMessage = function(){
        if (!$boundary.hasClass("youlose")){
            $boundary.addClass("youlose");
            if ($boundary.hasClass("started")){
                $boundary.removeClass("started");
            }
            updateStatus("Sorry, you lost. 😞");
        }
    }

    let updateStatus = function(msg){
        $status.text(msg);
    }

    $end.mouseenter(function () {
        if (!$boundary.hasClass("youlose")){
            if ($boundary.hasClass("started")){
                updateStatus("You win! 😀");
            }
        }
    });

    $start.click(function () {
        if ($boundary.hasClass("youlose")){
            $boundary.removeClass("youlose");
            if (!$boundary.hasClass("started")){
                $boundary.addClass("started");
            }
            updateStatus("You are playing now.");
        }
    });

});