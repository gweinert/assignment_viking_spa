app.controller('ProductsController',
	['$scope', 'product', 'ProductService', 'ShoppingCartService',
	function($scope, product, ProductService, ShoppingCartService) {
		
		$scope.categories = ProductService.getAllCategories();
		
		$scope.products = ProductService.getAll();
		
		$scope.categoryFilter = undefined;

		$scope.handleAddToCartClick = function(product) {
			ShoppingCartService.addItem(product, 1);
		}
	
	}]
);
