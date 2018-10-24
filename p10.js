(function(){
    "use strict";
    var student =[ 
        {
        name : "David Rayy",
        marks : 80,
        grade :null
        },
        {
            name : "Vinoth",
            marks : 77 ,
            grade:null
        },
        {
            name : "Divya",
            marks : 88 ,
            grade:null
        },
        {
            name : "Ishitha",
            marks : 95 ,
            grade:null
        },
        {
            name : "Thomas",
            marks : 68 ,
            grade:null
        },
    ];
    var sum=0;
    for(var v of student){
        sum=sum+v.marks;
        if(v.marks<60){
            v.grade='F';
        }
        else if(v.marks<70){
            v.grade='D';
        }
        else if(v.marks<80){
            v.grade='C';
        }
        else if(v.marks<90){
            v.grade='B';
        }
        else if(v.marks<100){
            v.grade='A';
        }

    }
    console.log("Avg: "+sum/student.length);
    console.log(student);
})();