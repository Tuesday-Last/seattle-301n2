(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  //We are declaring the function articleData but not calling it and then passing in uncalled to article.findWhere with will call it after filtering the articals by the passed in ID and set ctx.articals to just those filtered articles
 //routes.page('/article/:id')-> articlesController.loadById->Article.findWhere->articlesController.loadById.articleData
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  //this function's purpose is to loads the filtered list of articles, and removes spaces from the queried articles
  //this function calles Article.findWhere with ctx, findWhere queries the DB and then calls articlesController.loadByAuthor's var authorData with the returned articles
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  //this function's purpose is to load the filtered list of articles based on the passed in category
  //this function calles Article.findWhere with ctx, findWhere queries the DB and then calls articlesController.loadByCategory var catagoryData with the returned articles
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // This function loads all the the articles, fist it checkes to see if Article.all is populated, sets ctx.articles to Article.all if it is if not if alls Article.fetchAll wich will call articleData once Article.fetchAll completes it's queary.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
