/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Czarina Ecraela';
let currrentYear = '2023';
let profilePicture = 'images/Czarina_Headshot.jpg';

/* Step 3 - Element Variables */
const nameElement =  document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)


/* Step 5 - Array */
const favoriteFood = ['Sinigang', 'Icecream', 'Fried chicken', 'Cheesecake', ];

foodElement.innerHTML = favoriteFood;

const otherFood = 'Carbonara';
favoriteFood.push(otherFood);

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;







