$(function() {
  let $submit = $('#submit');
  let $favorites = $('#favorites');
  let $form = $('#form');
  let $ol = $('#ol');

  let $all = $('#all');

  let $title = $('#title');
  let $url = $('#url');

  $submit.on('click', function() {
    $form.slideToggle();
  });

  $ol.on('click', '.far, .fas', function(event) {
    $(event.target).toggleClass('far fas');
  });

  $form.on('submit', function(event) {
    event.preventDefault();
    // list span a small
    let title = $title.val();
    let urlValue = $url.val();

    let $span = $('<span>').addClass('far fa-star');
    let $a = $('<a>')
      .attr(`href`, urlValue)
      .text(` ${title} `);

    let hostname = $a
      .prop('hostname')
      .split('.')
      .slice(-2)
      .join('.');

    let $small = $('<small>').text(` (${hostname})`);
    let $list = $('<li>').addClass('py-1');

    $list.append($span, $a, $small);
    $ol.append($list);
  });

  $favorites.on('click', function(event) {
    $('.far')
      .parent()
      .addClass('hidden');
    $('.fas')
      .parent()
      .addClass('hidden-list');
    $favorites.addClass('hidden');
    $all.toggleClass('hidden');
  });

  $all.on('click', function(event) {
    $('.hidden').removeClass('hidden');
    $('.hidden-list').removeClass('hidden-list');
    $all.addClass('hidden');
  });

  $ol.on('click', 'small', function(event) {
    $favorites.addClass('hidden');
    $all.removeClass('hidden');
    $.each($('small'), (index, value) => {
      if ($(value).text() !== $(event.target).text()) {
        $(value)
          .parent()
          .addClass('hidden');
      } else
        $(value)
          .parent()
          .addClass('hidden-list');
    });
  });
});
