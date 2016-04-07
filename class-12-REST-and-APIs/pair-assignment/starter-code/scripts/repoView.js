(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

<<<<<<< HEAD
  // TODO: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) {

  };
=======
  // TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var render;
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#about ul').append(
<<<<<<< HEAD
      repos.with('forks_count').map(render)
=======
      // REVIEW: we added the `name` property here as our initial filter property. Try
      // changing it to see what happens!
      repos.with('name').map(render)
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604
    );
  };

  module.repoView = repoView;
})(window);
