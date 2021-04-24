const accordion = function(data, elem){
	for(key of Object.keys(data)){
	// wrapper
		let fold = document.createElement("div");
		fold.classList.add("fold", key);
	// each fold has to have two children...
		let btn = document.createElement("button"), cont = document.createElement("div");
	// btn
		btn.innerHTML = key;
		btn.addEventListener("click", ()=>{
			btn.parentElement.classList.toggle("open");
		})
		fold.appendChild(btn);
	// cont
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

let sum = document.createElement("article");
let make = function(elem){
	sumElse = document.createElement("button");
	sumElse.innerHTML = "button";
	elem.appendChild(sumElse);
	return elem;
}
console.log(make(sum));