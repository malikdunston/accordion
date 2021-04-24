const accordion = function(data, elem){
	for(key of Object.keys(data)){
		let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
	// btn
		btn.innerHTML = key;
		btn.addEventListener("click", ()=>{
			btn.parentElement.classList.toggle("open");
		});
	// cont
		if(typeof data[key] == "string"){
			cont.innerHTML = data[key];
		} else if(typeof data[key] == "object"){
			// start here with the array stuff...
			accordion(data[key], cont);
		}
	// fold
		fold.classList.add("fold");
		fold.appendChild(btn);
		fold.appendChild(cont);
		fold.addEventListener("mouseenter", ()=>{
			fold.classList.add("open");
		});
		fold.addEventListener("mouseleave", ()=>{
			fold.classList.remove("open");
		})
		elem.appendChild(fold);
	}
	return elem;
}