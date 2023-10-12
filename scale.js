function addData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    localStorage.setItem('username',name);
    localStorage.setItem('useremail',email);
    localStorage.setItem('usernumber',number);
}
const form = document.querySelector('#form');
const username = document.querySelector('#name');
const useremail = document.querySelector('#email');
const usernumber = document.querySelector('#number');
const userrecords = document.querySelector('#users');

form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    const li = document.createElement('li');
    var litext = document.createTextNode(`${username.value} - ${useremail.value} - ${usernumber.value}`);
    li.appendChild(litext);
    userrecords.appendChild(li);

    // delete
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(litext);
        userrecords.removeChild(li)
    }
    li.appendChild(deleteButton);
    userrecords.appendChild(li);

    // edit
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.onclick = () => {
        localStorage.removeItem(litext);
        userrecords.removeChild(li)
    }   
    li.appendChild(editButton);
    userrecords.appendChild(li);
}

