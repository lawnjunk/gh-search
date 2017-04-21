'use strict';
$('.search-form').submit(function(event){
  event.preventDefault();

  searchGithub(event.target.searchTerm.value)
  .done(function(data){
    var item;
    for(var i = 0; i<data.items.length; i++){
      item = data.items[i];
      $(`<div>
          <h2> ${item.name}</h2>
          <p> ${item.language} </p>
          <p> stars: ${item.stargazer_count} </p>
          <img src=${item.owner.avatar_url} />
        </div>
      `).appendTo('body');
    }
  });
});

function searchGithub(searchTerm){
  return $.getJSON('https://api.github.com/search/repositories?q=topic:' + searchTerm);
}
