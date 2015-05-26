Package.describe({
  name: 'koolaid1551:ionicons-stylus',
  summary: "Ionic's Ionicons library in Stylus and bundled for Meteor.",
  version: '0.1.6',
  git: 'https://github.com/koolaid1551/ionicons-stylus'
});

Package.onUse(function(api) {
  //disabled versionsFrom for now - causing trouble on windows
  //api.versionsFrom('1.0');

  //api.use("stylus", ["server"]);
  //api.imply("stylus", ["server"]);
  //using s-jeet since the stylus package is currently out of date
  //https://github.com/meteor/meteor/pull/3749
  api.use("cryptoquick:stylus-multi", ["server"]);
  api.imply("cryptoquick:stylus-multi", ["server"]);

  api.addFiles([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff'
  ], 'client');

  api.addFiles([
    'stylus/_ionicons-animation.styl',
    'stylus/_ionicons-font.styl',
    'stylus/_ionicons-icons.styl',
    'stylus/_ionicons-variables.styl'
  ], 'server');

  api.addFiles('_ionicons.styl', 'server');
});
