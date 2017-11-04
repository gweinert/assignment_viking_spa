app.factory('ProductService', function() {

	var obj = {};

	var _categories = [{ id: '', name: 'All'}];
	var _products = [];

	var buildCategories = function() {
		for (var i = 0; i < 10; i++) {
			var category = {
				id: faker.random.uuid(),
				name: faker.commerce.department(),
			};
			
			_categories.push(category);
		}
	}
	buildCategories();
	
	var buildProducts = function() {
		for (var i = 0; i < 20; i++) {
			var randomInt = Math.floor(Math.random() * 9);
			var product = {
				id: faker.random.uuid(),
				name: faker.commerce.productName(),
				price: faker.commerce.price(),
				description: faker.lorem.sentences(),
				image: faker.random.image(),
				categoryId: _categories[randomInt].id,
			};
			
			_products.push(product);
		}
	}

	buildProducts();

	obj.getAll = function() {
		return _products;
	}

	obj.getAllCategories = function() {
		return _categories;
	}

	obj.get = function(id) {
		return _products.find(function(product) {
			return product.id === id;
		});
	}

	return obj;

});
