// wsh.js
// 2006-08-15

// This is the WSH companion to fulljslint.js.
/*
Copyright (c) 2002 Douglas Crockford  (www.JSLint.com) WSH Edition
*/

/*extern JSLINT, WScript */

(function () {
    if (!JSLINT(WScript.StdIn.ReadAll(), {passfail: true})) {
        var e = JSLINT.errors[0];
        WScript.StdErr.WriteLine('Lint at line ' + (e.line + 1) +
            ' character ' + (e.character + 1) + ': ' + e.reason);
        WScript.StdErr.WriteLine((e.evidence || '').
            replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
        WScript.Quit(1);
    }
})();