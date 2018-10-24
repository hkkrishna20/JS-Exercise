var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniqueNames = [];
for (var i in names){

    if(!uniqueNames.includes(names[i]))
    {
    uniqueNames.push(names[i]);
}
}
console.log(uniqueNames);