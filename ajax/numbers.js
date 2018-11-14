$(() => {
  let $search = $('#search-gif');
  let $remove = $('#remove-gif');
  let $container = $('#gif-container');

  $search.on('click', () => {
    event.preventDefault();

    searchClick();
  });
  $remove.on('submit', () => {
    event.preventDefault();
    $container.html('');
  });
});

function searchClick() {
  let $entry = $('#number').val();
  let apiURL = `http://numbersapi.com/${$entry}`;

  $.get(apiURL, res => {
    parseURL(res);
  });
  $('#number').val('');
}

function parseURL(res) {
  createDiv(res);
}

function createDiv(url) {
  let $div = $('<div>')
    .text(url)
    .addClass('col-4 mb-2 text-light');
  $('#gif-container').append($div);
}
