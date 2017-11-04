app.factory('ShoppingCartService', function() {
	var obj = {};

	var _cartItems = [];
	obj.cartQuantity = 0;

	obj.listAll = function() {
		return _cartItems;
	}

	obj.addItem = function(item, quantity) {
		var cartItem = { item: item, quantity: quantity };

		var existingCartItem = _cartItems.find(function(oldItem) {
			return oldItem.item.id === item.id;
		});

		if (existingCartItem) {
			existingCartItem.quantity += 1;
		} else {
			_cartItems.push(cartItem);
		}

		obj.cartQuantity += 1;
	
	}

	obj.removeItem = function(id) {
		var itemToDeleteIndex = _cartItems.findIndex(function(cartItem) {
			return cartItem.item.id === id;
		});

		if (itemToDeleteIndex > -1) {
			_cartItems.splice(itemToDeleteIndex, 1);
			obj.cartQuantity += 1;		
		}

	}

	obj.updateCartQuantity = function(item) {
		var quantity = 0;
		_cartItems.forEach(function(item) {
			quantity += item.quantity;
		});

		obj.cartQuantity = quantity;

	}

	return obj;
});
