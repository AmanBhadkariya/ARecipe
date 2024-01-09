let container = document.querySelector('#container');


function getRecipe(url){
document.getElementById("heroSec").style.height = "30vh";
fetch(url)
.then(response => response.json())
.then( (response) => {
  console.log(response);
	console.log((response.d).length);
    let out ="";
    for( let i = 0 ; i < (response.d).length ; i++){
     out += 
    `
    <a class="card" >
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

let types = ["Italian" , "Chinese" , "Japanese" , "Indian" , "French" , "Korean" ,"Spanish"];
let imageLinks = ["//20fix.com/xfood/img/italian-vegetable-stew-51149120.jpg",
"//20fix.com/xfood/img/chinese-egg-noodles-with-smoked-duck-and-snow-peas-354302.jpg",
"//20fix.com/xfood/img/traditional-japanese-breakfast-369329.jpg",
"//20fix.com/xfood/img/roasted-cauliflower-with-indian-barbecue-sauce-239826.jpg",
"//20fix.com/xfood/img/french-toast-fingers-with-chocolate-hazelnut-spread-and-blueberries.jpg",
"//20fix.com/xfood/img/korean-style-grilled-wings-with-cucumber-kimchi-salad.jpg",
"//20fix.com/xfood/img/spanish-tortilla-51112610.jpg"

];
let cont = document.querySelector('#container').children;

let ty = "";
for( let i = 0 ; i < 7 ; i++){
    ty += 
   `
   <a class="card" >
         <img src="${imageLinks[i]}" alt="Card Image">
         <div class="card-content">
             <div class="card-title">${types[i]}</div>
         </div>
     </a>`;
       container.innerHTML = ty;
   }

   for(let j = 0 ; j < 7 ; j++){
    cont[j].addEventListener('click', () => {
         let url = "/foodjson/" + types[j] + ".json";
        getRecipe(url)
    });
}

