(function(){
    "use strict";
    var obj = {
        "One":"1",
        "Two":"2",
        "Three":"3",
        "Four":"4"
        }
    var arr=[];
    for(var i in obj){
        arr.push(obj[i]);
    }
    console.log(arr);
})();