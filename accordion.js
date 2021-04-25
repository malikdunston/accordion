const accordion = function(data, elem){
	if(typeof data == "string" || typeof data == "number"){
		elem.innerHTML = data;
	}else if(typeof data == "object" && !Array.isArray(data)){
		let obj = [];
		Object.keys(data).forEach(key => {
			obj.push([key, data[key]]);
		});
		compile(obj)
	}else if(Array.isArray(data)){
		compile(data);
	}
	function compile(data){
		for(item of data){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
			if (item.length == 2){ // object!
			// btn
				btn.innerHTML = item[0];
				btn.addEventListener("click", ()=>{
					btn.parentElement.classList.toggle("open");
				});
			// cont
				accordion(item[1], cont);
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
			}else{ // array!
				accordion(item, cont);
			}
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
	}
	return elem;
}