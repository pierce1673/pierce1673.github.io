    $(document).ready(function() {


        $('.hide').hide();

        $(".menuBreakfast").click(function() {
            $(".menuBreakfastItems").fadeToggle(500);
        });

        $(".menuBurgers").click(function() {
            $(".menuBurgerItems").fadeToggle(500);
        });

        $(".menuSides").click(function() {
            $(".menuSideItems").fadeToggle(500);
        });

        $(".menuItem").click(function() {
            if ($(this).hasClass("active")) {
                $(".description").hide();
                $(".thumb").hide();
                $(".menuItem").removeClass("active");
            } else {
                $(".description").hide();
                $(".thumb").hide();
                $(".menuItem").removeClass("active");

                $(this).addClass("active");
                $(this).parents().closest('table').find('.description').fadeIn();
                $(this).parents().closest('table').find('.thumb').fadeIn(500);
            }

        });

    });
