/// <reference path="visitors.ts" />
var navigators;
(function (navigators) {
    var TopDownNavigator = (function () {
        function TopDownNavigator(compositeClass, children) {
            this.navigateAndApplyVisitor = function (part, visitor) {
                part.accept(visitor);
                if (part instanceof this.compositeClass) {
                    for (var i in part[this.children]) {
                        this.navigateAndApplyVisitor(part[this.children][i]);
                    }
                }
            };
            this.compositeClass = compositeClass;
            this.children = children;
        }
        return TopDownNavigator;
    })();
    navigators.TopDownNavigator = TopDownNavigator;
})(navigators || (navigators = {}));
//# sourceMappingURL=navigators.js.map