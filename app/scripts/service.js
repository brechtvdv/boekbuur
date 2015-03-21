angular.module('boekbuurApp')
	.factory('DataSource', ['$http',function($http){
       return {
           get: function(request){
                $http.get(
                    'http://localhost/cors.php?isbn=' + request.isbn,
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    request.callback(data);
                })
           },
          parse: function(data){
            var resultaat = [];
            var boek = { titel : data.aquabrowser.results.result.titles.title, 
                        auteur: data.aquabrowser.results.result.authors["main-author"]
                        };
            resultaat.push(boek);

            return resultaat;
          }
       }

    }]);