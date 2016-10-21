function introController($scope) {
 $scope.message = "This app is solution to your problems";
 }

function viewphwController($scope,$http) {
     var url="http://127.0.0.1:8081/gethws";
     $http.get(url).success( function(response) {
     $scope.hws = response; 
     $scope.message = "This page will be used to display all the pending homeworks";
 });

//this function deletes the row from the scope
function deleterow(subject){
    var index = -1;		
    var comArr = eval( $scope.hws );
    for( var i = 0; i < comArr.length; i++ ) {
        if( comArr[i].subject === subject ) {
	    index = i;
	    break;
	    }
	}
	if( index === -1 ) {
	    alert( "Something gone wrong" );
	}
	$scope.hws.splice( index, 1 );
}
    $scope.deleterow =deleterow;
    //this function is used to send the ajax requests
    $scope.editsubject = function ( count,subject ) {
	if(count==1)
	    $http.get("http://127.0.0.1:8081/deletehw/"+subject).success( function(response) {deleterow(subject);})
	else
	    $http.get("http://127.0.0.1:8081/donehw/"+subject).success( function(response) {deleterow(subject);})		
    };
}

//to view done work this controller is used
function viewdhwController($scope,$http) {
    var url="http://127.0.0.1:8081/getdonehws";
    $http.get(url).success( function(response) {
    $scope.hws = response;
    $scope.message = "This page will be used to display all the done homeworks";
    });
    $scope.editsubject = function (subject ) {
	$http.get("http://127.0.0.1:8081/deletehw/"+subject).success( function(response) {console.log(response);})
	var index = -1;		
	var comArr = eval( $scope.hws );
	for( var i = 0; i < comArr.length; i++ ) {
	    if( comArr[i].subject === subject ) {
	        index = i;
		break;
	    }
	}
	if( index === -1 ) {
	    alert( "Something gone wrong" );
	}
	$scope.hws.splice( index, 1 );		
	};
}
//this function sends the formdata to the server
function formController($scope,$http) { 
    $scope.add = function(){
        $http.post('http://127.0.0.1:8081/addhw',$scope.formData).
        success(function(data) {
	    document.getElementById('message').innerHTML = "homework added successfully";
	    $scope.reset();
        }).error(function(data) {
            document.getElementById('message').innerHTML = "error in adding homework";
        })
      }   
    $scope.reset = function(){
    $scope.formData=null;
    }   
}

//search controller
function searchController($scope,$http) {
var url="http://127.0.0.1:8081/gethws";
    $http.get(url).success( function(response) {
    $scope.hws = response;
    $scope.search   = '';
 });
}
