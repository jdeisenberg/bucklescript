'use strict';

var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

if (false) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "esmodule_ref.ml",
          4,
          3
        ]
      ];
}

console.log(false);

/*  Not a pure module */
