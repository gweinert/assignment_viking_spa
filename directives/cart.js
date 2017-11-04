app.directive('cart', function(ShoppingCartService) {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: './directives/cart.html',
		link: function($scope) {
			$scope.cart = ShoppingCartService;
		},
	}
});
