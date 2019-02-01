a = (a,b,callback) =>{

    console.log("a + b",a+b);

    callback();
}


b = () =>{

    console.log("Hello Hari")
}

a(100,200,b)