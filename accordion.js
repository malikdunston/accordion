const accordion = function(data, elem){
	if(typeof data == "string"){
		elem.innerHTML = data;
	}else if(typeof data == "object" && !Array.isArray(data)){
		for(key of Object.keys(data)){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
		// btn
			btn.innerHTML = key;
			btn.addEventListener("click", ()=>{
				btn.parentElement.classList.toggle("open");
			});
		// cont
			accordion(data[key], cont);
		// fold
			fold.appendChild(btn);
			fold.appendChild(cont);
			fold.classList.add("fold");
			fold.addEventListener("mouseenter", ()=>{
				fold.classList.add("open");
			});
			fold.addEventListener("mouseleave", ()=>{
				fold.classList.remove("open");
			})
			elem.appendChild(fold);
		}
	}else if(Array.isArray(data)){
		for(item of data){
			let cont = document.createElement("div"), fold = document.createElement("div");
		// cont
			accordion(item, cont);
		// fold
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
	}
	return elem;
}