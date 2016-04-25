var myApp = angular.module('myApp',[]);


myApp.controller('myCtrl', function($scope) {
    $scope.stepsModel = [];
    $scope.step='img_thumbnail.jpg';
    $scope.rotate_val=0;
    $scope.translate_val=0;
    $scope.scale_val=1;
    $scope.opacity_val=1;
    
    $scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            //$scope.stepsModel.push(e.target.result); //for multiple files
        $scope.step=e.target.result;
        });
    }
    
    $scope.addRotate=function(){
        if ($scope.rotate_val==0)
            $scope.rotate_val=45;
        else
            $scope.rotate_val=0;
        $scope.transform = 'rotate('+$scope.rotate_val+'deg) translateX('+$scope.translate_val+'px) scale('+$scope.scale_val+')';
        $scope.opacity = $scope.opacity_val;
    };

    $scope.addTranslate=function(){
        if ($scope.translate_val==0)
            $scope.translate_val=-40;
        else
            $scope.translate_val=0;
        $scope.transform = 'rotate('+$scope.rotate_val+'deg) translateX('+$scope.translate_val+'px) scale('+$scope.scale_val+')';
        $scope.opacity = $scope.opacity_val;
    };
    $scope.addScale=function(){
        if ($scope.scale_val==1)
            $scope.scale_val=0.5;
        else
            $scope.scale_val=1;
        $scope.transform = 'rotate('+$scope.rotate_val+'deg) translateX('+$scope.translate_val+'px) scale('+$scope.scale_val+')';
        $scope.opacity = $scope.opacity_val;
    };

    $scope.addOpacity=function(){
        if ($scope.opacity_val==1)
            $scope.opacity_val=0.5;
        else
            $scope.opacity_val=1;
        $scope.transform = 'rotate('+$scope.rotate_val+'deg) translateX('+$scope.translate_val+'px) scale('+$scope.scale_val+')';
        $scope.opacity = $scope.opacity_val;
    };

    $scope.Reset=function(){
        $scope.rotate_val=0;
        $scope.translate_val=0;
        $scope.scale_val=1;
        $scope.opacity_val=1;
        $scope.transform = 'rotate('+$scope.rotate_val+'deg) translateX('+$scope.translate_val+'px) scale('+$scope.scale_val+')';
        $scope.opacity = $scope.opacity_val;
    };
});