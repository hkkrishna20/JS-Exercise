var names=["Mike","Matt","Nancy","Adam","Jenny","Carl"];
var names2=["Mike","Matt","Nancy"];
var uniqueNames = [];
for (var i in names)
{
    if(!names2.includes(names[i]))
    {
        uniqueNames.push(names[i]);
    }
}
for(var j in names2)
{
    if(!names.includes(names2[j]))
    {
        uniqueNames.push(names2[j])
    }
}
console.log(uniqueNames);