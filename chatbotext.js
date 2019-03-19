(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_temp = function(lang, funcName, callback) {
        var jsonData = new Object();
        jsonData.Lang = lang;
        jsonData.FuncName = funcName;

        $.ajax({
            url: 'https://stg.moducoding.com/Chatbot/LanguageReference',
            dataType: 'jsonp',
            body: JSON.stringify(jsonData),
            success: function( weather_data ) {
                callback(res.json());
            }
        });

        // fetch('https://stg.moducoding.com/Chatbot/LanguageReference', {
        //     method: 'post',
        //     headers: {
        //         //'Authorization' : `Bearer ${token}`,
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(jsonData)
        // })
        // .then(res => {
        //     if(res.ok){
        //         callback(res.json());
        //     }
        // });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', '%s 함수의 정의 가져오기', 'get_help', 'c', 'printf'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});