(function(){
    "use strict";
    var readline = require('readline-sync');
    var email = readline.question("Enter email address: ");
    var format=/^[a-z0-9]+(\.\_?[\w\d]+)*@\w+(\.\w{2,3})+$/;
    if(format.test(email)){
        console.log("valid email");
    }
    else{
        console.log("invalid email");
    }
})();