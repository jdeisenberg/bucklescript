'use strict';

var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

if (!true) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "esmodule_ref.ml",
          4,
          3
        ]
      ];
}

console.log(/* boolean */0);

/*  Not a pure module */
