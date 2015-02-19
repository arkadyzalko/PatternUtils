module visitors {
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

  export class LambdaVisitor implements Visitor {
    fnName: string;
    constructor(visit: (part: Part)=> void) {
      this.visit = visit;
    }
    visit: (part: Part) => void;
  }
}
