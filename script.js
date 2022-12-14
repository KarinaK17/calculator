const add = function (a, b) {
    return a+b;
};

const subtract = function(a, b) {
    return a-b;
};

const multiply = function(a, b) {
    return a*b;
  };

  const divide = function(a, b) {
    if (b=0) {
        return "OOPS! You can't divide by '0'.";
    } else {
        return a/b;
    }
  };

  const operate = function(operator, a, b) {
    if (operator=="+") {
        add(a,b);
    } else if (operator=="-") {
        subtract(a,b);
    } else if (operator=="*") {
        multiply(a,b);
    } else if (operator=="/") {
        divide(a,b);
    } 
  }
  