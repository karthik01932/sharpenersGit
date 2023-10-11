// localStorage.setItem('name','karthik');
// console.log(localStorage.getItem('name'));

// sessionStorage.setItem('name','j ohn');
// // sessionStorage.getItems('name');

// document.cookie = 'name=kyle; expires=' + new Date(2023,10,20).toUTCString();
// document.cookie = 'lastName=smith; expires=' + new Date(2023,10,20).toUTCString();
// console.log(document.cookie); 
let myobj = {
    name : "mary",
    age : 24
};

let myobj_serialized = JSON.stringify(myobj);
// console.log(myObj_serialized);
localStorage.setItem('object',myobj_serialized ); //(key,value);

let myobj_deserialized = JSON.parse(localStorage.getItem("object"));
console.log(myobj_deserialized);
// console.log(localStorage);