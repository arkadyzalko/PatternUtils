/// <reference path="visitors.ts" />
module navigators {
  export class TopDownNavigator {
    compositeClass: any;
    children: string;

    constructor(compositeClass: any, children: string) {
      this.compositeClass = compositeClass;
      this.children = children;
    }

    navigateAndApplyVisitor: (part: visitors.Part, visitor: visitors.Visitor) => void = function(part: visitors.Part, visitor: visitors.Visitor) {
      part.accept(visitor);
      if(part instanceof this.compositeClass) {
        for (var i in part[this.children]) {
          this.navigateAndApplyVisitor(part[this.children][i]);
        }        
      }
    }
  }
}