jQuery(document).ready( function() {
    $('.design').click( function() {
        $('.design img').toggle();
        $('.hidden-design').toggle();
    });
    $('.development').click( function() {
        $('.development img').toggle();
        $('.hidden-development').toggle();
    });
    $('.management').click( function() {
        $('.management img').toggle();
        $('.hidden-management').toggle();
    });

    $('input').focus( function() {
        $('button').show(1000, 'linear');
    });

    $('.work').hover( function() {
        $('.work img').slideUp(1000);
        $('.work p').slideDown(1000);
        $('.work p').addClass('hover-in-effect');
    }, function() {
        $('work p').removeClass('hover-in-effect');
        $('.work img').slideDown(1000);
        $('.work p').slideUp(1000);
    });

    $('.contact-us form').submit( function(e) {
        function validation() {
            if(($('input#name').val() == "") || ($('input#email').val() == "") ) {
                alert('Please enter the appropriate details.');
            }
            else {
                let name = $('input#name').val();
                let email = $('input#email').val();
                alert(`${name}, thank you for contacting us.`);
            }
        }
        validation();
        e.preventDefault();
    });
});