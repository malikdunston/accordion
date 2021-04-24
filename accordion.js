const accordion = function(data, elem){
	for(key of Object.keys(data)){
	// btn
		let btn = document.createElement("button");
		btn.innerHTML = key;
		btn.addEventListener("click", ()=>{
			btn.parentElement.classList.toggle("open");
		})
	// cont
		let cont = document.createElement("div");
		if(typeof data[key] == "string"){
			cont.innerHTML = data[key];
		} else if(typeof data[key] == "object"){
			accordion(data[key], cont);
		}
	// cont, btn -> fold -> elem -> ... -> .accordion
		let fold = document.createElement("div");
		fold.classList.add("fold", key);
		fold.appendChild(btn);
		fold.appendChild(cont);
		elem.appendChild(fold);
	}
	return elem;
}

sum = document.createElement("article");

let make = function(elem){
	sumElse = document.createElement("button");
	sumElse.innerHTML = "button";
	elem.appendChild(sumElse);
	return elem;
}

console.log(make(sum));