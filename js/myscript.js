const URl="https://covid19.mathdro.id/api";
let app=angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http)=>{
    $scope.title="Stay Home Stay Safe";
    $http.get(URl).then((response)=>{
        console.log(response.data);
        $scope.all_data=response.data;
    },(error)=>{
        console.log(error);
    })
    //get country data
    $scope.get_c_data=()=>{
        // console.log($scope.c);
        let country=$scope.c;
        if (country=="") {
            $scope.c_data=undefined;
            return;
        }
        // $http.get(`${URL}/countries/${country}`)
        $http.get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then((response)=>{
            console.log(response.data);
            $scope.c_data=response.data;
        },(error)=>{
            console.log(error)
        })
    }
});