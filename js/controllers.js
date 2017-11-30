angular.module('siteControllers',[])

.controller('mainSiteController',['modelService', '$scope',function(modelService,$scope){
//var s = siteStage('json/site.json');

modelService.init().then(

	function(response){
		$scope.data =response;
		$scope.info = $scope.data.siteinfo(); 	
		$scope.article = $scope.data.article();
		$scope.section = $scope.data.section();
		$scope.contacts = $scope.data.contacts();

$scope.section_0 = $scope.section[0];
$scope.contactsA = $scope.contacts[0];
	newPost($scope.data);
},function(response){
	$scope.error = response;
})

	$scope.newPost = function(value){
		modelService.create(value).then(
				function(response){
		$scope.response = response;

	
},function(response){
	$scope.error = response;
})
    
	console.log($scope.error);
	$scope.testData='';

	}    

}])

.controller('postController',['$scope','modelService',function($scope,modelService){

	$scope.newPost = function(value){
		modelService.create(value).then(
				function(response){
		$scope.response = response;

	
},function(response){
	$scope.error = response;
})
    
	console.log($scope.error);
	$scope.testData='';

	}


}])


