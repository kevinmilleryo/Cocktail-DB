//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks [0].strDrinkThumb
      document.querySelector('.ingredients').innerText = data.drinks [0].strInstructions
      document.querySelector('#list1').innerText = data.drinks [0].strIngredient1
      document.querySelector('#list2').innerText = data.drinks [0].strIngredient2
      document.querySelector('#list3').innerText = data.drinks [0].strIngredient3
      document.querySelector('#list4').innerText = data.drinks [0].strIngredient4
      document.querySelector('#list5').innerText = data.drinks [0].strIngredient5
      document.querySelector('#list6').innerText = data.drinks [0].strIngredient6
      document.querySelector('#list7').innerText = data.drinks [0].strIngredient7
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
