// module.exports = function(template,json){
// const fs = require("fs");
// let json = fs.readFileSync("./data.json");
// json = JSON.parse(json);
// var productAt0 = json[0];
// let template = fs.readFileSync("template-product.html").toString();
// let output = template.replace(/{%productName%}/g,productAt0["productName"]);
// output = output.replace(/{%image%}/g,productAt0["image"]);
// output = output.replace(/{%quantity%}/g,productAt0["quantity"]);
// output = output.replace(/{%price%}/g,productAt0["price"]);
// output = output.replace(/{%description%}/g,productAt0["description"]);
// output = output.replace(/{%nutrients%}/g,productAt0["nutrients"]);
// output = output.replace(/{%from%}/g,productAt0["from"]);
// if(productAt0["organic"] == false){
//     output = output.replace(/{%NOT_ORGANIC%}/g,"not-oragnic");
// } 
// return output;
// }
// console.log(output);

module.exports = function(template,json){
    const fs = require("fs");
  let htmlTemplate = template;
    let output = htmlTemplate.replace(/{%productName%}/g,json["productName"]);
    output = output.replace(/{%image%}/g,json["image"]);
    output = output.replace(/{%quantity%}/g,json["quantity"]);
    output = output.replace(/{%price%}/g,json["price"]);
    output = output.replace(/{%description%}/g,json["description"]);
    output = output.replace(/{%nutrients%}/g,json["nutrients"]);
    output = output.replace(/{%from%}/g,json["from"]);
    output = output.replace(/{%id%}/g,json["id"]);
    if(json["organic"] == false){
        output = output.replace(/{%NOT_ORGANIC%}/g,"not-organic");
    } 
    return output;
    }
