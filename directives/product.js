app.directive('product', function() {
	return {
		restrict: 'E',
		scope: {
			product: '=',
			onAddToCartClick: '&',
		},
		templateUrl: './directives/product.html',
		link: function($scope, $element, $attributes) {
		},
	};
})