(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  angular.module('tyraApp.blogg').factory('Blogg', [
    'Parse', function(Parse) {
      var blogg_doc;
      return blogg_doc = (function(superClass) {
        extend(blogg_doc, superClass);

        function blogg_doc() {
          return blogg_doc.__super__.constructor.apply(this, arguments);
        }

        blogg_doc.configure('blogg_doc', 'blogg_author', 'blogg_content', 'blogg_topic', 'blogg_department', 'images', 'school', 'createAt');

        return blogg_doc;

      })(Parse.Model);
    }
  ]);

}).call(this);
