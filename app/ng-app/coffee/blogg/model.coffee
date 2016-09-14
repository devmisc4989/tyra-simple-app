angular.module('tyraApp.blogg').factory 'Blogg', ['Parse' 
	(Parse) ->
	  class blogg_doc extends Parse.Model
	    @configure 'blogg_doc', 'blogg_author', 'blogg_content', 'blogg_topic', 'blogg_department', 'images', 'school', 'createAt'
]