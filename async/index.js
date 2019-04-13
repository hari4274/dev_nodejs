console.log("App started");

setTimeout(() => {
    console.log("Data added after 2 sec");
}, 2000);

setTimeout(() => {
    console.log("Second timeout");
}, 0);

console.log("App End");