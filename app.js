var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}
function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

    console.table(data.meals[0]);
  
    var container = document.getElementById('main-container');
    
       container.innerHTML = `<p>Meal ID: ${data.meals[0].idMeal}</p> 
       <p><B>Meal Name ${data.meals[0].strMeal}<B></p>
       <img src='${data.meals[0].strMealThumb}'>
       <p>Meal Title: ${data.meals[0].strMeal}</p>
       <p>Instructions: ${data.meals[0].strInstructions}</p>
       <button class="btn btn-secondary" onclick="moreDetails()">Show All</button>`;
      
  container.appendChild(newDiv);
  }