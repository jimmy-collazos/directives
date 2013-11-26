/**
 * Posibles valores de 'restrict'
 * E - elemento
 * A - Atributo
 * C - Clase
 * M - Comentario
 */
app.directive('ejHelloworld', function(){
    return {
        restrict:'EA', //por defecto biene 'A'
        template:'{{message}}',
        link: function(scope, element, attrs){
            scope.message = attrs.message || 'hello world';
            element.addClass('hola');
        }
    };
});