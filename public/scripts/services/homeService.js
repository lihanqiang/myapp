;(function() {

	var app = this.nb;

	app.factory("homeService", function() {
		//nav json
		var navJson = [
			{
				name: "记忆中的你",
				position: "20px"
			},
			{
				name: "记忆中的笑",
				position: "70px"
			},
			{
				name: "记忆中的语",
				position: "120px"
			}
		];


		var imagesJson = [
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族1"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/27.JPG",
				desc: "羌族2"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/27.JPG",
				desc: "羌族3"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族4"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族5"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族6"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族7"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族8"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族9"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族10"
			},
			{
				name: "",
				id: "",
				src: "../assets/images/home/photos/1.JPG",
				desc: "羌族11"
			},
		]



		return {
			navJson: navJson,
			imagesJson: imagesJson
		}
	})

})()