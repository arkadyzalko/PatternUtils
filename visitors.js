var visitors;
(function (visitors) {
    var Part = (function () {
        function Part() {
            this.accept = function (visitor) {
                visitor.visit(this);
            };
        }
        return Part;
    })();
    visitors.Part = Part;
    var MethodVisitor = (function () {
        function MethodVisitor(fnName) {
            this.visit = function (part) {
                part[this.fnName] instanceof Function ? part[this.fnName]() : null;
            };
            this.fnName = fnName;
        }
        return MethodVisitor;
    })();
    visitors.MethodVisitor = MethodVisitor;
    var LambdaVisitor = (function () {
        function LambdaVisitor(visit) {
            this.visit = visit;
        }
        return LambdaVisitor;
    })();
    visitors.LambdaVisitor = LambdaVisitor;
})(visitors || (visitors = {}));
//# sourceMappingURL=visitors.js.map