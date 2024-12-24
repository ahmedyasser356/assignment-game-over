import { loader,displayGames,navbarList,gamesBox,gamePage } from "../js/modules/game.js";
import { displayDetails ,detailsPage,xIcon} from "./modules/details.js";

// ================================== get games api =================================

async function getGameApi(category) {
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7b1720fa1fmshc5aa46430a1bf15p12f4d9jsne8d59acc0689',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
 loader.classList.replace("d-none","d-flex")
 const api =  await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
 const data = await api.json()
 loader.classList.replace("d-flex","d-none")
  
  
  return data
  
  
} 


let x = await getGameApi(`mmorpg`)
displayGames(x)

navbarList.addEventListener("click",async function(e){
	let category =   e.target.getAttribute("id")
	let x = await getGameApi(category)
	displayGames(x)   })
	
// ==================================get details api=================================
	
 async function getApiDetails(id){   
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '7b1720fa1fmshc5aa46430a1bf15p12f4d9jsne8d59acc0689',
				'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
		}};
			loader.classList.replace("d-none","d-flex")
			const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
			const data = await response.json()
			loader.classList.replace("d-flex","d-none")
			return data
		}
		
		
		gamesBox.addEventListener("click",async function(e){
			gamePage.classList.add("d-none")
			detailsPage.classList.remove("d-none")
			let id = e.target.getAttribute("data-id")
			console.log(id);
			let h = await getApiDetails(id)
		    displayDetails(h)
 
		})
		
	 
			 
		 xIcon.addEventListener("click",function(){
			gamePage.classList.remove("d-none")
			detailsPage.classList.add("d-none")
		 })
		
		
		
		
		
		
		
  

 
 
  
 
  
  
  