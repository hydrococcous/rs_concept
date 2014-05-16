var App = {};

App.comments = function($scope){
	$scope.comments = [
		{
			name: 'Sandro',
			text: 'Hallo Leute',
			approved: 1
		},
		{
			name: 'Gizella',
			text: 'Hallo Sandro, wie gehts',
			approved: 1
		},
		{
			name: 'Hannah',
			text: 'Hallo Mama und Papa',
			approved: 0
		}
	];
	
	$scope.count = $scope.comments.length;
	
	$scope.approve = function(){
		console.log(this.comment);
		this.comment.approved = true;
	};
	
	$scope.drop = function(){
		this.comments.splice(this.comments.indexOf(this.comment),1);
	};
};
