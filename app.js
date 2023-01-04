var app = angular.module("myApp", [])
        app.controller("nameCtrl",function ($scope) {

    $scope.names = [
        { username : "manoj",userid: 1000,id: 1000, date:"30/11/2000", time:"20:30",text:"Hello connections, this is new video on Web Development"},
        { username : "manoj",userid: 1000,id: 1001, date: "10/11/2000", time: "1:30", text: "Hello connections, this is new video on Android Development" },
        { username : "manoj",userid: 1000,id: 1002, date: "7/6/2000", time: "12:00", text: "Hello connections, this is new video on Full Stack Development" },
        { username : "manoj",userid: 1000,id: 1003, date: "12/5/2000", time: "9:45", text: "Hello connections, this is new video on Software Enginnering" },
        { username : "manoj",userid: 1000,id: 1004, date: "2/2/2000", time: "18:05", text: "Hello connections, this is new video on Microprocessor" },
    ];

        $scope.orderByMe = function(x) {
        $scope.myOrderBy = x; 
        }
});
