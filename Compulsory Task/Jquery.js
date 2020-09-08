//===============================TASK 14===================================//
// jQuery function to alert upon loaded page.
$(document).ready(function () {
    alert("The Web Page has fully loaded, click okay to continue!");
});
// jQuery function to change background of page after it has loaded.
$(document).ready(function () {
    $("body").css("background-color", "gray");
});
// jQuery function to change the styling of a paragraph with an id when user clicks on it.
$(document).click(function () {
    $("#changeStyle").css("color", "orange");
    $("#changeStyle").css("font-size", "20px");
    $("#changeStyle").css("font-family", "courier");
});
// jQuery function that fades out an object when clicked on.
$(document).click(function () {
    $("#mexican").fadeOut();
});
// Example coding used to the mexican characters!
$(document).keydown(function (key) {
    switch (parseInt(key.which, 10)) {
        // Left
        case 37:
            $('img').animate({ left: "-=20px" }, 'fast');
            break;
        // Up 
        case 38:
            $('img').animate({ top: '-=20px' }, 'fast');
            break;
        // Right 
        case 39:
            $('img').animate({ left: '+=20px' }, 'fast');
            break;
        // Down 
        case 40:
            $('img').animate({ top: '+=20px' }, 'fast');
            break;
    }
});
// jQuery function which creates dropdown menu.
$(document).ready(function () {
    $(".accordion").click(function () {
        $(".panel").slideToggle("slow");
    });
});
// jQuery function that executes the following chain of animation when the relevant button in the HTML page.
$(document).ready(function () {
    $("#animate").click(function () {
        $("body").animate({ left: '10%' }, "slow");
        $("body").animate({ right: '8%' }, "slow");
        $("body").animate({ fontSize: '5em' }, "slow");
        $("body").slideUp(2000);
        $("body").slideDown(2000);
        $("body").css("background-color", "rgb(250, 229, 43)");
    });
});
// jQuery function to fade image in and out.
$(document).ready(function () {
    $("#cowboy").hide();
    $("#Gif").click(function () {
        // Fade image in & out using the speed parameter of 3000 milliseconds(3s).
        $("#cowboy").fadeToggle(3000);
    })
})
// jQuery function to stop the fade in & out animation in action of image above.
$(document).ready(function () {
    $("#freeze").click(function () {
        $("#cowboy").stop();
    })
})
//===============================THE END===================================//

