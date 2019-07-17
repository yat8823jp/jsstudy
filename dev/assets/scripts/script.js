console.log( "sample" );
let hello = function( bb ) {
  console.log( bb );
}
hello( "ak" );

let obj = new Object();
obj.var1 = "hello";

obj.func = function() {
    alert( "world" );
}

alert( obj.var1 );
obj.func();
