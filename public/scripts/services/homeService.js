;(function() {

	var app = this.nb;

	app.factory("homeService", function() {
		var homeDirectiveData = [
			{
				src: 'assets/images/home/wife1.jpg',
				desc: 'wife1'
			},
			{
				src: 'assets/images/home/wife2.jpg',
				desc: 'wife2'
			}
		]




		return {
			homeDirectiveData: homeDirectiveData
		}
	})

})()