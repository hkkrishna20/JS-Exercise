(function(){
    "use strict";
    var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
    var obj=JSON.parse(jsonStr);
    console.log(obj.jason);
    
})();