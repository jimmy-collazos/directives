'use strict';
describe('directives', function() {
    var $scope;
    var $compile;

    //método para compilar nuestra directiva
    var compileDirective = function (markup, scope) {
        var el = $compile(markup)(scope);
        scope.$digest();
        return el;
    };

    //arrancamos el modulo
    beforeEach(module('directives'));

    //guardamos la referencia al $rootScope y $compile de nuestra aplicación
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));
});
