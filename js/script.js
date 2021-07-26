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

    $('.contact-us form').submit( function(e) {
        let name = $('input#name').val();
        let email = $('input#email').val();
        alert(name + ' thank you for contacting us. We have received your input.');

        e.preventDefault();
    });
});