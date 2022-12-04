(function(){
    "use strict";
    const detailsform = document.querySelector("#Destination_details_form");
    detailsform.addEventListener("submit" , handleformsubmit);
    function handleformsubmit(event){
    event.preventDefault();

    const destName  = event.target.elements["name"].value;
    const destLocation  = event.target.elements["location"].value;
    const destPhoto  = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;
    
    for(let i=0; i<detailsform.lenght; i++){
        detailsform.elements[i].value = "";
    }
    //Create card here
    const destcard = createDestinationCard(destName, destLocation,destPhoto,destDesc);

    const wishlistContainer  = document.getElementById("destination_container");
    if(wishlistContainer.children.length===0){
        document.getElementById("title").innerHTML = "My wishList"
    }

    document.querySelector("destination_container").appendChild(destcard);
}
function createDestinationCard(name,location,photoURL,description){

    const card  = document.createElement("div");
    card.className =  "card";
    
    const img = document.createElement("img");
    img.setAttribute("alt", name);

    const constantPhotoURL = "images/signpost.jpg";
    if(photoURL.lengh === 0 ){
       img.setAttribute("src", constantPhotoURL);
    }
    else{
        img.setAttribute("src",photoURL);
    }
    card.appendChild(img);

    const cardBody =  document.createElement("div");
    cardBody.className = "card-body";
    

    const cardTitle =  document.createElement("h3");
    cardTitle.innerText = name;
    cardTitle.appendChild(cardTitle);

    const cardSubtitle =  document.createElement("h4");
    cardSubtitle.innerText = location;
    cardSubtitle.appendChild(cardSubtitle);

    if(description.lengh !== 0){
        const cardText = document.createElement("p");
        cardText.className ="card_text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click",removedestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;
}
function removedestination(event){
    const card = event.target.parentElement.parentElement;
    card.remove();
}
})();
