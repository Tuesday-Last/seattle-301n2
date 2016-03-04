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
  $newArticle.find('h1').text(this.title);
  $newArticle.find(".byline a").text(this.author).attr("href", this.authorURL);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find("div.byline > time").html(this.publishedOn);
  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  $newArticle.removeClass("template");
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
