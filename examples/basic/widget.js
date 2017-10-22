(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-owl/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-owl/widget"));
  } else {
    root["basic-example/widget"] = factory(root["mu-jquery-widget-owl/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/owl/initialized": function() {
      console.log("initialized");
    }
  });
});