const accordion = function(data, elem){
	if(typeof data == "string" || typeof data == "number"){
		return (elem.innerHTML = data);
	}else if(typeof data == "object"){
		if(Array.isArray(data)){
			var obj = data;
		} else {
			var obj = Object.keys(data).map(key => {
				return [key, data[key]];
			});
		}
		for(item of obj){
			let fold = document.createElement("div");
			fold.classList.add("fold");
			let btn = document.createElement("button");
			let cont = document.createElement("div");
			if (item.length == 2){ // object!
				btn.innerHTML = item[0];
				btn.addEventListener("click", ()=>{
					btn.parentElement.classList.toggle("open");
					if (cont.style.maxHeight !== "0px"){
						cont.style.maxHeight = "0px";
					}else{
						cont.style.maxHeight = "500vh";
					}
				});
			// cont
				cont.style.cssText = "overflow: hidden; max-height: 0; margin: 0px;"
				accordion(item[1], cont);
			// fold
				// fold.appendChild(cont);
				elem.appendChild(fold);
			}else{ // array!
				accordion(item, cont);
			}
				fold.appendChild(btn);
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
		return elem;
	}
}

const old_accordion = function(data, elem){
	let obj = [];
	if(typeof data == "string" || typeof data == "number"){
		elem.innerHTML = data;
	}else if(typeof data == "object"){
		Object.keys(data).forEach(key => {
			obj.push([key, data[key]]);
		});
		if(Array.isArray(data)){
			obj = data;
		}
		for(item of obj){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
			if (item.length == 2){ // object!
			// btn
				btn.innerHTML = item[0];
				btn.addEventListener("click", ()=>{
					if (btn.parentElement.classList.contains("open")){
						btn.parentElement.classList.remove("open");
						cont.style.maxHeight = "0px";
					}else{
						btn.parentElement.classList.add("open")
						cont.style.maxHeight = "500vh";
						console.log(cont.scrollHeight);
					}
				});
			// cont
				cont.style.overflow = "hidden";
				cont.style.maxHeight = "0px";
				cont.style.margin = "0px";
				accordion(item[1], cont);
			// fold
				fold.appendChild(btn);
				fold.appendChild(cont);
				fold.classList.add("fold");
				elem.appendChild(fold);
			}else{ // array!
				accordion(item, cont);
			}
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
	}
	return elem;
}