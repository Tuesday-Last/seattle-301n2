var articles = [];

<<<<<<< HEAD
<<<<<<< HEAD
function Article (objt) {
  this.title = objt.title;
  this.category = objt.category;
  this.author = objt.author;
  this.authorURL = objt.authorURL;
  this.publishedOn = objt.publishedOn;
  this.body = objt.body;
};
=======
function Article (opts) {
  // TODO: Use the js object passed in to complete this contructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
}
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);

  // TODO: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // TODO: This cloned article is no longer a template, so we should remove that class...

  return $newArticle;
<<<<<<< HEAD
};
=======
function Article (opts) {
  // TODO: Use the js object passed in to complete this contructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);

  // TODO: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // TODO: This cloned article is no longer a template, so we should remove that class...

  return $newArticle;
}
>>>>>>> 2530535780f344b9ad972cced14d67763c433b55
=======
}
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
})
>>>>>>> 2530535780f344b9ad972cced14d67763c433b55
=======
})
>>>>>>> 849def463d4047f397eccae7148e95f6b7718604

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
