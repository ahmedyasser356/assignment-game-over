const detailsBox = document.querySelector(".details-box")
export const detailsPage = document.querySelector(".details")
export const xIcon =document.getElementById("xIcon")

export function displayDetails(obj){
     let textHtml = `
      
      <div class="details-img col-md-4">
      <img src="${obj.thumbnail}" class="w-100" alt="">
      </div>
      <div class="details-des col-md-8">
       
      <h3>Title: ${obj.title}</h3>

      <p>Category: <span class="badge bg-info text-black p-1">${obj.genre}</span></p>
      <p>Platform: <span class="badge bg-info text-black p-1">${obj.platform}</span></p>
      <p>Status: <span class="badge bg-info text-black p-1">${obj.status}</span></p>
      
      <p class="the-description">
      ${obj.description}
      </p>
      <button class="btn  btn-show-custom "><a target="_blank" href="${obj.game_url}">Show Game</a></button>
    </div>
     `
     detailsBox.innerHTML = textHtml
   }
   
 