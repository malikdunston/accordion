const accordion = function(data, elem){
	if(typeof data == "string"){
		elem.innerHTML = data;
	} 
	else if(typeof data == "object"){
		if (Array.isArray(data)){
			data.forEach(arrChild => {
				console.log(typeof arrChild);
			})
		}else{

		}
		for(key of Object.keys(data)){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
		// btn
			btn.innerHTML = key;
			btn.addEventListener("click", ()=>{
				btn.parentElement.classList.toggle("open");
			});
		// cont
			// if(typeof data[key] == "string"){
			// 	cont.innerHTML = data[key];
			// } 
			// if(typeof data[key] == "object"){
				accordion(data[key], cont);
			// }
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
	}
	return elem;
}