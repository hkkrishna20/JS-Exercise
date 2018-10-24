var prompt = require('prompt');   prompt.start();
 prompt.get(['number'], function (err, result) {

 
   console.log('Command-line input received:');
   console.log('  number: ' + result.number);
   var str=result.number;
   var result=[str[0]]; 
    for(let x=1; x<str.length; x++)
   {
     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
      {
       result.push('-', str[x]);
      }
     else
      {
       result.push(str[x]);
      }
   }
 console.log(result.join(''));
  });
