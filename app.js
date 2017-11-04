var app = angular.module('VikingStoreApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/products/index');

		$stateProvider
		
		.state('products', {
			url: '/products',
			templateUrl: './templates/products/products.html',
			controller: 'ProductsController',
			resolve: {
				product: function() {
					return undefined;
				}
			}
		})
			.state('products.index', {
				url: '/index',
				templateUrl: './templates/products/index.html'
			})
			.state('products.detail', {
				url: '/detail/:id',
				templateUrl: './templates/products/detail.html',
				controller: 'ProductsDetailController',			
				resolve: {
					product: function($stateParams, ProductService) {
						return ProductService.get($stateParams.id);
					}
				}
			})

		
		.state('cart', {
			url: '/cart',
			templateUrl: './templates/cart/cart.html',
			controller: 'CartController',
		})

		
		.state('checkout', {
			url: '/checkout',
			templateUrl: './templates/checkout/checkout.html',
			controller: 'CheckoutController',
		})
			.state('checkout.shipping', {
				url: '/shipping',
				templateUrl: './templates/checkout/shipping.html',
			})
			.state('checkout.billing', {
				url: '/billing',
				templateUrl: './templates/checkout/billing.html',
			})
			.state('checkout.payment', {
				url: '/payment',
				templateUrl: './templates/checkout/payment.html',
			})
			.state('checkout.confirm', {
				url: '/confirm',
				templateUrl: './templates/checkout/confirm.html',
			});

	}

]);

app.run(function($rootScope){
	
	$rootScope.$on("$stateChangeError", console.log.bind(console));

});
