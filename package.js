Package.describe({
  name: 'paulgrever:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "A pattern to display application errors to the user"
  // URL to the Git repository containing the source code for this package.
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('paulgrever:errors');
  api.addFiles('errors-tests.js');

  if (api.export) 
    api.export('Errors');
});
