/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Czarina Ecraela",
    photo: "images/Czarina_Headshot.jpg",
    favoriteFoods: [
        'Sinigang',
        'Icecream', 
        'Fried chicken', 
        'Cheesecake'
    ],

    hobbies: [
        'Sleeping',
        'Drawing', 
        'Singing', 
        'Watching'
    ],

    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Tarlac, Philippines',
        length: '19 Years'
    },

    {
        place: 'Pampanga, Philippines',
        length: '1+ Year'
    },

    {
        place: 'La Union, Philippines',
        length: '2+ Years'
    }

);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}); 

/* Hobbies List */
myProfile.hobbies.forEach (hobby =>{
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
}); 

/* Places Lived DataList */

myProfile.placesLived.forEach (place =>{
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}); 
