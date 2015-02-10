var navigators;
(function (navigators) {
    var Part = (function () {
        function Part() {
            this.accept = function (visitor) {
                visitor.visit(this);
            };
        }
        return Part;
    })();
    navigators.Part = Part;
    var MethodVisitor = (function () {
        function MethodVisitor(fnName) {
            this.visit = function (part) {
                part[this.fnName] instanceof Function ? part[this.fnName]() : null;
            };
            this.fnName = fnName;
        }
        return MethodVisitor;
    })();
    navigators.MethodVisitor = MethodVisitor;
    var TopDownNavigator = (function () {
        function TopDownNavigator(visitor, compositeClass, children) {
            this.navigateAndApplyVisitor = function (part) {
                part.accept(this.visitor);
                if (part instanceof this.compositeClass) {
                    for (var i in part[this.children]) {
                        this.navigateAndApplyVisitor(part[this.children][i]);
                    }
                }
            };
            this.visitor = visitor;
            this.compositeClass = compositeClass;
            this.children = children;
        }
        return TopDownNavigator;
    })();
    navigators.TopDownNavigator = TopDownNavigator;
})(navigators || (navigators = {}));
//# sourceMappingURL=navigators.js.map