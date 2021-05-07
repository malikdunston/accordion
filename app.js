(function () {
        angular.module("app", [])
	.controller("appCtrl", function ($http) {
		let app = this;

		$http.get("http://api", {
			params: {
				institution: 1,
				children: 1
			}
		}).then((resp) => {
			let r = resp.data[0][0];
			// r.campuses = [1, 3, "orange", {xtra: "looky here"}]
			console.log(r);
			app.ex = r;
		});


		let arr =  [
			"Person",
			{about: 'Web Dev', age: "29"},
			{skills: [
				"PS",
				"VSCode"
			]}
		];
		let obj =  {
			name: arr[0],
			details: arr[1],
			work: arr[2]
		};
		let num = 20 + 24;
		let str = "hello i'm just a string. :) Shoutout to " + num
		// app.ex = obj;
	})
	.directive("accordion", function(){
		// function accordion(data, elem){
		// 	console.log(data, elem);
		// 	elem.innerHTML = data;
		// 	return elem;
		// }
		return {
			restrict: 'A',
			scope: {
				data: "<"
			},
			link: function(s, e, a){

				s.$watch("data", function(newVal, oldVal){
					var acc = accordion(newVal, document.createElement("div"));
					e[0].appendChild(acc)
				})


				// console.log(s, e[0], a);
			}
		}
        });
})()