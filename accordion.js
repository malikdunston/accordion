const accordion = function(data, elem){
	for(key of Object.keys(data)){
	// wrapper
		fold = document.createElement("div");
		fold.classList.add("fold", key);
	// each fold has to have two children...
		btn = document.createElement("button"); cont = document.createElement("div");
	// btn
		btn.innerHTML = key;
		btn.addEventListener("click", ()=>{
			btn.parentElement.classList.toggle("open");
		})
		fold.appendChild(btn);
	// cont
		console.log(typeof data[key]);
		if(typeof data[key] == "string"){
			cont.innerHTML = data[key];
		} else if(typeof data[key] == "object"){
		// arrays are objects...
			accordion(data[key], cont);
			console.log("arrayyyyyyy");
		}
	// cont, btn -> fold -> elem -> ... -> .accordion
		fold.appendChild(cont);
		elem.appendChild(fold);
	}
	return elem;
}

// let domElem = accordion(siteData, document.querySelector(".accordion:nth-of-type(1)"));

function issaFunc(){
	thisVar = "Hello I'm ";
	var newVar = thisVar + "Malik";
	return newVar;
}
console.log(issaFunc());