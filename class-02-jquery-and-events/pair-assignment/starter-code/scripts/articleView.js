// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      // DONE: We need to take every author name from the page, and make it an option in the Author filter.
      //       To do so, Build an `option` DOM element that we can append to the author select box.
      //       Start by grabbing the author's name from `this` article element, and then use that bit of
      //       text to create the option tag (in a variable named `optionTag`),
      //       that we can append to the #author-filter select element.
      //       YAY, DOM manipulation!
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      // DONE: Similar to the above, but...
      //       Avoid duplicates! We don't want to append the category name if the select
      //       already has this category as an option!
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    var $value = $(this).val();
    if ($value) {
      $("article").hide();
      console.log("Value:" + $value);
      $('article[data-attribute = '+ $value +']').fadeIn(2000);
    } else {
      $("article.not:.template template").fadeIn();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on("change", function() {
    var $value = $(this).val();
    if ($value) {
      $("article").hide();
      console.log("Value:" + $value);
      $('article[data-category = '+ $value +']').fadeIn(2000);
    }else {
      $("article.not:.template template").fadeIn();
    }
  });

};

articleView.handleMainNav = function() {
  $('.main-nav').on("click", 'li', function() {
    $(".tab-content").hide();
    $("#" + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('.read-on').on("click", function(e) {
    e.preventDefault();
    $('.read-on').parent().fadeIn();
    });
  // TODO: Add an event handler to reveal all the hidden elements,
  //       when the .read-on link is clicked. You can go ahead and hide the
  //       "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
  //       Ideally, we'd attach this as just 1 event handler on the #articles section, and let it
  //       process any .read-on clicks that happen within child nodes.

};

// TODO: Call all of the above functions, once we are sure the DOM is ready
$(document).ready(function (){
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
   });
