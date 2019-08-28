var http = require("http");
var url = require('url');
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }); // 写不写有关系
    var params = url.parse(request.url, true); //已经是个对象了
    var query = params.query;
    console.log(params)
    if (query.user == "caiwenji") {
        var data = require("./data.json");
        var resultData = data.filter((item, index) => index > (query.page - 1) * query.size && index < query.page * query.size - 1);
        response.write(JSON.stringify(resultData));
    } else {
        response.write("用户名错误");
    }
    response.end();
}).listen(3000)