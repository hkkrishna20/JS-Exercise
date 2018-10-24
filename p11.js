(function(){
    "use strict";
    var readline = require('readline-sync');
    var str = readline.question("Enter string: ");
    console.log(str.split('').sort().join(''));
    
})();