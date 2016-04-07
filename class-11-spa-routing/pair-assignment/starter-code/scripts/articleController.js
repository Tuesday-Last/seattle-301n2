(function(module) {
  var articlesController = {};

  // TODO: Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
<<<<<<< HEAD
    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
      $('#about').hide();
      $("#articles").fadeIn();
    // });

  };
=======

  };

>>>>>>> 849def463d4047f397eccae7148e95f6b7718604
  module.articlesController = articlesController;
})(window);
