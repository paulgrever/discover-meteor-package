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
  api.addFiles('errors.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('paulgrever:errors');
  api.addFiles('errors-tests.js');
});
