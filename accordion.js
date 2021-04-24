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
		switch (typeof data[key]){
			case "string" : 
				cont.innerHTML = data[key];
				break;
			case "object" : 
				accordion(data[key], cont);
				break;
		}
	// cont, btn -> fold -> elem -> ... -> .accordion
		fold.appendChild(cont);
		elem.appendChild(fold);
	}
	return elem;
}

// let domElem = accordion(siteData, document.querySelector(".accordion:nth-of-type(1)"));