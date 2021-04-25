const accordion = function(data, elem){
	let $data = []; // normalize everything into an array...
	if(typeof data == "string"){
		$data.push(data);
		for(item of $data){
			elem.innerHTML = item;
		}
	}else if(typeof data == "object" && !Array.isArray(data)){
		Object.keys(data).forEach(key => {
			$data.push([key, data[key]]);
		});
		compile($data)
	}else if(Array.isArray(data)){
		$data = data;
		for(item of $data){
			let cont = document.createElement("div"), fold = document.createElement("div");
		// cont
			accordion(item, cont);
		// fold
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
	}
	function compile($data){
		for(item of $data){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
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
		}
	}
	return elem;
}