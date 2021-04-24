const accordion = function(data, elem){
	for(key of Object.keys(data)){
		let button = document.createElement("button");
		button.innerHTML = key;
		let wrapper = document.createElement("div");
		// wrapper.classList.add(key);
		wrapper.appendChild(button);
		switch (typeof data[key]){
			case "string" : 
				wrapper.innerHTML = data[key];
				break;
			case "object" : 
				wrapper.classList.add("fold");
				accordion(data[key], wrapper);
				break;
		}
		elem.appendChild(wrapper);
	}
	return elem;
}
let domElem = accordion(siteData, document.querySelector(".accordion:nth-of-type(1)"));
document.querySelectorAll(".fold > *:nth-child(1)").forEach(elem => {
	elem.addEventListener("click", ()=>{
		elem.parentElement.classList.toggle("open");
	})
});
// console.log(app, document.querySelector("#example"));
