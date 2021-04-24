const obj = {
	wide_receivers: {
		about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! </br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! </br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! </br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
		wr_coaches: "<ul><li>Bob Johnson</li><li>Ted Wilson</li><li>Josh Belichick</li></ul>",
	},
	linebackers: "<h2>Depth Chart</h2><ul><li>Ju'Whaun Bentley</li><li>Dont'a Hightower</li><li>Kyle Van Noy</li></ul><div class='fold'><div>Linebacker Coaches</div><div><h5>Bob Johnson</h5><h5>Ted Wilson</h5><h5>Josh Belichick</h5></div></div>"
}
const app = document.querySelector("#app");
const accordion = function(data, elem){
	for(key of Object.keys(data)){
		let button = document.createElement("button");
		button.innerHTML = key;
		elem.classList.add("fold");
		let wrapper = document.createElement("div");
		wrapper.classList.add(key);
		wrapper.appendChild(button);
		switch (typeof data[key]){
			case "string" : 
				wrapper.innerHTML = data[key];
				break;
			case "object" : 
				accordion(data[key], wrapper);
				break;
		}
		elem.appendChild(wrapper);
	}
}
accordion(obj, app);
document.querySelectorAll(".fold > *:nth-child(1)").forEach(elem => {
	elem.addEventListener("click", ()=>{
		elem.parentElement.classList.toggle("open");
	})
});
console.log(app);
