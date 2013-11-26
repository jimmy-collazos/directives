'use strict';
describe('Directiva Hello world', function() {
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

    describe('leemos el mensaje', function(){
        it('como atributo', function(){
            var element = compileDirective('<div data-ej-helloworld="" />', $scope);
            expect(element.text()).toBe('hello world');
        });
        it('como etiqueta', function(){
            var element = compileDirective('<ej-helloworld />', $scope);
            expect(element.text()).toBe('hello world');
        });
        it('mirando message en el scope', function(){
            var element = compileDirective('<ej-helloworld />', $scope);
            expect($scope.message).toBe('hello world');
        });
        it('mirando message en el scope', function(){
            var element = compileDirective('<ej-helloworld data-message="hola" />', $scope);
            expect($scope.message).toBe('hola');
        });
        it('comprobando clase', function(){
            var element = compileDirective('<ej-helloworld />', $scope);
            expect(element.hasClass('hola')).toBe(true);
        });
    });

});
