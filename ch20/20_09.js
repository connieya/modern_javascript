// (function (){
//     'use strict';
//
//     var x = 1;
//     delete x; // Delete of an unqualified identifier in strict mode.
//
//     function foo(a){
//         delete a; // Delete of an unqualified identifier in strict mode.
//     }
//     delete foo; // Delete of an unqualified identifier in strict mode.
// }());