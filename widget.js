(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/widget"));
  } else {
    root["mu-jquery-widget-owl/widget"] = factory(root["mu-jquery-widget/widget"]);
  }
})(this, function (widget) {
  var slice = Array.prototype.slice;

  return widget.extend({
    "on/initialize": function () {
      var me = this;
      var $ = me.$;
      var $element = me.$element;

      ["initialize", "initialized", "resize", "resized", "refresh", "refreshed", "drag", "dragged", "translate", "translated", "change", "changed"].forEach(function (event) {
        $element.on(event + ".owl.carousel", function ($event) {
          $element.trigger($.Event($event, {
            type: "owl/" + event,
            item: $event.item,
            page: $event.page
          }), slice.call(arguments, 1));
        });
      });

      ["next", "prev", "to", "refresh", "replace", "add", "remove"].forEach(function (method) {
        me[me[method] ? method + "$owl" : method] = function () {
          $element.trigger(method + ".owl.carousel", arguments);
        };
      });

      $element.on("destroyed", function () {
        $element.trigger("destroy.owl.carousel");
      });

      $element.owlCarousel($element.data("mu-jquery-widget-owl"));
    }
  });
});