'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");

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

var expected_000 = false;

var expected_001 = false;

var expected_002 = true;

var expected_003 = true;

var expected_004 = Caml_primitive.caml_int_compare(false, true);

var expected_005 = Caml_primitive.caml_int_compare(true, false);

var expected_006 = Caml_primitive.caml_int_compare(false, false);

var expected_007 = Caml_primitive.caml_int_compare(true, true);

var expected = /* tuple */[
  expected_000,
  expected_001,
  expected_002,
  expected_003,
  expected_004,
  expected_005,
  expected_006,
  expected_007
];

var expected2 = /* tuple */[
  false,
  false,
  true,
  true,
  -1,
  1,
  0,
  0
];

var u_000 = true === false;

var u_001 = false === true;

var u_002 = false === false;

var u_003 = true === true;

var u_004 = Caml_primitive.caml_int_compare(false, true);

var u_005 = Caml_primitive.caml_int_compare(true, false);

var u_006 = Caml_primitive.caml_int_compare(false, false);

var u_007 = Caml_primitive.caml_int_compare(true, true);

var u = /* tuple */[
  u_000,
  u_001,
  u_002,
  u_003,
  u_004,
  u_005,
  u_006,
  u_007
];

eq("File \"gpr496_test.ml\", line 42, characters 12-19", expected, u);

eq("File \"gpr496_test.ml\", line 44, characters 12-19", expected, expected2);

function ff(x, y) {
  return Caml_primitive.caml_int_min(x, Curry._1(y, /* () */0));
}

eq("File \"gpr496_test.ml\", line 48, characters 5-12", true < false ? true : false, false);

Mt.from_pair_suites("gpr496_test.ml", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.expected = expected;
exports.expected2 = expected2;
exports.u = u;
exports.ff = ff;
/* expected Not a pure module */
