app.controller('CheckoutController',
	['$scope', 'ShoppingCartService',
	function($scope, ShoppingCartService) {
		
		$scope.cartItems = ShoppingCartService.listAll();
	
	}]
);
