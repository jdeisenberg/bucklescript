'use strict';

var Nightmare = require("nightmare");

var v = Nightmare({
      show: /* boolean */1
    });

exports.v = v;
/* v Not a pure module */
