'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");

var suites = [/* [] */0];

var test_id = [0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function () {
          return /* Eq */Block.__(0, [
                    x,
                    y
                  ]);
        })
    ],
    suites[0]
  ];
  return /* () */0;
}

function check_healty(check) {
  if (!check.a && !check.b) {
    return !check.c;
  } else {
    return /* false */0;
  }
}

function basic_not(x) {
  return !x;
}

function f(check) {
  if (check.x) {
    return check.y;
  } else {
    return /* false */0;
  }
}

eq("File \"gpr_904_test.ml\", line 23, characters 5-12", f({
          x: /* boolean */1,
          y: /* boolean */0
        }), /* boolean */0);

eq("File \"gpr_904_test.ml\", line 26, characters 5-12", check_healty({
          a: /* boolean */0,
          b: /* boolean */0,
          c: /* boolean */1
        }), /* boolean */0);

Mt.from_pair_suites("gpr_904_test.ml", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.check_healty = check_healty;
exports.basic_not = basic_not;
exports.f = f;
/*  Not a pure module */
