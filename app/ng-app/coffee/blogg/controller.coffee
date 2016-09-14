angular.module 'tyraApp.blogg', [ 'Parse' ]
angular.module('tyraApp.blogg').config [
  'ParseProvider'
  '$routeProvider'
  (ParseProvider, $routeProvider) ->
    ParseProvider.initialize 'VjiLfLONSY5lfv96XNG08Ey1rsIik8VKZD3jvvUk', 'BCBkGNutwvP7hfiMTLT4mro54y80LksfSWLjHURJ'
    $routeProvider.when '/blogg',
      controller: 'bloggController'
      templateUrl: 'ng-app/blogg/view.html'
    return
]

###*
# Controller for view Blogg page
###

angular.module('tyraApp.blogg').controller 'bloggController', ($scope, $rootScope, Blogg) ->
  $rootScope.title = 'Tyra App | Blogg'
  $rootScope.bodyClass = 'skin-blue'

  $scope.load = ->
    Blogg.query(include:'images,blogg_author', order:'-createdAt').then (blogg_docs) ->
      $scope.blogg_docs = blogg_docs

  $scope.load()
