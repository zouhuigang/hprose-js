/**********************************************************\
|                                                          |
|                          hprose                          |
|                                                          |
| Official WebSite: http://www.hprose.com/                 |
|                   http://www.hprose.org/                 |
|                                                          |
\**********************************************************/

/**********************************************************\
 *                                                        *
 * BinaryString.js                                        *
 *                                                        *
 * hprose BinaryString for JavaScript.                    *
 *                                                        *
 * LastModified: Feb 22, 2016                             *
 * Author: Ma Bingyao <andot@hprose.com>                  *
 *                                                        *
\**********************************************************/

/* jshint -W067 */
(function (global) {
    'use strict';

    var defineProperties = global.hprose.defineProperties;
    var createObject = global.hprose.createObject;

    function BinaryString(bs) {
        if (/^[\x00-\xff]*$/.test(bs)) {
            defineProperties(this, {
                length: { value: bs.length },
                toString: { value: function() { return bs; } },
                valueOf: { value: function() { return bs; } }
            });
        }
        else {
            throw new Error("argument is not a binary string.");
        }
    }

    var methods = {};

    ['quote', 'substring', 'toLowerCase', 'toUpperCase',
     'charAt', 'charCodeAt', 'indexOf', 'lastIndexOf',
     'include', 'startsWith', 'endsWith', 'repeat',
     'trim', 'trimLeft', 'trimRight',
     'toLocaleLowerCase', 'toLocaleUpperCase',
     'match', 'search', 'replace', 'split',
     'substr', 'concat', 'slice'].forEach(function(name) {
         methods[name] = { value: String.prototype[name] };
    });

    BinaryString.prototype = createObject(null, methods);
    BinaryString.prototype.constructor = BinaryString;

    global.hprose.BinaryString = BinaryString;
    global.hprose.binary = function(bs) { return new BinaryString(bs); };

}(function() {
    return this || (1, eval)('this');
}()));
