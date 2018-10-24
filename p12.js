(function(){
    "use strict";
    var readline = require('readline-sync');
    var str = readline.question("Enter string: ");
    var letter = readline.question("Enter letter: ");
    var count=0;
    for(var v of str){
        if(v===letter){
            count++;
        }
    }
    console.log(count);
    
})();