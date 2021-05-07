(function () {
        angular.module("app", [])
	.controller("appCtrl", function () {
		let app = this;
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
		app.ex = obj;
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

				var acc = accordion(s.data, document.createElement("div"));

				// console.log(s, e[0], a);
				e[0].appendChild(acc)
			}
		}
        });
})()