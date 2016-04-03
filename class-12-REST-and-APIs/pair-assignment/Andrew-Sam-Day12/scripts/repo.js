var TEST = [];
(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    console.log(callback);
    $.ajax({
      type: 'GET',
      url:'https://api.github.com/user/repos',
      headers: { Authorization: 'token ' + token },
      success: function(data, status, xhr){
        repos.all = data;
        callback();
      },
      error: function(request, status, error){
        console.log('error:' + error)
      }
    });
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
