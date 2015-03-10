angular.module("cart", [])
.factory("cart", function () {

	var cartData = [];

	return {

		addProduct: function (id, name, price) {
			var addedToExisitingItem = false;
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i].id == id) {
					cartData[i].count++;
					addedToExisitingItem = true;
					break;
				}
			}
			if (!addedToExisitingItem)
		}
	}

}