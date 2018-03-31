'use strict';


function compare(x, y) {
  switch (x) {
    case 0 : 
        return y === /* A */0;
    case 1 : 
        return y === /* B */1;
    case 2 : 
        return y === /* C */2;
    
  }
}

function compare2(x, y) {
  switch (x) {
    case 0 : 
        if (y !== 0) {
          return false;
        } else {
          return true;
        }
    case 1 : 
        if (y !== 1) {
          return false;
        } else {
          return true;
        }
    case 2 : 
        if (y >= 2) {
          return true;
        } else {
          return false;
        }
    
  }
}

function compare3(x, y) {
  return x === y;
}

exports.compare = compare;
exports.compare2 = compare2;
exports.compare3 = compare3;
/* No side effect */
