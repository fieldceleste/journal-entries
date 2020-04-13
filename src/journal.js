export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = 1;
  this.vowelWords = 0;
  this.constWords = 0;
}
Entry.prototype.vowelWords = function () {
  var arrayBody = this.body.split("");
  var vowels = 0;
  var wordCount = 0;
  var constWords = 0;
  arrayBody.forEach(function (letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowels += 1;
    vowels += 1;
  } else if (letter === '') {
    wordCount += 1
  } else if (letter === "." || letter === "," || letter === "!" || letter === "?") {
    wordCount += 0
  } else{
    constWords +=1;

  }

});

this.vowelWords= vowels;
this.wordCount += wordCount;
this.constCount = constWords;
return Entry
};
Entry.prototype.getTeaser= function() {
  var arrayWord = this.body.split("",8);
  var teaser= arrayWord.join("") +"...";
  console.log(teaser)
}








