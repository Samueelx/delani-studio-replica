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
});