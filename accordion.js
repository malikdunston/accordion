const accordion = function(data, elem){
	for(key of Object.keys(data)){
		console.log(data, key, data[key]);
	// each prop gets a div.fold...
	// its the wrapper for each prop...
		let fold = document.createElement("div");
		fold.classList.add("fold", key);
	// each fold has to have two children...
		let btn = document.createElement("button");
		let cont = document.createElement("div");
	// button gets key's name for now...
		btn.innerHTML = key;

	// 	let button = document.createElement("button");
	// 	button.innerHTML = key;
	// 	let wrapper = document.createElement("div");
	// 	// wrapper.classList.add(key);
	// 	wrapper.appendChild(button);




	// figuring out what to put into the container...
		switch (typeof data[key]){
			case "string" : 
				cont.innerHTML = data[key];
				break;
			case "object" : 
	// 			wrapper.classList.add("fold");
				accordion(data[key], cont);
				break;
		}
		// elem.appendChild(wrapper);
		fold.appendChild(btn);
		fold.appendChild(cont);
		elem.appendChild(fold);
	}
	return elem;
}







let domElem = accordion(siteData, document.querySelector(".accordion:nth-of-type(1)"));
document.querySelectorAll(".fold > *:nth-child(1)").forEach(elem => {
	elem.addEventListener("click", ()=>{
		elem.parentElement.classList.toggle("open");
	})
});
console.log(domElem);
console.log(document.querySelector(".accordion:nth-of-type(2)"));
