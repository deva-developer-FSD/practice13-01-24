////////////......... array........///////////////////////////

var arr = [1,2,3,45,6,7,7,7,8];
console.log(arr);
arr[10]=100;
console.log(arr);

// .............object...............//

var obj={
    deva:"fsd dev",
    dob:"7/3/2001",
    native:"karur",
    height:"tall",

}
console.log(obj.dob);

////////////.........for in........///////////////////////////

var obj={
    deva:"fsd dev",
    dob:"7/3/2001",
    native:"karur",
    height:"tall",

}
for( var a in obj){
    console.log(a,obj[a]);
}

////////////...........ARROW function.........///////////////////////////

var myDet=(dev,b,c)=>{
    return dev+b+c
};
console.log(myDet("deva",";","23"));



