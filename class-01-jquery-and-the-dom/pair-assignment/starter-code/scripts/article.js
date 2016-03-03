var articles = [];

function Article (objt) {
  this.title = objt.title;
  this.category = objt.category;
  this.author = objt.author;
  this.authorURL = objt.authorURL;
  this.publishedOn = objt.publishedOn;
  this.body = objt.body;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);
  $newArticle.attr('author', this.author);
  $newArticle.attr("authorURL", this.authorURL);
  $newArticle.attr("title", this.title);
  $newArticle.attr("body", this.body);
  $newArticle.attr("publishedOn", this.publishedOn);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('.article-body').html(this.body)
  $newArticle.find("div.byline > address").html("<a href=" + this.authorURL + ">" + this.author + "</a>");
  $newArticle.find("div.byline > time").html(this.publishedOn);

  // TODO: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.

  // Include the publication date as a 'title' attribute to show on hover:
  
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn).hide();
  // $newArticle.attr("title").hover(function(){
  //     "publishedOn".show();
  //   });

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // TODO: This cloned article is no longer a template, so we should remove that class...

  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
