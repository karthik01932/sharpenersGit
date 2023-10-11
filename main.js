// console.log('hello world!');
// console.error('this is error');
// // let name = 'karthik';
// // console.log(name);
// alert('hello world!');


// objects
// const person = {
//     firstname:'john',
//     lastname: 'doe',
//     age:10,
//     hobbies:['music','movies','sports'],
//     address:{
//         street:'50 main st',
//         city: 'boston',
//         state:'ma'
//     }
// }
// console.log(person.firstname); //john
// console.log(person);  //completed gets printed
// person.email = 'john@gmail.com'; //to add mailid to the person


// //  Taking out the firstname, lastname and city from the person object using destructuring and console log
// const { firstname, lastname, address:{city}}=person;
// console.log(city);

// // arrays of objects

// const todos = [
//     {
//         id:1,
//         text:'take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:'boss is in the meeting',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:'problems arises to face',
//         isCompleted: false
//     }
// ];

// // console.log(todos);
// // // to convert into formatted JSON form
// // const todosJSON = JSON.stringify(todos);
// // console.log(todosJSON);


// // for
// // for(let i=0;i<=10;i++){
// //     console.log(`for loop number: ${i}`);
// // }

// // while
// // let i=0;
// // while(i<10){
// //     console.log(`while loop number: ${i}`);
// // }

// // for(let todo of todos){
// //     console.log(todo.text);
// // } 

// // forEach,map, filter

// // todos.forEach(function(todo){
// //     console.log(todo.text);
// // })

// // const todotext = todos.map(function(todo){
// //     return todo.text;
// // });

// // console.log(todotext);

// // const todoCompleted = todos.filter(function(todo){
// //     return todo.isCompleted === text;
// // }).map(function(todo){
// //     return todo.text;
// // });
// // console.log(todoCompleted);


// // constructor function
// function Person(firstname,lastname,dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     // this.dob = dob;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getfullname = function(){
//     //     return `${this.firstname} ${this.lastname}`;
//     // }
//     Person.prototype.getfullname = function(){
//         return `${this.firstname} ${this.lastname}`;
//     }

// }
// // CLASS
// class Person{
//     constructor(firstname,lastname,dob){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = dob;
//     }
//     getBirthyear(){
//         return this.dob.getFullYear();
//     }
//     getfullname(){
//         return `${this.firstname} ${this.lastname}`;
 
//     }
// }

// // 

// // instantiate object
// const person1 = new Person('john','doe','4/3/2001');
// const person2 = new Person('karthik','srinivas','3/8/2010');

// // console.log(person1);
// // console.log(person2.firstname);

// console.log(person2.getfullname());




// console.log(window);

// single element selector
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("my-form"));


// // multiple element selector
// console.log(document.querySelectorAll('.items'));
// console.log(document.getElementsByClassName('.item'));
// console.log(document.getElementsByTagName('.li '));


//21 
// const ul = document.querySelector('.items');
// ul.children[0].innerText ='HELLO';

// const ul1 = document.querySelector('.item1');
// ul1.style.color = 'green';
// const ul2 = document.querySelector('.item2');
// ul2.style.color = 'yellow';

// 22
// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) =>{  //targetevent

//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = 'green';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello<h1>';
    
// });

// const myform = document.querySelector('#my-form');
// const nameinput = document.querySelector('#name');
// const emailinput = document.querySelector('#email');
// const msg = document.querySelector('#msg');
// const userlist = document.querySelector('#users');

// myform.addEventListener('submit', onsubmit);
// function onsubmit(e){
//     e.preventDefault();
//     // console.log(nameinput.value);
//     if(nameinput.value === '' || emailinput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'please enter all fields';
//         // alert('please enter all fields');
//         setTimeout(() => msg.remove(), 3000 );   

//     }else{
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));

//         userlist.appendChild(li);

//         nameinput.value = '';
//         emailinput.value = '';
//     }
// }

function addData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('userName',name);
    localStorage.setItem('useremail',email);
}