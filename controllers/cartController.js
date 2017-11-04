app.controller('CartController',
	['$scope', 'ShoppingCartService',
	function($scope, ShoppingCartService) {

		$scope.items = ShoppingCartService.listAll();

		$scope.onQuantityChange = function(item) {
			ShoppingCartService.updateCartQuantity()
		}
	
	}]
);
