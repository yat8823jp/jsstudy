var hello = function( bb ) {
  console.log( bb );
}
hello( "ak" );

var obj = new Object();
obj.var1 = "hello";

obj.func = function() {
    alert( "world" );
}

alert( obj.var1 );
obj.func();
