export function Entry(title,body) {
this.title= title;
this.body=body;
this.wordCount=1;
this.vowelWords=0;
this.constWords=0;
}
Entry.prototype.vowelWords = function (){
  var arrayBody = this.body.split ("");
  var vowels = 0;
  var wordCount= 0;
  var constWords = 0;
  arrayBody.forEach(function(letter){
    for (letter === 'a') || letter=== 'e' || letter=== 'i' ||  letter === 'o' || letter === 'u') {
      
  }
}






  


var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}