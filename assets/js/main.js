import {
  getAllDatas,
  getDataById,
  createData,
  editDataById,
  deleteDataById,
} from "./service.js";
import { endpoint } from "./constant.js";


async function getPlants (){
    try {
        const plants = await getAllDatas(endpoint.products)
            console.log(plants);
            
        printCards(plants.data)
    } catch (error) {
        console.log(error)
    }
}


function printCards (plants) {
    const cards = document.querySelector(".cards")
    cards.innerHTML=""
    plants.forEach((plant) => {
        const cardWrapper = document.createElement("div")
        cardWrapper.className = "col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"
        cardWrapper.innerHTML = `<div class="card" style="width: 18rem">
              <img src="${plant.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${plant.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">$ ${plant.price}</li>
                <li class="list-group-item">${plant.rating}</li>
              
              </ul>
            </div>`;
            cards.appendChild(cardWrapper)
        
    });
    
}

getPlants()