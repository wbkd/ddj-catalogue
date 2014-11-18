class ClassName {

  //class constructor
  constructor(a, b) { 
    this.className = 'className';
    this.a = a;
    this.b = b;
  }

  //class method
  methodName() { 
    console.log('Test');

    return this;
  }
}

module.exports = ClassName;