(function(){
    "use strict";
    const flatten=require('flat');
    var myObj = [5, [22], [[14]], [[4]],[5,6]];
    console.log(myObj.join(','));
    var arr=flatten(myObj,2);
    console.log(Object.values(arr));
})();