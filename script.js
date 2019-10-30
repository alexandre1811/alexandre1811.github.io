$(document).ready(function () {

    $('a').on('click', function () {
        let target = $(this).attr('href');
        console.log(target);
        if (target.substr(0, 1) == '#') {

            $('html,body')
                .stop()
                .animate({
                    scrollTop: $(target).offset().top - 80
                }, 500);
        }
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

});