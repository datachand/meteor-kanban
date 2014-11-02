angular.module "demoApp", ["ngMeteor", "ui.sortable", "ui.bootstrap"]

Meteor.startup ->
  angular.bootstrap(document, ["demoApp"])
