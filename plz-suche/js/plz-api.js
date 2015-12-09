(function($) {
 
    $.fn.plzApi = function(query, settings) {
        
        // default settings
        var _settings = {
            csv: 'zuordnung_plz_ort.csv',
//            columns: [
//                null,
//                {regex: ''},
//                {regex: ''}
//            ]
                
            
        };        
        
        if(typeof settings === "string") {
            _settings.csv = settings;
        }
        
        // Cache CSV
        var csvData = $.ajax({
            type: "GET",
            url: _settings.csv,
            dataType: "text/csv",
            success: function (result) {
               console.dir(result);
               console.dir("done!"+ csvData.getAllResponseHeaders());
             }
        });
        
        
        // execute search
        
        
        return this;
    };
 
}( jQuery ));