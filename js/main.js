$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.main')
        .find('div.info')
        .removeClass('active')
        .eq($(this).index()).addClass('active');


});


