(function () {
    var moduleName = "mainApp",
        controllerName = "jGenController"

    angular.module(moduleName)
        .controller(controllerName, ['$scope', '$window', '$compile', '$parse', function ($scope, $window, $compile, $parse) {
            //setting values
            var _gObj, _rObj, first_launch = true;

            //defining how the object should look like
            $scope.query = {
                "table_name": "",
                "start_time": "",
                "end_time": "",
                "select_fields": [],
                "where": []
            };
            //predefined set of values : this can come from backend in actual code
            $scope.tableList = ['time', 'source_vn', 'destination_vn', 'source_port', 'destination_port', 'traffic'];
            $scope.operatorList = ['=', '!='];
            //init scope values
            $scope.Rule = [];
            $scope.Gcounter = 0;
            $scope.Rcounter = 0;

            $scope.selectAndOr = function ($event) {
                $($event.currentTarget).siblings().removeClass('aractive');
                $($event.currentTarget).toggleClass('aractive');
            }

            //function generates querytemplate
            $scope.generateQuery = function (qType) {

                    //for first launch create a new group
                    if (first_launch) {
                        qType = "Group";
                        first_launch = false;
                    } else if (!first_launch && qType == "Group") {
                        $scope.Gcounter++;
                    }
                    //when new group is created  condition creates a new object
                    if (qType === "Group") {
                        $scope.Rcounter = 0;
                        var GrpObj = "group" + $scope.Gcounter;
                        _gObj = $parse(GrpObj).assign($scope, []);
                    }
                    //when new rule is created  condition creates a new object
                    var ruleObj = "rule_" + $scope.Gcounter + "_" + $scope.Rcounter;
                    _rObj = $parse(ruleObj).assign($scope, {});

                    //get the rule template
                    var ruleTemplate = _getQueryTemplate();

                    //if group already present - append the rule.
                    if ($('#group_' + $scope.Gcounter).length) {
                        $('#group_' + $scope.Gcounter).append($compile(ruleTemplate)($scope));
                    } else {
                        //if group not present - create a new group and add rule
                        $('div.qbuild_container').append("<div id=group_" + $scope.Gcounter + " class='group'>");
                        $('#group_' + $scope.Gcounter).append($compile(ruleTemplate)($scope));
                    }
                    //adding the dummy and or button for the users to create query - this dosent do anything on the query.The functionality can be enhanced to add any logic needed.
                    if ($scope.Gcounter !== 0 || $scope.Rcounter !== 0) {
                        if (qType === "Group") {
                            $('#group_' + $scope.Gcounter).before($compile(_generateAndOrButton())($scope));
                        } else {
                            $('#rule_' + $scope.Gcounter + '_' + $scope.Rcounter).prepend($compile(_generateAndOrButton())($scope));
                        }
                    }
                    console.log(JSON.stringify(_rObj));

                    _gObj[$scope.Rcounter] = _rObj;
                    $scope.query.where[$scope.Gcounter] = _gObj;
                    //add the counter once a rule is created.
                    $scope.Rcounter++;
                }
                //AND-OR Button generator
            function _generateAndOrButton() {

                return "<div class='andor_container'><div  ng-click='selectAndOr($event)' class='button andor left aractive'>AND</div><div  ng-click='selectAndOr($event)' class='button andor right'>OR</div></div>";
            }

            function _getQueryTemplate() {
                return "<div id=rule_" + $scope.Gcounter + "_" + $scope.Rcounter + "><select name='table_select' class='qselect' ng-required='true' ng-model='rule_" + $scope.Gcounter + "_" + $scope.Rcounter + ".name'><option ng-repeat='tables in query.select_fields' value={{tables}}>{{tables}}</option></select>" +
                    "<select name='table_select' class='qselect' ng-required='true' ng-model='rule_" + $scope.Gcounter + "_" + $scope.Rcounter + ".operator'><option ng-repeat='operator in operator_fields' value={{operator}}>{{operator}}</option></select>" +
                    "<input name='table_name' class='qselect' ng-required='true' ng-model='rule_" + $scope.Gcounter + "_" + $scope.Rcounter + ".value'></input>";
            }

            //this function is called on start-date change
            $scope.startDate = function () {

                    //make sure start time is less than end time
                    if ($scope.date.start_time) {
                        var dateStr = _formatDateYYYYMMDD($scope.date.start_time);
                        $('input[name=end_time]').attr('min', dateStr);
                    }
                    //convert the date to epoch for query
                    $scope.query.start_time = _convertDateToEPOCH($scope.date.start_time);
                }
                //this function is called on end-date change
            $scope.endDate = function () {

                    //make sure end time is more than start time
                    if ($scope.date.end_time) {
                        var dateStr = _formatDateYYYYMMDD($scope.date.end_time);
                        $('input[name=start_time]').attr('max', dateStr);
                    }
                    //convert the date to epoch for query
                    $scope.query.end_time = _convertDateToEPOCH($scope.date.end_time);
                }
                //function to convert Date to Epoch.
            function _convertDateToEPOCH(dateStr) {
                return new Date(dateStr).getTime();
            }
            //format date object to YYYY-MM-DD format for setting the Max Min attributes
            function _formatDateYYYYMMDD(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                return [year, month, day].join('-');
            }
            //validate JSON to be invoked on validate function
            $scope.validateJSON = function () {
                if ($scope.jGenForm.$valid) {
                    console.log("Data validated sucessfully")
                } else {
                    console.log("The form validation has error : Look for required attributes");
                }
                $scope.formsValid = $scope.jGenForm.$valid;
            }

            //resetting all the json to start over again
            $scope.resetJSON = function () {
                $scope.query = {
                    "table_name": "",
                    "start_time": "",
                    "end_time": "",
                    "select_fields": [],
                    "where": []
                };
                $scope.Gcounter = 0;
                $scope.Rcounter = 0;
                $scope.operator_fields = {};
                $('div.qbuild_container').html('');
            }
            $scope.date = {};
        }])
    module.exports = controllerName;
})()