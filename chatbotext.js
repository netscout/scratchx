(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_help = function(lang, funcName, callback) {
        var jsonData = new Object();
        jsonData.Lang = lang;
        jsonData.FuncName = funcName;

        $.support.cors = true;
        $.ajax({
            url: 'https://stg.moducoding.com/Chatbot/LanguageReference',
            method:"post",
            crossDomain:true,
            dataType: 'json',
            contentType:"application/json",
            data: JSON.stringify(jsonData),
            success: function( res ) {
                //document.write(res.data.definition);
                callback(res.data.definition);
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
            ['R', '%s 언어, %s 함수의 정의 가져오기', 'get_help', 'c', 'printf'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});