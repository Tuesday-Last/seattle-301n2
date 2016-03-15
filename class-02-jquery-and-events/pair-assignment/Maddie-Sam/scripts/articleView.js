
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {

      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);


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
      $('article').hide();
      console.log('Value:' + $value);
      $('article[data-attribute = "'+ $value + '"]').fadeIn(2000);
    } else {
      $('article.not:.template template').fadeIn();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    var $value = $(this).val();
    if ($value) {
      $('article').hide();
      $('article[data-category = '+ $value +']').fadeIn(2000);
    }else {
      $('article.not:.template template').fadeIn();
    }
    $('#author-filter').val('');
  });

};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  $('#articles').on('click', function(event) {
    var $eventTarget = $(event.target);
    event.preventDefault();
    if ($eventTarget.hasClass('read-on')){
      $eventTarget.prev().children().fadeIn(1000);
      $eventTarget.hide();
    };
  });
};
$(document).ready(function (){
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
