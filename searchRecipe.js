const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ENTER-YOUR-KEY-HERE',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};
const getRecipe = (foodName) =>{
document.getElementById("heroSec").style.height = "50vh";

let container = document.querySelector('#container');
fetch(url + foodName , options )
.then(response => response.json())
.then( (response) => {
    console.log(response);
	console.log((response.d).length);
    if(((response.d).length) == 0){
        container.innerHTML =  `<h1> No recipe found. Try something else </h1>`
    }
    
    let out ="";
    for( let i = 0 ; i < (response.d).length ; i++){
     out += 
    `
    <a class="card" id="box${i}" >
          <img src="${response.d[i].Image}" alt="Card Image">
          <div class="card-content">
              <div class="card-title">${response.d[i].Title}</div>
          </div>
      </a>`;
        container.innerHTML = out;
    }
    let cont = document.querySelector('#container').children;

    function contentFunction(i,container){
        let ingred = "";
        let k = 0;
        for( ing in response.d[i].Ingredients){
            ingred += `
          <h4>${Object.values(response.d[i].Ingredients)[k]}</h4>
          `;
          k++;
        }
        s = `
        <div class="food-container">
      <img class="food-image" src="${response.d[i].Image}" alt="Food Photo">
      <div class="food-details">
        <div class="food-name">${response.d[i].Title}</div>
        <div class="ingredients-list">
          <h3>Ingredients:</h3>
          ${ingred}
        </div>
        <div class="recipe">
          <h3>Recipe:</h3>
          <span>${response.d[i].Instructions}</span>
        </div>
      </div>
    </div>`;
    container.innerHTML = s;
    }

    for(let j = 0 ; j < (response.d).length ; j++){
        cont[j].addEventListener('click', () => {
            contentFunction(j,container);
            
        });
    }
}
);
}
const foodName = document.querySelector("#food-name")
const btn = document.querySelector("#btn");
btn.addEventListener("click",(e) =>{
    e.preventDefault();
    getRecipe(foodName.value);
})


