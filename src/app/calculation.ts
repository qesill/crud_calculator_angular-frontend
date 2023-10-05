export class Calculation {
    id?: number;
    equation?: string;
    result?: number;
    
    
    constructor(id?: number, equation?: string, result?: number) {
      this.id = id;
      this.equation = equation;
      this.result = result;
    }
  }