declare module navigators {
    interface Visitor {
        visit: (part: Part) => void;
    }
    class Part {
        accept: (vistor: Visitor) => void;
    }
    class MethodVisitor implements Visitor {
        fnName: string;
        constructor(fnName: string);
        visit: (part: Part) => void;
    }
    class TopDownNavigator {
        visitor: Visitor;
        compositeClass: any;
        children: string;
        constructor(visitor: Visitor, compositeClass: any, children: string);
        navigateAndApplyVisitor: (part: Part) => void;
    }
}
