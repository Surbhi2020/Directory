var http = require("http");
const url = require("url");
var fs = require("fs");
var replace = require("./replace.js");
var obj = fs.readFileSync("./data.json");
var jsonObj = JSON.parse(obj);
var templateProduct = fs.readFileSync("./template-product.html").toString();
var templatecard = fs.readFileSync("./template-card.html").toString();
var templateOverview = fs.readFileSync("./template-overview.html").toString();
var server = http.createServer(function(req,res){
    var makecard = function(templatecard,json){
        return replace(templatecard,json);
    };
    var path = req.url;
    console.log(url.parse(path,true));
    var id = url.parse(path,true).query.id;
    console.log(id);
    var path = url.parse(path,true).pathname;
        if(path =="/product"){
        let ProductHtml = replace(templateProduct,jsonObj[id]);
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end(ProductHtml);
    }
    else if(path == '/' || path =="/overview"){
           res.writeHead(200,{"Content-type":"text/html"});
           var cards = "";
           for(let i = 0 ;i < jsonObj.length;i++){
               cards += makecard(templatecard,jsonObj[i]);
           }
           let overviewHtml = templateOverview.replace("{%PRODUCT_CARDS%}",cards);
           res.end(overviewHtml);
    }
    else if(path == "/api?id=0"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("api Page");
    }
    else{
        res.writeHead(404);
        res.end("Error");
    }
});
  var port = process.env.PORT||80;
 server.listen(port);
 console.log("Server is listening at" + port);