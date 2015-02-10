var visitorsAndNavigators;
(function (visitorsAndNavigators) {
    var Part = (function () {
        function Part() {
            this.accept = function (visitor) {
                visitor.visit(this);
            };
        }
        return Part;
    })();
    visitorsAndNavigators.Part = Part;
    var MethodVisitor = (function () {
        function MethodVisitor(fnName) {
            this.visit = function (part) {
                part[this.fnName] instanceof Function ? part[this.fnName]() : null;
            };
            this.fnName = fnName;
        }
        return MethodVisitor;
    })();
    visitorsAndNavigators.MethodVisitor = MethodVisitor;
    var LambdaVisitor = (function () {
        function LambdaVisitor(visit) {
            this.visit = visit;
        }
        return LambdaVisitor;
    })();
    visitorsAndNavigators.LambdaVisitor = LambdaVisitor;
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
    visitorsAndNavigators.TopDownNavigator = TopDownNavigator;
})(visitorsAndNavigators || (visitorsAndNavigators = {}));
//# sourceMappingURL=navigators.js.map