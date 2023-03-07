import {namesOne, namesTwo} from './names.js';
const inputField = document.getElementById('submitSection__input');
const submitBtn = document.querySelector('.submitSection__btn');
const orderedList = document.querySelector('ol');
const getFullName = () =>{
    const firstName = namesOne[parseInt(Math.random() * 10)];
    const secondName = namesTwo[parseInt(Math.random() * 10)];
    return firstName + secondName;
}

const createLi = (mainCategory, name) =>{
    const li = `
        <li>
            ${mainCategory}
            <ul>
                <li>${name}s${mainCategory}</li>
                <li>${mainCategory}With${name}</li>
            </ul>
        </li>
    `
    return li;
}

submitBtn.addEventListener('click', event =>{
    event.preventDefault();
    let firstName = inputField.value;
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    orderedList.innerHTML = '';
    inputField.value = '';
    inputField.focus();
    const randomFullName = [];
    while(randomFullName.length !== 4){
        const fullName = getFullName();
        if(!(randomFullName.includes(fullName))){
            randomFullName.push(fullName);
            orderedList.innerHTML += createLi(fullName, firstName);
        }
    }
})