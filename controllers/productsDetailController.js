app.controller('ProductsDetailController',
	['$scope', 'product', 'ShoppingCartService',
	function($scope, product, ShoppingCartService) {
		$scope.product = product;

		$scope.handleAddToCartClick = function(product) {
			ShoppingCartService.addItem(product, 1);
		}
	}]
);
