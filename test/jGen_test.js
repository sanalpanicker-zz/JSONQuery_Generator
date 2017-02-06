// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('JGen', function() {
  var $scope, form;
  beforeEach(module('mainApp'));
  beforeEach(inject(function($scope, $window,$compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form">' +
        '<input ng-model="model.somenum" name="somenum" integer />' +
      '</form>'
    );
    $scope.model = { somenum: null }
    $compile(element)($scope);
    $scope.$digest();
    form = $scope.form;
  }));

  describe('integer', function() {
    it('should pass with integer', function() {
      form.somenum.$setViewValue('3');
      expect($scope.model.somenum).toEqual('3');
      expect(form.somenum.$valid).toBe(true);
    });
    it('should not pass with string', function() {
      form.somenum.$setViewValue('a');
      expect($scope.model.somenum).toBeUndefined();
      expect(form.somenum.$valid).toBe(false);
    });
  });
});