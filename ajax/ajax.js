import ajaxAPI from './ajaxAPI';

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
  let $entry = $('#search').val();

  let apiURL = `http://api.giphy.com/v1/gifs/search?q=${$entry}${ajaxAPI.api}`;
  $.get(apiURL, res => {
    parseURL(res);
  });
  $('#search').val('');
}

function parseURL(res) {
  if (res.pagination.count > 0) {
    let randIndex = Math.floor(
      Math.random() * Math.floor(res.pagination.count)
    );
    let url = res.data[randIndex - 1].images.original.url;
    createDiv(url);
  } else {
    alert('No gifs found. Use a less obscure search.');
  }
}

function createDiv(url) {
  let $img = $('<img>').attr(`src`, `${url}`);
  let $div = $('<div>')
    .append($img)
    .addClass('col-4 mb-2');
  $('#gif-container').append($div);
}
