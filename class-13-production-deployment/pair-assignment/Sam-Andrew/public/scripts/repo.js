(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor this ajax call into a get request to the proxy end point provided by server.js.

  repos.requestRepos = function(callback) {
    $.ajax({
        url: 'http://localhost:3000',
        type: 'POST'
        data: proxyGitHub(),
      success: function(data, message, xhr) {
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
