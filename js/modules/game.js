export const gamesBox = document.querySelector(".games-box")
export const navbarList = document.querySelector(".navbar-nav")
export const loader = document.querySelector(".loader-page")
export const gamePage = document.querySelector(".games")

export function displayGames(list){
let textHtml=``
 
for(let i = 0;i<list.length;i++){
    textHtml += `
     <div class="col-xl-3 col-lg-4 col-md-6 game-item  ">
     <div data-id="${list[i].id}" class="inner border border-2 border-bottom-0 p-3 rounded-top-2 pb-1  border-dark">
           <img data-id="${list[i].id}" src="${list[i].thumbnail}" class="rounded-top-2" alt="">
           <div data-id="${list[i].id}" class="middle d-flex justify-content-between pt-3 align-items-center">
           <h6 data-id="${list[i].id}" class="mb-0 first-h6">${list[i].title}</h6>
           <h6 data-id="${list[i].id}" class="mb-0"><span class="badge bg-primary p-2">Free</span></h6>
           </div>
           
           <p data-id="${list[i].id}" class="text-center text-white-50 mt-2">${list[i].short_description}</p>
           
     </div>
     <footer data-id="${list[i].id}" class=" px-3 py-2 rounded-bottom-2 d-flex justify-content-between border position-relative  border-dark  border-top align-items-center">
       <p data-id="${list[i].id}" class="rounded-2 mb-0 category">${list[i].genre}</p>
       <p data-id="${list[i].id}" class="rounded-2 mb-0 platform">${list[i].platform}</p>
      </footer>
  </div>`
}
gamesBox.innerHTML = textHtml
}