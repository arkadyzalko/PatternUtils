module navigators {
  export interface Visitor {
    visit: (part: Part) => void;
  }

  export class Part {
    accept: (vistor: Visitor) => void = function(visitor: Visitor) {
      visitor.visit(this);
    }  
  }

  export class MethodVisitor implements Visitor {
    fnName: string;
    constructor(fnName: string) {
      this.fnName = fnName;
    }
    visit: (part: Part) => void = function(part: Part) {
      part[this.fnName] instanceof Function ? part[this.fnName]() : null;
    }
  }

  export class TopDownNavigator {
    visitor: Visitor;
    compositeClass: any;
    children: string;

    constructor(visitor: Visitor, compositeClass: any, children: string) {
      this.visitor = visitor;
      this.compositeClass = compositeClass;
      this.children = children;
    }

    navigateAndApplyVisitor: (part: Part) => void = function(part: Part) {
      part.accept(this.visitor);
      if(part instanceof this.compositeClass) {
        for (var i in part[this.children]) {
          this.navigateAndApplyVisitor(part[this.children][i]);
        }        
      }
    }
  }
}
