;(function() {

	var app = this.nb;

	app.factory("homeService", function() {
		var srcStr = 'assets/images/home/wife', descStr = 'wife';
		var homeDirectiveData = [];
		for(var i = 0; i < 50; i++) {
			var num = i % 7 + 1;
			var obj = {
				src: srcStr + num + '.jpg',
				desc: descStr +  num
			}
			homeDirectiveData.push(obj);
		}

		console.log(homeDirectiveData);




		return {
			homeDirectiveData: homeDirectiveData
		}
	})

})()