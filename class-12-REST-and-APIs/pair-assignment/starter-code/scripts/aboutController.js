(function(module) {
  var aboutController = {};

  aboutController.index = function() {
<<<<<<< HEAD
    $('#about').show().siblings().hide();

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.

=======
    // REVIEW: Look at this method chaning. What is being accomplished here?
    $('#about').show().siblings().hide();

    // TODO: Call a function to 'request' our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604
  };

  module.aboutController = aboutController;
})(window);
