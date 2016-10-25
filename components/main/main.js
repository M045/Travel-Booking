require('./main.scss');
function mainController($scope, $http, $filter) {
    'ngInject';

    //tabs
    $scope.tabs = [
        {title: 'Step One', disabled: true},
        {title: 'Step two', disabled: true},
        {title: 'Step Three', disabled: true}
    ];

    //location selection
    $scope.city = {};
    $scope.city = [{name: 'Bostan'},
        {name: 'New York'},
        {name: 'chicago'},
        {name: 'San Francisco'}];

    $scope.modelData = [];
    $scope.locationData = {};
    $scope.format = 'dd-MMMM-yyyy';


    // mail data
    function sendMail() {
        var departDateFilter = $filter('date')($scope.modelData[1].departDate, "dd-MMMM-yyyy"),
            returnDateFilter = $filter('date')($scope.modelData[1].returnDate, "dd-MMMM-yyyy");

        $http({
            method: 'GET',
            url: 'http://192.168.10.75:7000/postEmail?email=' + $scope.modelData[0].email +
            '&fName=' + $scope.modelData[0].fName +
            '&lName=' + $scope.modelData[0].lName +
            '&phone=' + $scope.modelData[0].phone +
            '&location=' + $scope.locationData.location.name +
            '&departDate=' + departDateFilter +
            '&returnDate=' + returnDateFilter

        }).then(function successCallback(response) {
            console.log('response', response);
        });
    }

    $scope.tabIndex = 1;

    // next button function
    $scope.nextSelection = function (data) {
        $scope.modelData.push(data);
        $scope.tabIndex++;

    };
    // submit function
    $scope.formSubmit = function () {
        sendMail();
    };

    // calender
    $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date()
    };

    $scope.deportDate = function () {
        $scope.deportPopUp.opened = true;
    };

    $scope.returnDate = function () {
        $scope.returnPopUp.opened = true;
    };

    $scope.deportPopUp = {
        opened: false
    };

    $scope.returnPopUp = {
        opened: false
    };
}
export default mainController;