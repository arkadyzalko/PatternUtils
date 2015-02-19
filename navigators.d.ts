/// <reference path="visitors.d.ts" />
declare module navigators {
    class TopDownNavigator {
        compositeClass: any;
        children: string;
        constructor(compositeClass: any, children: string);
        navigateAndApplyVisitor: (part: visitors.Part, visitor: visitors.Visitor) => void;
    }
}
